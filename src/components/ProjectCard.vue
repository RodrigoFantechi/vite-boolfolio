
<script>
import { store } from '../store.js'
export default {
    name: 'ProjectCard',

    props: {
        title: String,
        cover_image: String,
        description: String,
        type: Object,
        technologies: Array,
        slug: String,
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template >
    <div class="col">
        <div class="card h-100 text-center p-4 shadow-sm">
            <div class="image mx-auto">
                <img width="150" class="card-image rounded-top" :src="store.getImagePath(cover_image)" alt="">
            </div>
            <div class="details my-4">
                <h4>{{ title }}</h4>
                <p class="">{{ store.checkText(description) }}</p>
                <p v-if="type">Tipo: {{ type.name }}</p>
                <p class="text-muted" v-else>Tipo: Nessun tipo associato</p>
                <div v-if="technologies.length > 0" class="my-3">
                    <span>Tecnologie:</span>
                    <span v-for="singletechnology in technologies" class="mx-1">#{{ singletechnology.name }}</span>
                </div>
                <p class="text-muted" v-else>Tecnologie: Nessuna tecnologia associata</p>
                <router-link class="mybtn" :to="{ name: 'single-project', params: { slug: slug } }">Read
                    more</router-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.card {
    position: relative;

    .mybtn {
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        color: white;
        border-radius: 10px;
        padding: 0.5rem 0.75rem;
        text-decoration: none;
        display: inline-block;
        background-color: $clr_primary5;
  
    }

}
</style>