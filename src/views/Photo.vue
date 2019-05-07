<template>
  <v-container style="overflow:auto">
    <v-card>
      <dir class="photo-title">
        <div class="photo-avatar-container">
          <div class="photo-avatar">
            <v-img :src="photo.user.profile_image.small"  aspect-ratio="1"></v-img>
          </div>
        </div>
        <div>
          <div class="photo-user">{{photo.user.first_name}} {{photo.user.last_name}}</div>
          <div class="photo-likes">{{photo.likes}} likes</div>
        </div>
      </dir>
      <v-img :src="photo.urls.regular"  aspect-ratio="1"></v-img>
    </v-card>

  </v-container>
</template>
<script>
export default {
  name: 'Photo',
  props: {
    id: String
  },
  data() {
    return {
      photo: null
    }
  },
  created() {
    this.getNumbers()
  },
  methods: {
    getNumbers() {
      this.photo = this.$store.getters.getPhoto;
      console.log(this.photo)
    }
  }
}
</script>
<style>
.container {
  padding: 16px;
  overflow: auto;
  height: calc(100vh - 56px);
}
.photo-title {
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0px 16px;
}
.photo-avatar-container {
  width: 72px
}
.photo-avatar {
 background-color: aquamarine;
 height: 40px;
 width: 40px;
 border-radius: 50%;
}
.photo-avatar > * {
   border-radius: 50%;
}
.photo-user {
  display: flex;
  font-size: 20px;
}
.photo-likes{
  display: flex;
  font-size: 14px;
}
</style>



