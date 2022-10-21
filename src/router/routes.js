const routes = [
    {
        path: '/',
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/HomeView.vue'),
            },
            {
                path: 'about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('@/views/AboutView.vue')
            },
            {
                path: 'detail/:id',
                name: 'detail',
                component: () => import('@/views/DetailView.vue')
            },
            {
                path: 'project',
                name: 'project',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('@/views/ProjectView.vue')
            },
            {
                path: 'contact',
                name: 'contact',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('@/views/ContactView.vue')
            },
        ]
    },
];

export default routes;