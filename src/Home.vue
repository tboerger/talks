<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Presentations by Thomas Boerger
          </h1>
          <h2 class="subtitle">
            Collection of talks I have prepared or done so far
          </h2>
        </div>

        <a
          class="github-fork-ribbon"
          href="https://github.com/tboerger/talks"
          data-ribbon="Fork me on GitHub"
          title="Fork me on GitHub"
        >
          Fork me on GitHub
        </a>
      </div>
    </section>

    <div class="columns is-multiline has-padding-bottom-6">
      <div class="column is-one-quarter has-margin-top-5 has-margin-left-5" v-for="slideshow in slides" v-bind:key="slideshow.infos.title">
        <div class="card">
          <div class="card-image">
            <component :is="slideshow" :embedded="true" :keyboardNavigation="false" :mouseNavigation="false" />
          </div>
          <div class="card-content">
            <h3>
              <router-link :to="{ name: slideshow.infos.route, params: { slide: 1, step: 1 } }">
                {{ slideshow.infos.title }}
              </router-link>
            </h3>

            <p>
              {{ slideshow.infos.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slides from './slides/slides.js'

export default {
  data: function () {
    return {
      slides: Slides.List
    }
  },
  mounted: function () {
    document.currentSlide = {}
  }
}
</script>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    height: 100%;

    .embedded-slideshow {
      height: 250px;
    }
  }
</style>
