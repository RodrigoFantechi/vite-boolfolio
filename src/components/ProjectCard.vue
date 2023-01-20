
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
        <div class="card h-100 text-center p-3">
            <div class="image mx-auto">
                <img width="150" class="card-image rounded-top" :src="store.getImagePath(cover_image)" alt="">
            </div>
            <div class="details my-4">
                <h4>{{ title }}</h4>
                <h6>{{ description }}</h6>
                <p v-if="type">Tipo: {{ type.name }}</p>
                <p v-else>Tipo: Nessun tipo associato</p>
                <div v-if="technologies.length > 0">
                    <span>Tecnologie:</span>
                    <span v-for="singletechnology in technologies" class="mx-1">{{ singletechnology.name }},</span>
                </div>
                <p v-else >Tecnologie: Nessuna tecnologia associata</p>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>