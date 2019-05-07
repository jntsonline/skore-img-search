<template>

  <div class="toolbar">
    <img class="logo" alt="Vue logo" src="../assets/logo.png" >
    <v-toolbar-title  >Skore Image Search</v-toolbar-title>
    <v-spacer></v-spacer>
     <v-combobox
        style="height:48px"
        append-outer-icon="search"
        v-model="select"
        :items="lastItems"
        label="Search"
        clear-icon
        dense="dense"
        ref="searchfield"
        solo
        v-on:change="searchElement()"

        ></v-combobox>
  </div>


</template>

<script>
export default {
  name: 'Toolbar',
  created() {
    const temp = JSON.parse(localStorage.getItem('lastsearch'));
    console.log(temp);
    if(temp.length > 0) {
      this.lastItems = temp;
    }
  },
  methods: {
    searchElement() {
      this.lastItems.push(this.select);
      localStorage.setItem('lastsearch', JSON.stringify(this.lastItems))
      this.$emit('searched', this.select);
      this.select = null;
    },
    toggleMenu(val) {
      if(val.length) this.$refs['searchfield'].blur()
    }
  },
  data () {
    return {
      show: true,
      dense: true,
      select: null,
      lastItems: [ ]
    }
  }
}
</script>
<style>
.header-container {
  padding: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
}
.logo {
  height: 24px;
}
.search-box {
  margin:0px;
}
.toolbar {
  padding: 0px 16px;
  z-index: 2;
  height: 72px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
}
</style>

