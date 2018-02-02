
// import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import IndexView from './index.vue'
import HomeView from './page/home/index.vue'
// import Rank from './page/home/rank/index.vue'
// import Find from './page/home/find/index.vue'
// import Reading from './page/reading/index.vue'
export default new Router({
  routes: [{
    path: '/',
    component: IndexView,
    children: [{
      path: '/home',
      name: 'home',
      component: HomeView
    },
    //  {
    //   path: '/rank',
    //   name: 'rank',
    //   component: Rank
    // },
    //  {
    //   path: '/find',
    //   name: 'find',
    //   component: Find
    // }
  ],
    redirect: 'home'
  }, 
  // {
  //   path: '/reading',
  //   component: Reading
  // }
]
})