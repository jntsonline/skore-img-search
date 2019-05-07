export default {
  addPerson(state, photo) {
    setTimeout(() => state.commit('personIsAdded',  photo ), 500);
  },

};
