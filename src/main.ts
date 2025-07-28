import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/tailwind.css' // Import the Tailwind CSS file
import { i18n } from './i18n'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)
app.use(VueLazyLoad, {
    preLoad: 1.3, // pre-load window height
    error: 'https://media.tenor.com/2BLI5EO7yVAAAAAi/loading-image.gif', // Optional error image path
    loading: 'https://media.tenor.com/2BLI5EO7yVAAAAAi/loading-image.gif', // Optional loading image path
    attempt: 1, // Number of attempts to load the image
})
app.mount('#app')
