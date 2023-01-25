import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './pages/HomeView.vue'
import ContactView from './pages/ContactView.vue'
import AboutView from './pages/AboutView.vue'
import ProjectsView from './pages/ProjectsView.vue'
import SingleProjectView from './pages/SingleProjectView.vue'
import NotFoundView from './pages/NotFoundView.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView
      },
      {
        path: '/projects',
        name: 'projects',
        component: ProjectsView
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactView
      },
      {
        path: '/project/:slug',
        name: 'single-project',
        component: SingleProjectView
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundView
      },
  ],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || {top:0}
  }
})


export { router }