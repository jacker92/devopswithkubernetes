const k8s = require('@kubernetes/client-node')
const request = require('request')
const JSONStream = require('json-stream')
const fs = require('fs').promises
const mustache = require('mustache')

const kc = new k8s.KubeConfig();

kc.loadFromCluster()

const opts = {}
kc.applyToRequest(opts)

const client = kc.makeApiClient(k8s.CoreV1Api);

client.listPodForAllNamespaces()

const sendRequestToApi = async (api, method = 'get', options = {}) => new Promise((resolve, reject) => request[method](`${kc.getCurrentCluster().server}${api}`, {...opts, ...options, headers: { ...options.headers, ...opts.headers }}, (err, res) => err ? reject(err) : resolve(JSON.parse(res.body))))

const createJob = async (fields) => {
  const yaml = await getJobYAML(fields)

  return sendRequestToApi(`/apis/batch/v1/namespaces/${fields.namespace}/jobs`, 'post', {
    headers: {
      'Content-Type': 'application/yaml'
    },
    body: yaml
  })
}

const getJobYAML = async (fields) => {
  const deploymentTemplate = await fs.readFile("job.mustache", "utf-8")
  return mustache.render(deploymentTemplate, fields)
}

const fieldsFromDummySite = (object) => ({
  container_name: object.metadata.name,
  job_name: `${object.metadata.name}-job`,
  namespace: object.metadata.namespace,
  delay: object.spec.delay,
  website_url: object.spec.website_url
})

const maintainStatus = async () => {
  const dummysite_stream = new JSONStream()

  dummysite_stream.on('data', async ({ type, object }) => {
    console.log("Received data from stream", object, type)
    const fields = fieldsFromDummySite(object)

    if (type === 'ADDED') {
      createJob(fields)
    }
  })

  request.get(`${kc.getCurrentCluster().server}/apis/stable.dwk/v1/dummysites?watch=true`, opts).pipe(dummysite_stream)

  const job_stream = new JSONStream()
  job_stream.on('data', async ({ type, object }) => {
      console.log(type, object)
  })

  request.get(`${kc.getCurrentCluster().server}/apis/batch/v1/jobs?watch=true`, opts).pipe(job_stream)
}

maintainStatus()