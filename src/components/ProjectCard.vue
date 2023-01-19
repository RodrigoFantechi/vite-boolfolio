
<script>
export default {
    name: 'ProjectCard',
    props: {
        title: String,
        cover_image: String,
        description: String,
        type: String,
        technology: Array,
    }
}
</script>
<template >
    <div class="col">
        <div class="card h-100 text-center p-3">
            <h4>{{ title }}</h4>
            <h6>{{ description }}</h6>
            <h6 v-if="type">Tipo: {{ type }}</h6>
            <h6 v-else>nessuno tipo associato</h6>
            <h6 v-if="techology.length > 0"> {{ technology }}</h6>
            <h6 v-else>nessuna tipologia associata</h6>
        </div>
    </div>
</template>
<style lang="">
    
</style>