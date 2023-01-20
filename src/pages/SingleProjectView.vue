<script>

import { store } from '../store'
export default {
  name: 'SingleProjectView',

  data() {
    return {
      store,
    }
  },
  mounted() {
    store.callAxios(store.base_api_url + '/api/projects/' + this.$route.params.slug);
  }
}
</script>

<template>
  <div class="container pt-5">
      <div class="single-post d-flex justify-content-center flex-column text-center" v-if="store.projects">
        <img class="mx-auto" width="350" :src="store.getImagePath(store.projects.cover_image)" :alt="store.projects.title">
        <div class="container">
          <h2 class="my-3">
            {{ store.projects.title }}
          </h2>
          <div class="content">
            {{ store.projects.description }}
          </div>
        </div>
      </div>
    </div>
</template>


<style lang="scss" scoped>

</style>