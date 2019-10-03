<template>
  <div id="golang">
    <div class="eg-slideshow">
      <slide enter="fadeIn" leave="fadeOut">
        <img class="logo" alt="Golang" src="./images/gopher.svg" />

        <h1 class="has-text-centered">
          Best practices for Go services
        </h1>

        <p class="has-text-centered">
          A presentation about best practices for cloud-native Go services.
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
  name: 'Golang',
  mixins: [
    Slideshow
  ],
  infos: {
    title: 'Best practices for Go services',
    description: 'A presentation about best practices for cloud-native Go services.',
    path: '/best-practices-for-go'
  }
}
</script>

<style lang="scss">
  #golang {
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
