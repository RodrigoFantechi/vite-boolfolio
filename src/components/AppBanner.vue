<script>
export default {
  name: 'AppBanner',
  props: ['title']
}
</script>

<template>
  <div class="banner shadow-sm">
    <div class="container">
      <h1 class="py-4 mb-0">{{ title }}</h1>
    </div>
  </div>

</template>

<style lang="scss" scoped>
</style>