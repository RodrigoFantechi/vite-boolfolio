<script>
import { store } from '../store';
export default {
  name: 'ContactView',
  data() {
    return {
      store
    }
  },

}
</script>
<template>



 

  <div class="container py-5">
    <div v-if="store.loadingemail" class="p-3">
    <span class="fs-3 ">Sending...</span>
    <div class="svg ms-3 d-inline-block">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        style=" background: none; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid">
        <g>
          <path d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843" fill="none" stroke="#1d3f72"
            stroke-width="12"></path>
          <path d="M49 3L49 27L61 15L49 3" fill="#1d3f72"></path>
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s"
            values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </g>
      </svg>
    </div>
  </div>
  <div v-if="store.success" class="alert alert-success">
    <span>Messaggio inviato con successo!</span>
  </div>
  <div class="alert alert-danger" v-if="store.error_message">
    Messaggio non inviato... 😥
  </div>
    <h1>Contact Me</h1>
    <p class="lead">
      Vi ringrazio di aver visitato questa pagina web. Se siete interessati a contattarmi potete utilizzare il modulo
      sotto riportato o i contatti diretti i fondo alla pagina.
    </p>
    <!-- <form @submit.prevent="store.sendForm()"> -->
    <section class="form">
      <div class="mb-3">
        <label for="" class="form-label">Full Name</label>
        <input type="text" name="" id="" class="form-control" v-model="store.name" placeholder="Mario Rossi"
          aria-describedby="fullNameHelper">
        <small id="fullNameHelper" class="text-muted">Add your full name</small>
      </div>
      <p v-for="error in store.error_message.name" class="alert alert-danger">
                    {{ error }}
                </p>
      <div class="mb-3">
        <label for="" class="form-label">Email</label>
        <input type="email" name="" id="" class="form-control" v-model="store.email"
          placeholder="mario.rossi@example.com" aria-describedby="emailHelper">
        <small id="emailHelper" class="text-muted">Add your email address</small>
      </div>
      <p v-for="error in store.error_message.email" class="alert alert-danger">
                    {{ error }}
                </p>
      <div class="mb-3">
        <label for="" class="form-label">Message</label>
        <textarea class="form-control" name="" id="" rows="5" v-model="store.message"></textarea>
      </div>
      <p v-for="error in store.error_message.message" class="alert alert-danger">
                    {{ error }}
                </p>
      <button class="mybtn" @click="store.sendForm()">Contact Me</button>
    </section>
  </div>


</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;
    .mybtn {
        color: white;
        border-radius: 10px;
        padding: 0.5rem 0.75rem;
        text-decoration: none;
        display: inline-block;
        background-color: $clr_primary5;
        border: none;
    }
</style>