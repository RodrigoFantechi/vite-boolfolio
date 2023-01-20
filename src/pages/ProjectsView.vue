<script>
import AppBanner from '../components/AppBanner.vue';
import ProjectList from '../components/ProjectList.vue';
export default {
    name: 'ProjectsView',
    components: { 
        AppBanner,
        ProjectList,

     },

}
</script>
<template>
   <AppBanner title ='Projects' />
    <ProjectList></ProjectList>
</template>

<style lang="">
    
</style>