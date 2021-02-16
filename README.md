# Devops with Kubernetes

This repository contains all tasks mentioned in [DevOps with Kubernetes 2020](https://devopswithkubernetes.com)

## Task 3.06 - DBaaS vs DIY

### DBaaS

(+) Database size can be easily limited  
(+) Scalability  
(+) Upgrading  
(+) Backups  
(+) Monitoring

### DIY

(+) Cheaper alternative  
(-) No simple way to limit database size  
(-) Node failure could cause data loss

## Task 3.07 - Commitment

I chose Postgres. Reason was because I had already implemented project with it in previous assignments. 

## Task 4.03 - Prometheus

**Query**:  
scalar(count(kube_pod_info{namespace='prometheus',created_by_kind='StatefulSet'}))

## Task 5.04 - Platform comparison, OpenShift vs Rancher

After comparing these two platforms and reading reviews about them, I came to conclusion, that I would *definitely* choose Rancher over OpenShift.

### OpenShift
(+) Better partner ecosystem
(+) Has out-of-the-box networking solution called Open vSwitch
(-) Installation can take from several days to several weeks
(-) Clients have reported failed version upgrades and rollbacks 
(-) Does not use CNCF practises

### Rancher
(+) Fast installation, takes 20min to 2h
(+) Upgrades have been reported to be smooth
(+) No vendor lock-in and switch to vanilla Kubernetes can be made
(+) 24/7 worldwide support provides great customer experience
(-) Limited partner channel

## Task 5.6

Column "Selection" can be one of the following:
- 1: Used on this course . Something that you knew that you were using it (black)
- 2: Something that has been used in this course that something was depending on (red in the pic)
- 3 : Used outside of this course (black in the pic)

### Database

| Service/Logo | Selection | Description |
| :------------ |:---------:| :-----------:| 
| Microsoft SQL Server  | 3 | - |  
| MongoDB | 3 | - |
| MySQL| 3 | - | 
| Redis | 3 | - | 
| PostgreSQL | 1 | I used PostgreSQL for database in this course |

### Streaming & Messaging

| Service/Logo | Selection | Description |
| :------------ |:---------| :-----------:| 
| Azure Event Hubs| 3 | - |

### Application Definition & Image Build

| Service/Logo | Selection | Description |
| :------------ |:---------| :-----------:| 
| HELM | 1 |  I used HELM on this course to install stuff to Kubernetes cluster |
| Bitnami | 1 | I used Bitnami's sealed secrets from part 2 and beyond |
| Docker Compose | 3 | - |

### Continous Integration & Delivery
| Service/Logo | Selection | Description |
| :------------ |:---------| :-----------:| 
| Azure Pipelines | 3 | - |
| Flux | 2 | I marked this as 2 because our GitOps-workflow did use this in tool in Part 4 and was dependent on this | 
| GitHub Actions | 3 | - |

### Platform - Certified Kubernetes - Distribution
| Service/Logo | Selection | Description |
| :------------ |:---------| :-----------:| 
| Rancher | 1 | Used in this course as lightweight cluster
| Docker | 2 | I marked this as no. 2 because Rancher is user Docker under the hood

### Platform - Certified Kubernetes - Hosted
| Service/Logo | Selection | Description |
| :------------ |:---------| :-----------:| 
| Microsoft Azure | 3 | - |
| Azure Kubernetes Service | 3 | - |
| Google Kubernetes Engine | 1 | In part 3 we used GKE |

### Platform - Certified Kubernetes - Installer
| Service/Logo | Selection | Description |
| :------------ |:---------| :-----------:| 
| Google Cloud | 1 | We used Google Cloud installer in this course |

### Platform - PaaS/Container Service
| Service/Logo | Selection | Description |
| :------------ |:---------| :-----------:| 
| Heroku | 3 | - |

### Observability and Analysis - Monitoring
| Service/Logo | Selection | Description |
| :------------ |:---------| :-----------:| 
| Prometheus | 1 | We used Prometheus in this course for monitoring our cluster, starting from part 2 |
| Grafana | 1 | Grafana was used to view the monitoring data in part 2 |
| Azure Monitor | 3| | - |

### Observability and Analysis - Logging
| Service/Logo | Selection | Description |
| :------------ |:---------| :-----------:| 
| Grafana loki | 1 | Grafana loki was used in part 2

### Serverless
| Service/Logo | Selection | Description |
| :------------ |:---------| :-----------:| 
| Azure Functions | 3 | - |
| Knative | 1 | Knative was used in part 5


### Scheduling & Orchestration










