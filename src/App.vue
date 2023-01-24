<script>
import {store} from './store.js' 
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
    components: {
        
        AppHeader,
        AppFooter,
    },
    data() {
    return {
      store,
    }
  },
    mounted() {

    setInterval(store.mouveSlider,50);
  },
}
</script>

<template>
        <AppHeader></AppHeader>
        <router-view></router-view>
        <AppFooter></AppFooter>
</template>


<style lang="scss">

</style>
