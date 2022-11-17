import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const useImage = ((fileName, dirName) => {
    return new URL(`/src/assets/img/${dirName}/${fileName}`, import.meta.url)
  
  })

const app = createApp(App)

app.config.globalProperties.$image = useImage;

app.use(createPinia())
app.use(router)

app.mount('#app')

