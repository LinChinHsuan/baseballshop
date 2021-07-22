import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/products',
        component: () => import('../views/UserProducts.vue')
      },
      {
        path: '/products/:id',
        component: () => import('../views/ProductDetail.vue')
      },
      {
        path: 'blog',
        component: () => import('../views/UserArticles.vue')
      },
      {
        path: '/cart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: '/favorite',
        component: () => import('../views/Favorite.vue')
      },
      {
        path: '/login',
        component: () => import('../views/Login.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/Coupons.vue')
      },
      {
        path: 'articles',
        component: () => import('../views/admin/Articles.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/admin/Cart.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
