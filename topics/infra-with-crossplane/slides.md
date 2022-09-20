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
# Requirements

- Obviously a running Kubernetes setup
- You really need Kubectl
- Optionally install the Crossplane plugin for Kubectl
- Know how to correctly edit YAML files!

---
layout: default
---
# Crossplane Architecture

<img src="/architecture.png" class="m-auto block h-100">

---
layout: default
---

# Resource Types

<img src="/resources.png" class="m-auto block h-100">

<!--

-->

---
layout: default
---
# Resource Lifecycle

<img src="/lifecycle.png" class="m-auto block h-100">

---
layout: window
---
# Install Crossplane core

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
REVISION: 1
TEST SUITE: None
NOTES:
Release: crossplane
```












---
layout: window
---
# Install AWS provider (1/x)

::window::

```text
$ cat <<EOF | kubectl -n crossplane-system apply -f -
apiVersion: pkg.crossplane.io/v1
kind: Provider
metadata:
  name: provider-aws
spec:
  package: "crossplane/provider-aws:v0.32.0"
EOF

provider.pkg.crossplane.io/provider-aws created

$ kubectl -n crossplane-system get providers provider-aws
NAME           INSTALLED   HEALTHY   PACKAGE                           AGE
provider-aws   True        True      crossplane/provider-aws:v0.32.0   99s

$ kubectl -n crossplane-system get pod -l pkg.crossplane.io/provider=provider-aws
NAME                                         READY   STATUS    RESTARTS   AGE
provider-aws-f8b40345edc7-7d4855c74d-dqf52   1/1     Running   0          2s
```

---
layout: window
---

# Install AWS provider (2/x)

::window::

```text
$ cat <<EOF | kubectl -n crossplane-system apply -f -
apiVersion: v1
kind: Secret
metadata:
  name: aws-creds
type: Opaque
data:
  creds: BASE64_ENCODED_CREDENTIALS
EOF
```

::bottom::

<br>

```text
[default]
aws_access_key_id =
aws_secret_access_key =
```

<!--
Retrieve credentials: gopass cat root/aws/creds | base64 -w0
-->

---
layout: window
---
# Install AWS provider (3/x)

::window::

```text
$ cat <<EOF | kubectl -n crossplane-system apply -f -
apiVersion: aws.crossplane.io/v1beta1
kind: ProviderConfig
metadata:
  name: default
spec:
  credentials:
    source: Secret
    secretRef:
      namespace: crossplane-system
      name: aws-creds
      key: creds
EOF

$ kubectl get providerconfigs.aws.crossplane.io -o name
providerconfig.aws.crossplane.io/default
```





















---
layout: window
---
# Install Azure provider (1/x)

::window::

```text
$ cat <<EOF | kubectl -n crossplane-system apply -f -
apiVersion: pkg.crossplane.io/v1
kind: Provider
metadata:
  name: provider-azure
spec:
  package: "crossplane/provider-azure:v0.19.0"
EOF

provider.pkg.crossplane.io/provider-azure created

$ kubectl -n crossplane-system get providers provider-azure
NAME             INSTALLED   HEALTHY   PACKAGE                             AGE
provider-azure   True        True      crossplane/provider-azure:v0.19.0   98s

$ kubectl -n crossplane-system get pod -l pkg.crossplane.io/provider=provider-azure
NAME                                           READY   STATUS    RESTARTS   AGE
provider-azure-4e71f9c5dcc1-856ff49c6d-bwp47   1/1     Running   0          61s
```

---
layout: window
---
# Install Azure provider (2/x)

::window::

```text
$ cat <<EOF | kubectl -n crossplane-system apply -f -
apiVersion: v1
kind: Secret
metadata:
  name: azure-creds
type: Opaque
data:
  creds: BASE64_ENCODED_CREDENTIALS
EOF
```

::bottom::

<br>

```text
{
  "appId": "",
  "displayName": "",
  "password": "",
  "tenant": ""
}
```

<!--
Retrieve credentials: gopass cat root/azure/creds | base64 -w0
-->

---
layout: window
---
# Install Azure provider (3/x)

::window::

```text
$ cat <<EOF | kubectl -n crossplane-system apply -f -
apiVersion: azure.crossplane.io/v1beta1
kind: ProviderConfig
metadata:
  name: default
spec:
  credentials:
    source: Secret
    secretRef:
      namespace: crossplane-system
      name: azure-creds
      key: creds
EOF

$ kubectl get providerconfigs.azure.crossplane.io -o name
providerconfigs.azure.crossplane.io/default
```









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
