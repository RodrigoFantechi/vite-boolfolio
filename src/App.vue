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
                    <ProjectCard v-for="project in store.projects.data" :title='project.title'
                        :cover_image='project.cover_image' :description='project.description' :type='project.type'
                        :technologies='project.technologies' />
                </div>
                <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">
                    <ul class="pagination    ">
                        <li class="page-item" v-if="store.projects.prev_page_url" @click="store.prevPage(store.projects.prev_page_url)">
                            <a class="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page"><a class="page-link" href="#">{{
                            store.projects.current_page
                        }}</a></li>

                        <li class="page-item" v-if="store.projects.next_page_url" @click="store.nextPage(store.projects.next_page_url)">
                            <a class="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section v-else>
                <div class="no_records">
                    <h4>Sorry no records inside the database.</h4>
                </div>
            </section>
        </div>
    </main>
    <footer>
        <Appfooter></Appfooter>
    </footer>
</template>


<style lang="scss">

</style>
