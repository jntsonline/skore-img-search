import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    photo: undefined,
  },
  mutations: {
    ADD_NUMBER(state, payload) {
      state.photo = payload;
    }
  },
  actions: {
    selectPhoto(context, photo) {
      context.commit("ADD_NUMBER", photo);
    }
  },
  getters: {
    getPhoto(state) {
      return state.photo;
    }
  }

})
