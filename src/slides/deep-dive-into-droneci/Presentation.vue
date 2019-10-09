<template>
  <div id="drone">
    <div class="eg-slideshow">
      <slide enter="fadeIn" leave="fadeOut">
        <img class="logo" alt="DroneCI" src="./assets/droneci.svg" />

        <h1 class="has-text-centered">
          Deep dive into DroneCI
        </h1>

        <p class="has-text-centered">
          A presentation about DroneCI and the available runners
        </p>
      </slide>

      <slide id="intro" enter="bounceInRight" leave="fadeOut">
        <h3>
          $ whoami
        </h3>

        <figure class="photo image is-128x128">
          <img class="is-rounded" src="./../../assets/photo.jpg" alt="That's me!">
        </figure>

        <p>
          <strong>Thomas Boerger</strong><br />
          DevOps Engineer<br />
          ownCloud GmbH<br />
        </p>

        <br />

        <p>
          <github-icon /> tboerger<br />
          <twitter-icon /> tboerger<br />
        </p>

        <br />

        <p>
          In love with Go + Containers, Automation addicted, Terraform and Ansible everywhere!
        </p>
      </slide>

      <slide class="smaller" enter="fadeIn" steps="11">
        <h3>
          About Drone CI
        </h3>

        <eg-transition enter="fadeIn">
          <p v-if="step == 1">
            <img class="war-of-the-worlds" src="./assets/war-of-the-worlds.jpg" alt="War Of The Worlds" />
          </p>
        </eg-transition>

        <eg-transition enter="fadeIn">
          <p class="is-size-4" v-if="step >= 2">
            <b>Drone CI is a self-service Continuous Delivery platform for busy development teams.</b>
          </p>
        </eg-transition>

        <br />

        <div class="columns">
          <div class="column is-one-third is-size-4 has-text-centered" v-if="step >= 3">
            <img class="image is-64x64 provider" src="./assets/many-source-code-managers.svg" />
            Many SCMs
          </div>
          <div class="column is-one-third is-size-4 has-text-centered" v-if="step >= 4">
            <img class="image is-64x64 provider" src="./assets/any-platform.svg" />
            Any platform
          </div>
          <div class="column is-one-third is-size-4 has-text-centered" v-if="step >= 5">
            <img class="image is-64x64 provider" src="./assets/any-language.svg" />
            Any language
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-third is-size-4 has-text-centered" v-if="step >= 6">
            <img class="image is-64x64 provider" src="./assets/simple-configuration.svg" />
            Simple config
          </div>
          <div class="column is-one-third is-size-4 has-text-centered" v-if="step >= 7">
            <img class="image is-64x64 provider" src="./assets/isolated-builds.svg" />
            Isolated builds
          </div>
          <div class="column is-one-third is-size-4 has-text-centered" v-if="step >= 8">
            <img class="image is-64x64 provider" src="./assets/effortless-scaling.svg" />
            Effortless scaling
          </div>
        </div>

        <br />

        <div class="columns">
          <div class="column is-one-third is-size-4 has-text-centered" v-if="step >= 9">
            <arrow-icon /> Configuration as code
          </div>
          <div class="column is-one-third is-size-4 has-text-centered" v-if="step >= 10">
            <arrow-icon /> Create and share plugins
          </div>
          <div class="column is-one-third is-size-4 has-text-centered" v-if="step >= 11">
            <arrow-icon /> Customize when needed
          </div>
        </div>
      </slide>

      <slide class="smaller" enter="fadeIn" steps="4">
        <h3>
          Is it free?
        </h3>

        <eg-transition enter="fadeIn">
          <p v-if="step == 1">
            <img class="money" src="./assets/money.jpg" alt="Money" />
          </p>
        </eg-transition>

        <eg-transition enter="fadeIn">
          <p class="is-size-4" v-if="step >= 2">
            Generally speaking: Yes... <span v-if="step >= 3">With some exceptions...</span>
          </p>
        </eg-transition>

        <br />

        <eg-transition enter="fadeIn">
          <ul v-if="step >= 4">
            <li class="is-size-4">
              Multiple licenses: Apache-2.0, Drone Non-Commercial, Waivers
            </li>
            <li class="is-size-4">
              Can be built as pure OSS version
            </li>
            <li class="is-size-4">
              Enterprise version is free to use for:

              <ul>
                <li class="is-size-4">
                  Personal usage
                </li>
                <li class="is-size-4">
                  Non-profit usage
                </li>
                <li class="is-size-4">
                  Hobby projects
                </li>
                <li class="is-size-4">
                  Companies up to $5 million annual gross revenue
                </li>
                <li class="is-size-4">
                  Companies with less than 5000 pipeline executions per year
                </li>
              </ul>
            </li>
            <li class="is-size-4">
              Others should be big enough to buy a license...
            </li>
          </ul>
        </eg-transition>
      </slide>

      <slide class="smaller" enter="fadeIn" steps="12">
        <h3>
          Architecture
        </h3>

        <eg-transition enter="fadeIn">
          <p>
            <img class="architecture" src="./assets/architecture.svg" alt="Architecture" />
          </p>
        </eg-transition>

        <br />

        <div enter="fadeIn" v-if="step == 2">
          <p class="is-size-4">
            Supported SCMs
          </p>

          <br />

          <div class="columns">
            <div class="column is-one-fifth is-size-4">
              <img class="provider" src="./assets/github.svg" alt="GitHub" />
            </div>
            <div class="column is-one-fifth is-size-4">
              <img class="provider" src="./assets/gitlab.svg" alt="Gitlab" />
            </div>
            <div class="column is-one-fifth is-size-4">
              <img class="provider" src="./assets/bitbucket.svg" alt="Bitbucket" />
            </div>
            <div class="column is-one-fifth is-size-4">
              <img class="provider" src="./assets/gitea.png" alt="Gitea" />
            </div>
            <div class="column is-one-fifth is-size-4">
              <img class="provider" src="./assets/gogs.png" alt="Gogs" />
            </div>
          </div>
        </div>

        <div enter="fadeIn" v-if="step == 3">
          <p class="is-size-4">
            Supported databases
          </p>

          <br />

          <div class="columns">
            <div class="column is-one-third is-size-4">
              <img class="provider" src="./assets/mysql.svg" alt="MySQL" />
            </div>
            <div class="column is-one-third is-size-4">
              <img class="provider" src="./assets/postgresql.svg" alt="PostgreSQL" />
            </div>
            <div class="column is-one-third is-size-4">
              <img class="provider" src="./assets/sqlite.svg" alt="SQLite" />
            </div>
          </div>
        </div>

        <div enter="fadeIn" v-if="step == 4">
          <p class="is-size-4">
            Supported storages
          </p>

          <br />

          <div class="columns">
            <div class="column is-one-third is-size-4">
              <img class="provider" src="./assets/s3.svg" alt="S3" />
            </div>
            <div class="column is-one-third is-size-4">
              <img class="provider" src="./assets/azure.svg" alt="Azure" />
            </div>
            <div class="column is-one-third is-size-4">
              <img class="provider" src="./assets/minio.svg" alt="Minio" />
            </div>
          </div>
        </div>

        <ul v-if="step >= 5">
          <li v-if="step >= 6">
            SCM sends a webhook to the server
          </li>
          <li v-if="step >= 7">
            Server fetches and processes config
          </li>
          <li v-if="step >= 8">
            Server puts pipelines into queue
          </li>
          <li v-if="step >= 9">
            Agent pulls pipeline from queue
          </li>
          <li v-if="step >= 10">
            Agent streams logs to server
          </li>
          <li v-if="step >= 11">
            Server stores logs into database or storage
          </li>
          <li v-if="step >= 12">
            Server sends status to SCM
          </li>
        </ul>
      </slide>

      <slide class="smaller" enter="fadeIn" steps="8">
        <h3>
          Autoscaler
        </h3>

        <eg-transition enter="fadeIn">
          <p>
            <img class="autoscaler" src="./assets/autoscaler.svg" alt="Autoscaler" />
          </p>
        </eg-transition>

        <br />

        <div enter="fadeIn" v-if="step == 2">
          <p class="is-size-4">
            Supported providers
          </p>

          <br />

          <div class="columns">
            <div class="column is-one-fourth is-size-4">
              <img class="provider" src="./assets/ec2.svg" alt="EC2" />
            </div>
            <div class="column is-one-fourth is-size-4">
              <img class="provider" src="./assets/digitalocean.svg" alt="Digital Ocean" />
            </div>
            <div class="column is-one-fourth is-size-4">
              <img class="provider" src="./assets/google.svg" alt="Google Cloud" />
            </div>
            <div class="column is-one-fourth is-size-4">
              <img class="provider hetzner" src="./assets/hetzner.svg" alt="Hetzner Cloud" />
            </div>
          </div>

          <div class="columns">
            <div class="column is-one-fourth is-size-4">
              <img class="provider" src="./assets/openstack.svg" alt="Openstack" />
            </div>
            <div class="column is-one-fourth is-size-4">
              <img class="provider" src="./assets/packet.svg" alt="Packet" />
            </div>
            <div class="column is-one-fourth is-size-4">
              <img class="provider" src="./assets/scaleway.svg" alt="Scaleway" />
            </div>
            <div class="column is-one-fourth is-size-4">

            </div>
          </div>
        </div>

        <ul v-if="step >= 3">
          <li v-if="step >= 4">
            Autoscaler polls Drone API for queue size
          </li>
          <li v-if="step >= 5">
            Queue is bigger than available worker slots
          </li>
          <li v-if="step >= 6">
            Send cloud-init config to cloud provider
          </li>
          <li v-if="step >= 7">
            Finish agent installation of server
          </li>
          <li v-if="step >= 8">
            Agent pulls pipeline from queue
          </li>
        </ul>
      </slide>

      <slide class="smaller" enter="fadeIn" steps="4">
        <h3>
          Configuration
        </h3>

        <eg-transition enter="fadeIn">
          <div class="columns">
            <div class="column is-one-third is-size-4" v-bind:style= "[step == 2 ? { backgroundColor: '#ccc' } : {}]">
              <img class="provider yaml" src="./assets/yaml.svg" alt="YAML" />
            </div>
            <div class="column is-one-third is-size-4" v-bind:style= "[step == 3 ? { backgroundColor: '#ccc' } : {}]">
              <img class="provider" src="./assets/starlark.svg" alt="Starlark" />
            </div>
            <div class="column is-one-third is-size-4" v-bind:style= "[step == 4 ? { backgroundColor: '#ccc' } : {}]">
              <img class="provider" src="./assets/jsonnet.svg" alt="Jsonnet" />
            </div>
          </div>
        </eg-transition>

        <br />

        <div enter="fadeIn" v-if="step == 1">
          <ul>
            <li>
              Stored within the repository
            </li>
            <li>
              Conditions for the whole pipeline or single steps
            </li>
            <li>
              Parallelism by `depends_on` attribute
            </li>
            <li>
              Every pipeline can use on services
            </li>
            <li>
              Every pipeline can share volumes between steps
            </li>
            <li>
              Could also be triggered by a built cron mechanism
            </li>
          </ul>
        </div>

        <div enter="fadeIn" v-if="step == 2">
          <ul>
            <li>
              YAML is the defailt config format
            </li>
            <li>
              Initially inspired by docker-compose
            </li>
            <li>
              Moved to a Kubernetes-like format
            </li>
          </ul>

          <br />

          <p>
            Example at <a href="https://gist.github.com/tboerger/b4e9368467e138b93a962c90a384c36e" target="_blank">https://gist.github.com/tboerger/b4e9368467e138b93a962c90a384c36e</a>
          </p>
        </div>

        <div enter="fadeIn" v-if="step == 3">
          <ul>
            <li>
              Initially tied to Bazel build system
            </li>
            <li>
              Some Python dialect
            </li>
            <li>
              Requires a separate convert extension
            </li>
            <li>
              Does not support imports yet :(
            </li>
          </ul>

          <br />

          <p>
            Example at <a href="https://gist.github.com/tboerger/d0b6cfc96d1cb1ff0a9abf18c7f2b971" target="_blank">https://gist.github.com/tboerger/d0b6cfc96d1cb1ff0a9abf18c7f2b971</a>
          </p>
        </div>

        <div enter="fadeIn" v-if="step == 4">
          <ul>
            <li>
              Wellknown in Kubernetes eco system
            </li>
            <li>
              JSON on steroids (conditions, loops, templating)
            </li>
            <li>
              Requires a separate convert extension
            </li>
            <li>
              Does not support imports yet :(
            </li>
          </ul>

          <br />

          <p>
            Example at <a href="https://gist.github.com/tboerger/55523d124c6b167d3c514f45ca095b04" target="_blank">https://gist.github.com/tboerger/55523d124c6b167d3c514f45ca095b04</a>
          </p>
        </div>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Plugins
        </h3>

        <div enter="fadeIn">
          <ul>
            <li>
              Standalone Docker image
            </li>
            <li>
              Pre-defined set of commands to execute
            </li>
            <li>
              Does not require `commands` attribute
            </li>
            <li>
              Rich set of available plugins
            </li>
            <li>
              Doing a single thing, do that thing well
            </li>
            <li>
              Handle many kind of deployments
            </li>
            <li>
              Handle many kind of notifications
            </li>
            <li>
              Can be written in any language
            </li>
            <li>
              Handle environment variables, use exit codes
            </li>
          </ul>
        </div>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Extensions
        </h3>

        <div enter="fadeIn">
          <ul>
            <li>
              Dedicated tiny web services
            </li>
            <li>
              Contacted via API from server
            </li>
            <li>
              Configured by env variables within the server
            </li>
            <li>
              Boilr template to build your own extension
            </li>
            <li>
              Provides various hooks for customization:

              <ul>
                <li>
                  Admission
                </li>
                <li>
                  Config
                </li>
                <li>
                  Converter
                </li>
                <li>
                  Registry
                </li>
                <li>
                  Secret
                </li>
                <li>
                  Validator
                </li>
                <li>
                  Webhook
                </li>
                <li>
                  Metrics
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Secrets
        </h3>

        <div enter="fadeIn">
          <ul>
            <li>
              Could be set per repository <a href="https://docs.drone.io/configure/secrets/repository/" target="_blank" style="color: #ccc">Docs</a>
            </li>
            <li>
              Org secrets only available to Drone admins <a href="https://docs.drone.io/configure/secrets/organization/" target="_blank" style="color: #ccc">Docs</a>
            </li>
            <li>
              Builtin secrets are stored in database
            </li>
            <li>
              Optionally encrypted within database
            </li>
            <li>
              Optionally injected on pull requests
            </li>
            <li>
              Alternatively could be commited encrypted <a href="https://docs.drone.io/configure/secrets/encrypted/" target="_blank" style="color: #ccc">Docs</a>
            </li>
            <li>
              Extensions for external secrets

              <ul>
                <li>
                  Hashicorp Vault <a href="https://docs.drone.io/configure/secrets/external/vault/" target="_blank" style="color: #ccc">Docs</a>
                </li>
                <li>
                  AWS Secrets Manager <a href="https://docs.drone.io/configure/secrets/external/kubernetes/" target="_blank" style="color: #ccc">Docs</a>
                </li>
                <li>
                  Kubernetes secrets <a href="https://docs.drone.io/configure/secrets/external/aws/" target="_blank" style="color: #ccc">Docs</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Runners
        </h3>

        <div enter="fadeIn">
          <ul>
            <li>
              Default runner is the agent, same as docker runner
            </li>
            <li>
              Experiments with Nomad
            </li>
            <li>
              Experiments with Kubernetes have been deprecated
            </li>
            <li>
              Built with <a href="https://github.com/drone/runner-go" target="_blank">https://github.com/drone/runner-go</a>
            </li>
            <li>
              Every runner provides a dashboard
            </li>
            <li>
              Dedicated org for community contributed runners at <a href="https://github.com/drone-runners" target="_blank">https://github.com/drone-runners</a>
            </li>
            <li>
              Already available runners are

              <ul>
                <li>
                  Docker <a href="https://docs.drone.io/installation/runners/docker/" target="_blank" style="color: #ccc">Docs</a>
                </li>
                <li>
                  Exec <a href="https://docs.drone.io/installation/runners/exec/" target="_blank" style="color: #ccc">Docs</a>
                </li>
                <li>
                  SSH <a href="https://docs.drone.io/installation/runners/ssh/" target="_blank" style="color: #ccc">Docs</a>
                </li>
                <li>
                  Digital Ocean <a href="https://docs.drone.io/installation/runners/digitalocean/" target="_blank" style="color: #ccc">Docs</a>
                </li>
              </ul>
            </li>
            <li>
              Planned: K8s, Virtualbox, Parallels, Qemu, GCP, AWS
            </li>
          </ul>
        </div>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Runners: Docker
        </h3>

        <div enter="fadeIn">
          <ul>
            <li>
              Uses Docker images for every step
            </li>
            <li>
              Could run everywhere where you got Docker
            </li>
            <li>
              <strong>
                <a href="https://gist.github.com/tboerger/4cb982e4130352c8a8e48a9dc3128d82" target="_blank">Example</a>
              </strong>
            </li>
          </ul>
        </div>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Runners: Exec
        </h3>

        <div enter="fadeIn">
          <ul>
            <li>
              Native execution on a host
            </li>
            <li>
              Could run behind a router
            </li>
            <li>
              Useful for workloads outside of Docker
            </li>
            <li>
              <strong>
                <a href="https://gist.github.com/tboerger/ebedd77794dce2b1f898a25f94114461" target="_blank">Example</a>
              </strong>
            </li>
          </ul>
        </div>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Runners: SSH
        </h3>

        <div enter="fadeIn">
          <ul>
            <li>
              Native execution on a host
            </li>
            <li>
              Must be reachable from runner
            </li>
            <li>
              Useful for workloads outside of Docker
            </li>
            <li>
              Available on cloud.drone.io
            </li>
            <li>
              Used to build Windows plugins for drone-plugins org
            </li>
            <li>
              <strong>
                <a href="https://gist.github.com/tboerger/e9d323ba779e3c2056a4ec3638f2e239" target="_blank">Example</a>
              </strong>
            </li>
          </ul>
        </div>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Runners: Digital Ocean
        </h3>

        <div enter="fadeIn">
          <ul>
            <li>
              Launch a server per pipeline
            </li>
            <li>
              <strong>
                <a href="https://gist.github.com/tboerger/f9cdfcd46e83f14f9e0bdc9c85b99e12" target="_blank">Example</a>
              </strong>
            </li>
          </ul>
        </div>
      </slide>

      <slide id="questions" enter="fadeIn">
        <h3>
          Questions?
        </h3>

        <p>
          <img class="questions" src="./../../assets/questions.jpg" alt="Questions?" />
        </p>
      </slide>

      <slide id="thankyou" enter="fadeIn">
        <h3>
          Thank you!
        </h3>

        <p>
          <img class="applause" src="./../../assets/applause.jpg" alt="Applause!" />
        </p>
      </slide>
    </div>
  </div>
</template>

<script>
import { Slideshow } from 'eagle.js'

export default {
  name: 'Drone',
  mixins: [
    Slideshow
  ],
  infos: {
    title: 'Deep dive into DroneCI',
    description: 'A presentation about DroneCI and the available runners',
    path: '/deep-dive-into-droneci',
    route: 'deep-dive-into-droneci'
  }
}
</script>

<style lang="scss">
  #drone {
    .logo {
      height: 200px;
      margin: 5% auto;
      display: inherit;
    }

    .photo {
      float: right;
      margin: 15px 0;
    }

    .war-of-the-worlds,
    .money,
    .questions,
    .applause {
      margin: 5% auto;
      display: inherit;
      height: 400px;
      border-radius: 100px;
    }

    .architecture,
    .autoscaler {
      margin: 0 auto;
      display: inherit;
    }

    .provider {
      display: inherit;
      max-height: 150px;
      margin: 0 auto;

      &.yaml,
      &.hetzner {
        height: 150px;
      }
    }

    .eg-slideshow {
      background-color: #eef;

      .eg-slide {
        .eg-slide-content {
          width: 80%;
          margin: 0 auto;
        }

        &.smaller {
          .eg-slide-content {
            width: 50%;
            margin: 0 auto;
          }
        }
      }
    }

    .eg-slide-content {
      width: 80%;
      margin: 0 auto;
    }

    .eg-modal {
      .eg-code-block {

        .comments-box,
        .code-box {
          width: 100%;
        }
      }
    }

    #intro {
      .eg-slide-content {
        width: 50%;
      }
    }

    ul {
      list-style-type: square;

      ul {
        list-style-type: circle;
        margin-left: 30px;
      }
    }
  }
</style>
