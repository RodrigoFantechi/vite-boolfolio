<script>

import AppSlider from '../components/AppSlider.vue';
export default {
    name: 'HomeView',
    components:{
      AppSlider,
    },


}
</script>
<template>


  <div class="container py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Home Page Portfolio</h1>
        <p class="lead"> Dai primi progetti autodidattici in Java con Java Swing, posso finalmente presentare un portfolio "completo". Tra le tecnologie e i linguaggi utilizzati troviamo: Php, html, css, scss, Vue, Js, Laravel, Mysql, Java ecc. Presenti ma non implementati piccoli progetti in Jquery, Flutter e Nuxt.</p>
      
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a type="button"  href="#" class="btn btn-primary btn-lg px-4 me-md-2">To Github</a>
          <a type="button" href="#" class="btn btn-outline-secondary btn-lg px-4">Send Message</a>
        </div>
      </div>
    </div>
  </div>
  <div class="slider">
    <AppSlider/>
  </div>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
    h1{
  color: $clr-dark-0;
    }
</style>