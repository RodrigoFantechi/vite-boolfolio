
<script>
export default {
    name: 'AppCarousel',
    data() {
        return {
            imageActive: 0,
            nestAutoPlay: null,

            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morales',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    methods: {
        prevImage() {
            this.imageActive--
            if (this.imageActive < 0) {
                this.imageActive = this.slides.length - 1;
            }
        },
        nextImage() {
            this.imageActive++
            if (this.imageActive > this.slides.length - 1) {
                this.imageActive = 0;
            }
        },
        openImage(index) {
            this.imageActive = index;

        },
        startAutoPlay() {
            this.nestAutoPlay = setInterval(() => {
                this.nextImage();
            }, 3000);
        },
        stopAutoPlay(){
            clearInterval(this.nestAutoPlay);
        }


    },


    mounted() {
        this.startAutoPlay();

    }
}
</script>
<template>
   <div class="container">
            <div class="slider-wrapper d-flex" tabindex="0" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay" >

                <div class="item">
                    <img :src="  slides[imageActive].image" :alt="slides[imageActive].title" />
                    <div class="text">
                        <h3>{{slides[imageActive].title}}</h3>
                        <p>
                            {{slides[imageActive].text}}
                        </p>
                    </div>
                </div>

                <div class="thumbs">
                    <div class="prev" @click="prevImage"></div>
                    <div class="next" @click="nextImage"></div>

                    <div class="thumb" :class="imageActive ===index  ? 'active' : ''" v-for="(img, index) in slides" @click="openImage(index)"><img :src="img.image" :alt="img.title"></div>
                </div>
            </div>
        </div>
</template>
<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.item {
    float: left;
    width: 700px;
    height: 300px;
    position: relative;
}

.item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.item .text {
    position: absolute;
    right: 20px;
    bottom: 20px;
    text-align: right;
    color: white;
}

.thumbs {
    float: left;
    height: 300px;
    background: #000;
    position: relative;
}

.thumb {
    height: calc((300px) / 5);
    opacity: 0.5;
}

.thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.thumb.active {
    border: 2px solid #ccc;
    opacity: 1;
}

.prev, .next {
    width: 20px;
    height: 20px;
    margin: 10px 0;
    border-radius: 50%;
    background: #ccc;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    cursor: pointer;
    z-index: 999;
}

.next {
    bottom: 0;
}

.prev::after {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    display: block;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%) rotate(-45deg);
}

.next::before {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    display: block;
    position: absolute;
    bottom: 35%;
    left: 50%;
    transform: translate(-50%) rotate(135deg);
}
</style>