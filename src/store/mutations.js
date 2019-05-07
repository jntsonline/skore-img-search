import Vue from 'vue';

export default {
  personIsAdded(state, payload) {
    state.items.push(payload);
  }
};
