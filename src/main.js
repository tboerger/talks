import Vue from 'vue'
import Router from 'vue-router'
import Buefy from 'buefy'
import Eagle, { Options } from 'eagle.js'
import hljs from 'highlight.js'
import HeartIcon from 'vue-ionicons/dist/md-heart'
import GithubIcon from 'vue-ionicons/dist/logo-github'
import TwitterIcon from 'vue-ionicons/dist/logo-twitter'

import 'buefy/dist/buefy.css'
import 'animate.css'
import 'eagle.js/dist/themes/gourmet/gourmet.css'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'

import App from './App.vue'
import Home from './Home.vue'

import Slides from './slides/slides.js'

Vue.use(Router)
Vue.use(Buefy)
Vue.use(Eagle)

Vue.component('heart-icon', HeartIcon)
Vue.component('twitter-icon', TwitterIcon)
Vue.component('github-icon', GithubIcon)

Vue.config.productionTip = false

Options.hljs = hljs

let router = new Router({
  routes: Slides.List.map((slide) => {
    return {
      path: slide.infos.path,
      component: slide
    }
  }).concat([
    {
      path: '*',
      component: Home
    }
  ])
})

new Vue({
  router,
  render: h => h(App),
  components: { App }
}).$mount('#app')
