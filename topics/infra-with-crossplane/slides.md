---
theme: meetup
layout: intro
lineNumbers: false
favicon: /shared/favicon.png
download: https://talks.boerger.ws/infra-with-crossplane/slides.pdf

themeConfig:
  title: Infrastructure with Crossplane
  twitter: tboerger
  github: tboerger
---
# Infrastructure with Crossplane

---
layout: presenter
photo: /shared/tboerger.jpg
---
# Thomas Boerger

Cloud Engineer @ cloudpunks GmbH

* <mdi-heart /> Golang
* Containers
* Kubernetes
* Terraform
* Ansible
* Prometheus

---
layout: default
---
# Crossplane in a nutshell

> Build control planes without needing to write code. Crossplane has a highly
> extensible backend that enables you to orchestrate applications and
> infrastructure no matter where they run, and a highly configurable frontend
> that lets you define the declarative API it offers.

<br>

- Universal control plane for cloud infrastructure
- Cloud services defined in a declarative way
- Managed cloud resources for all big cloud providers
- Accurate presentation of cloud resources per manifest
- Composable resource definitions (XRD) for new abstractions
- Distribution and updates by configurations and packages

---
layout: default
---
# Crossplane vs. Terraform (1/3)

<img src="/images/terraform.png" class="m-auto block h-95">

> Source: https://blog.crossplane.io/crossplane-vs-terraform/

---
layout: default
---
# Crossplane vs. Terraform (2/3)

<img src="/images/crossplane.png" class="m-auto block h-95">

> Source: https://blog.crossplane.io/crossplane-vs-terraform/

---
layout: default
---
# Crossplane vs. Terraform (3/3)

<img src="/images/combined.png" class="m-auto block h-95">

> Source: https://blog.crossplane.io/crossplane-vs-terraform/

---
layout: default
---
# Crossplane Architecture

<img src="/images/architecture.png" class="m-auto block h-95">

---
layout: default
---

# Resource Types

<img src="/images/resources.png" class="m-auto block h-95">

---
layout: default
---
# Resource Lifecycle

<img src="/images/lifecycle.png" class="m-auto block h-95">

---
layout: default
---
# Requirements for Crossplane

- Obviously a running Kubernetes cluster (single node also works)
- You really need Kubectl
- Optionally install the Crossplane plugin for Kubectl
- Know how to correctly edit YAML files!
- Some basic knowledge to apply Kubernetes manifests

---
layout: window
---
# Install Crossplane Core

::window::

```text
$ helm repo add crossplane https://charts.crossplane.io/stable
"crossplane" has been added to your repositories

$ helm repo update
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "crossplane" chart repository
Update Complete. ⎈Happy Helming!⎈

$ helm install crossplane -n crossplane-system --create-namespace crossplane/crossplane
NAME: crossplane
LAST DEPLOYED: Tue Sep 20 15:57:26 2022
NAMESPACE: crossplane-system
STATUS: deployed

$ kubectl create namespace crossplane-demo
namespace/crossplane-demo created
```

---
layout: window
---
# Prepare Provider for AWS

::window::

```text
$ kubectl -n crossplane-system create secret generic aws-creds \
  --from-file=creds=aws-creds.conf
secret/aws-creds created

$ kubectl apply -f snippets/aws.yml
provider.pkg.crossplane.io/provider-aws created
providerconfig.aws.crossplane.io/default created

$ kubectl -n crossplane-system get providers,pod -l pkg.crossplane.io/provider=provider-aws
NAME                                      INSTALLED   HEALTHY   PACKAGE                           AGE
provider.pkg.crossplane.io/provider-aws   True        True      crossplane/provider-aws:v0.32.0   1337s

NAME                                             READY   STATUS    RESTARTS   AGE
pod/provider-aws-f8b40345edc7-869f679894-rmnkj   1/1     Running   0          1337s
```

::bottom::
> **You can find the snippet at https://github.com/tboerger/talks/tree/master/topics/infra-with-crossplane/snippets/aws.yml**

<!--
- gopass cat root/crossplane-demo/aws | kubectl -n crossplane-system create secret generic aws-creds --from-file=creds=/dev/stdin
- kubectl apply -f https://raw.githubusercontent.com/tboerger/talks/master/topics/infra-with-crossplane/snippets/aws.yml
-->

