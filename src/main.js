import Vue from 'vue';
import './plugins/vuetify'
import Unsplash from 'unsplash-js';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './styles.scss';
import Vuetify from 'vuetify'

const unsplash = new Unsplash({
  applicationId: 'd6b87abb65c55c51b02f24525a3592f935cf0cf735c29720c1489a3f9b734fff',
  secret: '5a745de3b5c95dd5ad13facbce14ba8c9b5863a4a8438877c3f0471ed76e4dd3',
});
Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.prototype.$unsplash = unsplash;
Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
