
<script>
import { store } from '../store'
export default {
    name: 'AppSlider',
    data() {
        return {
            store,
        }
    },
}
</script>
<template >
    <section class="slider">
        <div class="my_container py-3">
            <div class="slide d-flex align-items-center justify-content-center" v-for="slide in store.slider" :style="'left:' + (slide.position) + 'px'">
                <font-awesome-icon class="icon" :icon="slide.icon" />
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
.slider {
    background: rgb(132, 76, 130);
    background: linear-gradient(90deg, rgba(132, 76, 130, 1) 0%, rgba(255, 179, 11, 1) 100%);

    .my_container {
        margin: auto;
        width: 1200px;
        overflow-x: hidden;
        height: 250px;
        position: relative;


        .slide {
            
            width: 200px;
            aspect-ratio: 1/1;
            display: inline-block;
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);

            .icon{
                color: $clr-light;
                font-size: 3rem;
            }
        }
    }

}
</style>