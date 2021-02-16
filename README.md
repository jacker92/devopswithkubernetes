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