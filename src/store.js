import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({

  // EMAIL
  error_message:'',
  success:false,
  loadingemail:false,
  name:'',
  email:'',
  message:'',

  // PROJECT
  error:'',
  projects: '',
  loading: true,
  base_api_url: 'http://127.0.0.1:8000',

  // SLIDER 
  slider: [
    {
      icon: 'fa-brands fa-facebook-f',
      position: 0,
    },
    {
      icon: 'fa-brands fa-twitter',
      position: 200
    },
    {
      icon: 'fa-brands fa-youtube',
      position: 400
    },
    {
      icon: 'fa-brands fa-instagram',
      position: 600
    },
    {
      icon: 'fa-brands fa-linkedin-in',
      position: 800
    },
    {
      icon: 'fa-brands fa-paypal',
      position: 1000
    },
    {
      icon: 'fa-brands fa-telegram',
      position: 1200
    },
  ],

  // PROJECT
  callAxios(call) {
    axios.get(call)
      .then(response => {
        this.projects = response.data.results;
        this.loading = false
      })
      .catch(error => {
        console.error(error)
        this.error = error.message
        this.loading = false
      })
  },
  getImagePath(path) {

    if (path) {
      return this.base_api_url + '/storage/' + path
    }
    return '/img/placeholder.png'
  },
  prevPage(url) {

    store.callAxios(url)
  },
  nextPage(url) {

    store.callAxios(url)
  },
  checkText(text) {
    if (text.length > 80) {
      return text.slice(0, 80) + '...'
    }
    return text
  },

  // SLIDER 
  mouveSlider() {
    store.slider.forEach(element => {
      element.position++
      if (element.position > 1200) {
        element.position = -200
      }
    });
  },

  // EMAIL
  sendForm(){
    store.loadingemail = true
    store.success = false
    store.error_message = ''
    const data ={
      name: store.name,
      email: store.email,
      message: store.message,
    }
    
    axios.post(store.base_api_url + '/api/contacts', data)
    .then(response => {
      console.log(response);
      store.success = response.data.success

      if (store.success) {
        store.name = ''
        store.message = ''
        store.email = ''
      }else{
        store.error_message = response.data.errors;
        console.log(store.error_message);

      }
      store.loadingemail = false
    })
  }
  
})
