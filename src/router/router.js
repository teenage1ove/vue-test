import About from '@/pages/About.vue'
import Main from '@/pages/Main.vue'
import PostPageId from '@/pages/PostPageId.vue'
import PostsPage from '@/pages/PostsPage.vue'
import PostsPageCompositionApi from '@/pages/PostsPageCompositionApi.vue'
import PostsPageWithStore from '@/pages/PostsPageWithStore.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/posts/:id',
        component: PostPageId
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/store',
        component: PostsPageWithStore
    },
    {
        path: '/composition',
        component: PostsPageCompositionApi
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router