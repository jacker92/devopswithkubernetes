const axios = require('axios')

const postRandomTodo = async () => {
    const res = await axios.get('https://en.wikipedia.org/wiki/Special:Random')
    const url = res.request._redirectable._currentUrl
    console.log("Got result", url)

    const response = await axios.post('http://todo-svc:2346/todos', {
        todo: url
    })

    console.log("Got response after posting", response)
}

postRandomTodo()