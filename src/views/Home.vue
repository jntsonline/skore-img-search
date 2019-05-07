<template>
  <v-container>
    <div class="search-title">
      <h2>Search results for: {{teste}}</h2>
      </div>
    <v-layout row wrap>
      <v-flex v-for="photo in photos" :key="photo.id" xs4 d-flex >
        <v-card flat tile class="d-flex image-container" v-on:click="goToPic(photo)" v-ripple>
          <v-img :src="photo.urls.regular" :lazy-src="photo.urls.thumb" aspect-ratio="1"></v-img>
          <div class="image-header">
            <div class="image-user-avatar">
              <v-img :src="photo.user.profile_image.small" aspect-ratio="1"></v-img>
            </div>
            <div>{{photo.user.first_name}} {{photo.user.last_name}}</div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      photos: []
    }
  },
  created() {
    this.getSearchedPics(this.teste)
  },
  props: ['teste'],
  watch: {
    teste: {
      immediate: true,
      handler(val, oldVal){
        this.getSearchedPics(val)
      }
    }
  },
  methods: {
    getSearchedPics(value) {
      this.$http.get(`https://api.unsplash.com/search/photos?query=${value}&page=1&per_page=18&client_id=${this.$unsplash._applicationId}`)
        .then(response => {
          this.photos = response.data.results;
          });
    },
    goToPic(item){
      this.$store.dispatch("selectPhoto", item);
      this.$router.push({ name: 'photo', params: { id: item.id } })
    }
  },
};
</script>

<style scoped>
.container {
  padding: 16px;
  overflow: auto;
  height: calc(100vh - 72px);
}
.search-title {
  display: flex;
  justify-content: start;
}
.image-container {
  background-color: #EEEEEE;
  cursor: pointer;
  position: relative;
  margin: 4px;
}

.image-header {
  position: absolute;
  z-index: 1;
  height: 48px;
  width: 100%;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.36);
  display: flex;
  align-items: center;
  padding: 0px 16px;
  color: #EEEEEE;

}
.image-user-avatar {
  height: 32px;
  width: 32px;
  background-color: #EEEEEE;
  border-radius: 50%;
  margin-right: 16px;
}
.image-user-avatar > * {
   border-radius: 50%;
}
.image-photo {
  height: 100%;
  position: absolute;
  width: 100%;
}
.image-container img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