---
layout: window
---
# Create Database on AWS

::window::

```text
$ kubectl apply -f snippets/awsdb.yml
rdsinstance.database.aws.crossplane.io/crossplane-demo created

$ kubectl get rdsinstance.database.aws.crossplane.io/crossplane-demo
NAME              READY   SYNCED   STATE       ENGINE     VERSION   AGE
crossplane-demo   True    True     available   postgres   13.7      1337s

$ kubectl -n crossplane-demo get secret aws-postgres
NAME           TYPE                                DATA   AGE
aws-postgres   connection.crossplane.io/v1alpha1   4      1337s
```

::bottom::
> **You can find the snippet at https://github.com/tboerger/talks/tree/master/topics/infra-with-crossplane/snippets/awsdb.yml**

<!--
- kubectl apply -f https://raw.githubusercontent.com/tboerger/talks/master/topics/infra-with-crossplane/snippets/awsdb.yml
- kubectl  -n crossplane-demo get secret aws-postgres -o yaml
- kubectl delete -f https://raw.githubusercontent.com/tboerger/talks/master/topics/infra-with-crossplane/snippets/awsdb.yml
-->

---
layout: default
---
# Final PostgreSQL on AWS

<img src="/images/aws.png" class="w-m inline-block bg-current">

---
layout: window
---
# Prepare Provider for Azure

::window::

```text
$ kubectl -n crossplane-system create secret generic azure-creds \
  --from-file=creds=azure-creds.json
secret/azure-creds created

$ kubectl apply -f snippets/azure.yml
provider.pkg.crossplane.io/provider-azure created
providerconfig.azure.crossplane.io/default created

$ kubectl -n crossplane-system get providers,pod -l pkg.crossplane.io/provider=provider-azure
NAME                                        INSTALLED   HEALTHY   PACKAGE                             AGE
provider.pkg.crossplane.io/provider-azure   True        True      crossplane/provider-azure:v0.19.0   1337s

NAME                                              READY   STATUS    RESTARTS   AGE
pod/provider-azure-4e71f9c5dcc1-867bd7cd6-k7n7b   1/1     Running   0          1337s
```

::bottom::
> **You can find the snippet at https://github.com/tboerger/talks/tree/master/topics/infra-with-crossplane/snippets/azure.yml**

<!--
- gopass cat root/crossplane-demo/azure | kubectl -n crossplane-system create secret generic azure-creds --from-file=creds=/dev/stdin
- kubectl apply -f https://raw.githubusercontent.com/tboerger/talks/master/topics/infra-with-crossplane/snippets/azure.yml
-->

---
layout: window
---
# Create Database on Azure

::window::

```text
$ kubectl apply -f snippets/azuredb.yml
resourcegroup.azure.crossplane.io/crossplane-demo created
postgresqlserver.database.azure.crossplane.io/crossplane-demo created

$ kubectl get postgresqlserver.database.azure.crossplane.io/crossplane-demo
NAME              READY   SYNCED   VERSION   AGE
crossplane-demo   True    True     11        1337s

$ kubectl -n crossplane-demo get secret azure-postgres
NAME             TYPE                                DATA   AGE
azure-postgres   connection.crossplane.io/v1alpha1   4      1337s
```

::bottom::
> **You can find the shortlink targets at https://github.com/tboerger/talks/tree/master/topics/infra-with-crossplane/snippets/azuredb.yml**

<!--
- kubectl apply -f https://raw.githubusercontent.com/tboerger/talks/master/topics/infra-with-crossplane/snippets/azuredb.yml
- kubectl  -n crossplane-demo get secret azure-postgres -o yaml
- kubectl delete -f https://raw.githubusercontent.com/tboerger/talks/master/topics/infra-with-crossplane/snippets/azuredb.yml
-->

---
layout: default
---
# Final PostgreSQL on Azure

<img src="/images/azure.png" class="text-center w-m inline-block bg-current">

---
layout: center
---
# Questions?

<img src="/shared/questions.jpg" class="w-m inline-block">

---
layout: center
---
# Thank you!

<img src="/shared/applause.jpg" class="w-m inline-block">

---
layout: qrcode
url: https://talks.boerger.ws/infra-with-crossplane/
---
# Link to slides
