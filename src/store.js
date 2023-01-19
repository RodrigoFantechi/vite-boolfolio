import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({
  
    projects: '',
    loading: true,
    url: 'http://127.0.0.1:8000/api/projects', 
   
    callAxios(call) {
      axios.get(call)
      .then(response => {
        console.log(response.data.results);
        this. projects = response.data.results.data;
        this.loading = false
      })
      .catch(error => {
        console.error(error)
        this.error = error.message
        this.loading = false
      })
    },
  
  
  })
  