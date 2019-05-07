<template>
<v-app>
  <div id="app">
    <Toolbar @searched="setSearch" :show-search="showsearch"></Toolbar>
    <router-view :teste="item"></router-view>
  </div>
</v-app>
</template>


<script>
import Toolbar from './components/Toolbar.vue';
export default {
  components: {
    Toolbar,
  },
  data( ) {
    return {
      item: 'Apple',
      showsearch: true
    }
  },
  methods: {
    setSearch(value) {
      this.item = value
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
