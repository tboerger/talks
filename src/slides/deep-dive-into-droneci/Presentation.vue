<template>
  <div id="drone">
    <div class="eg-slideshow">
      <slide enter="fadeIn" leave="fadeOut">
        <img class="logo" alt="DroneCI" src="./images/drone.svg" />

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
          <heart-icon /> Go + Containers + Drone CI, Automation addicted, Terraform and Ansible everywhere!
        </p>
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
    path: '/deep-dive-into-droneci'
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

    .questions,
    .applause {
      margin: 5% auto;
      display: inherit;
      height: 400px;
      border-radius: 100px;
    }

    .eg-slideshow {
      background-color: #eef;

      .eg-slide {
        .eg-slide-content {
          width: 80%;
          max-width: 80%;
          margin: 0 auto;
        }
      }
    }

    .eg-slide-content {
      width: 80%;
      max-width: 80%;
      margin: 0 auto;
    }

    #intro {
      .eg-slide-content {
        width: 50%;
      }
    }
  }
</style>
