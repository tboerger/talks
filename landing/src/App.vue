<script setup>
import topics from '../../topics/topics'
</script>

<template>
  <section class="bg-gray-700">
    <div class="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
      <h1 class="text-3xl pt-12">
        Presentations by Thomas Boerger
      </h1>
      <h2 class="text-s pb-12">
        Collection of presentations I have done somewhere in the world
      </h2>

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

  <div class="max-w-screen-xl mx-auto container">
    <div class="flex flex-wrap">
      <div class="sm:w-1/3 w-1/2 flex flex-col" v-for="topic in topics" v-bind:key="topic.title">
        <div class="mb-0 sm:mb-0 lg:mb-0 m-2 sm:m-6 lg:m-8 border-3 rounded-xl border-gray-800 card">
          <div class="card-image text-center m-4">
            <img
              :src="topic.logo"
              alt="Logo"
              class="w-m inline-block card-logo"
            >
          </div>
          <div class="card-content bg-gray-700">
            <h3 class="m-4">
              <a :href="topic.route" class="text-white-500">
                {{ topic.title }}
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1,
  h2,
  h3 a {
    color: #fff;
  }

  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .card .card-logo {
    height: 250px;
  }
</style>
