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
          <div class="column is-one-third is-size-4" v-if="step >= 3">
            <img class="image is-64x64" src="./assets/many-source-code-managers.svg" />
            Many SCMs
          </div>
          <div class="column is-one-third is-size-4" v-if="step >= 4">
            <img class="image is-64x64" src="./assets/any-platform.svg" />
            Any platform
          </div>
          <div class="column is-one-third is-size-4" v-if="step >= 5">
            <img class="image is-64x64" src="./assets/any-language.svg" />
            Any language
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-third is-size-4" v-if="step >= 6">
            <img class="image is-64x64" src="./assets/simple-configuration.svg" />
            Simple config
          </div>
          <div class="column is-one-third is-size-4" v-if="step >= 7">
            <img class="image is-64x64" src="./assets/isolated-builds.svg" />
            Isolated builds
          </div>
          <div class="column is-one-third is-size-4" v-if="step >= 8">
            <img class="image is-64x64" src="./assets/effortless-scaling.svg" />
            Effortless scaling
          </div>
        </div>

        <br />

        <div class="columns">
          <div class="column is-one-third is-size-4" v-if="step >= 9">
            <arrow-icon /> Configuration as code
          </div>
          <div class="column is-one-third is-size-4" v-if="step >= 10">
            <arrow-icon /> Create and share plugins
          </div>
          <div class="column is-one-third is-size-4" v-if="step >= 11">
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

      <slide class="smaller" enter="fadeIn" steps="2">
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
              <img class="provider" src="./assets/hetzner.svg" alt="Hetzner Cloud" />
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
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Configuration
        </h3>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Plugins
        </h3>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Extensions
        </h3>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Secrets
        </h3>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Runners
        </h3>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Runners: Docker
        </h3>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Runners: Exec
        </h3>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Runners: SSH
        </h3>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Runners: Cloud
        </h3>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Runners: Kubernetes
        </h3>
      </slide>

      <slide class="smaller" enter="fadeIn">
        <h3>
          Cleanup
        </h3>
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
    path: '/deep-dive-into-droneci/:slide/:step',
    route: 'deep-dive-into-droneci'
  },
  methods: {
    updateSlides: function () {
      this.currentSlideIndex = +this.$route.params.slide

      this.$nextTick(() => {
        this.step = +this.$route.params.step
      })
    },
    updateURL: function () {
      this.$router.push({
        name: 'deep-dive-into-droneci',
        params: {
          slide: this.currentSlideIndex,
          step: this.step
        }
      })
    }
  },
  watch: {
    '$route': 'updateSlides',
    step: 'updateURL',
    currentSlideIndex: 'updateURL'
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
