
<script>
import { store } from '../store.js'
export default {
    name: 'ProjectCard',

    props: {
        title: String,
        cover_image: String,
        description: String,
        type: String,
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
            <img width="150" class="card-image rounded-top mx-auto" :src="store.getImagePath(cover_image)" alt="">
            <h4>{{ title }}</h4>
            <h6>{{ description }}</h6>
            <h6 v-if="type">Tipo: {{ type.name }}</h6>
            <h6 v-else>nessuno tipo associato</h6>
            <div v-if="technologies.length > 0">
                <span>Tecnologie:</span>
                <span v-for="singletechnology in technologies" class="mx-1">{{ singletechnology.name }},</span>
            </div>
            <h6 v-else>nessuna tipologia associata</h6>
        </div>
    </div>
</template>
<style lang="">
    
</style>