
const routes = [
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/search', component: () => import('components/SearchPage/SearchPage.vue') },
    ]
  },

  {
    path: "/",
    component: () => import('components/Authentication/Login.vue')
  },
  {
    path: "/register",
    component: () => import('components/Authentication/Signup.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
