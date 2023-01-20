
<script>
import { store } from '../store'
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectList',
    components: {
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
    <main>
        <div class="container p-5 ">
            <section v-if="store.projects && !store.loading">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    <ProjectCard v-for="project in store.projects.data" :title='project.title'
                        :cover_image='project.cover_image' :description='project.description' :type='project.type'
                        :technologies='project.technologies' :slug="project.slug" />
                </div>
                <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">
                    <ul class="pagination    ">
                        <li class="page-item" v-if="store.projects.prev_page_url"
                            @click="store.prevPage(store.projects.prev_page_url)">
                            <a class="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page"><a class="page-link" href="#">{{
                            store.projects.current_page
                        }}</a></li>

                        <li class="page-item" v-if="store.projects.next_page_url"
                            @click="store.nextPage(store.projects.next_page_url)">
                            <a class="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section v-else-if="store.loading">
                <div class="div">
                    <span class="fs-3">Loading...</span>
                    <div class="svg ms-3 d-inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        style=" background: none; shape-rendering: auto;" width="50px"
                        height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <g>
                            <path d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843" fill="none"
                                stroke="#1d3f72" stroke-width="12"></path>
                            <path d="M49 3L49 27L61 15L49 3" fill="#1d3f72"></path>
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s"
                                values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                        </g>
                    </svg>
                    </div>
                  
                </div>
            </section>
            <section v-else>
                <div class="no_records">
                    <h4>Sorry no records inside the database.</h4>
                </div>
            </section>
        </div>
    </main>
</template>
<style lang="scss" scoped>
// main{
//     background-image: url(/img/pattern1.png);
// }
</style>