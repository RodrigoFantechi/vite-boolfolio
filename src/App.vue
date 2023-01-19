<script>
import { store } from './store.js'
import ProjectCard from './components/ProjectCard.vue';

export default {
    components:{
        ProjectCard,
    },
    data() {
        return {
            store,
        }
    },

    mounted() {
   store.callAxios(store.url);
  }
}
</script>

<template>
    <div class="container">
        <section v-if="store.projects">
            <div class="row">
                    <ProjectCard v-for="project in store.projects"
                        :title='project.title'
                        :cover_image='project.cover_image'
                        :description='project.description'
                        :type='project.type'
                        :technology='project.technology'
                        />
            </div>

        </section>
        <section v-else>
            <div class="no_records">
                <h4>Sorry no records inside the database.</h4>
            </div>
        </section>
    </div>
</template>

<style lang="scss">

</style>
