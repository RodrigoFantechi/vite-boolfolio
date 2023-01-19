<script>
import { store } from './store.js'
import ProjectCard from './components/ProjectCard.vue';
import Appheader from './components/Appheader.vue';
import Appfooter from './components/Appfooter.vue';
export default {
    components: {
        ProjectCard,
        Appheader,
        Appfooter,
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
    <header>
        <Appheader></Appheader>
    </header>
    <main>
        <div class="container p-5">
            <section v-if="store.projects">
                <div class="row">
                    <ProjectCard v-for="project in store.projects" :title='project.title'
                        :cover_image='project.cover_image' :description='project.description' :type='project.type'
                        :technologies='project.technologies' />
                </div>

            </section>
            <section v-else>
                <div class="no_records">
                    <h4>Sorry no records inside the database.</h4>
                </div>
            </section>
        </div>
    </main>
    <Appfooter></Appfooter>
</template>

<style lang="scss">

</style>
