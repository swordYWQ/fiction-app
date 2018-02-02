import Vue from 'vue';

import weex from 'weex-vue-render';

// import App from './index.vue'
// import router from './router.js'

// import render-core.
// import weex from 'weex-vue-render/dist/index.core';

// need to run `npm i weex-vue-slider weex-vue-stream --save` frist.
// import the plugins (components and modules) you want to use.
// import slider from 'weex-vue-slider';
// import stream from 'weex-vue-stream';

// install the plugins.
// weex.install(slider);
// weex.install(stream);

weex.init(Vue);

// new Vue(Vue.util.extend({ el: '#root' }, App))
// console.log('before')
// new Vue(Vue.util.extend({ el: '#root', router },App))
// console.log('after')

// new Vue({
//   el: '#root',
//   router,
//   components: { App },
//   template: `<App></App>`
// })

