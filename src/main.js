import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import HomePage from './components/pages/HomePage.vue';
import CollectionPage from './components/pages/CollectionPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/home', component: HomePage},
        {path: '/collection', component: CollectionPage},
    ]
})

const app = createApp(App);
app.use(router);

app.mount('#app')
