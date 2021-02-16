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
- 2: Something that has been used in this course that something was depending on (red)
- 3 : Used outside of this course (black)

| Service/Logo | Selection | Category | Description |
| ------------ |:---------:|:--------:| -----------:| 
| Microsoft SQL Server  | 3 | Database |   |
| MongoDB | 3 | Database | |
| MySQL| 3 | Database | |
| Redis | 3 | Database | |
| PostgreSQL | 1 | Database | I used PostgreSQL for database in this course |
| Azure Event Hubs| 3 |  | Streaming & Messaging | | 