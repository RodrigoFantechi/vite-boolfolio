import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({
  max: 100,
  projects: '',
  loading: true,
  base_api_url: 'http://127.0.0.1:8000',
  url: 'http://127.0.0.1:8000/api/projects',
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
    if (text.length > store.max) {
      return text.slice(0, store.max) + '...'
    }
    return text
  },
  mouveSlider() {
    store.slider.forEach(element => {
      element.position++
      if (element.position > 1200) {
        element.position = -200
      }
    });
  },
  
})
