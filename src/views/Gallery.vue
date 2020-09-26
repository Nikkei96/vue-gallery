<template>
  <div class='gallery-wrapper'>
    <div class='gallery-item' v-for='data in photosData' :key='data.id'>
      <span>{{data.id}}) {{data.title}}</span>
      <hr />
      <img :src='data.url' width='120px' style='padding: 10px' />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Gallery',

  computed: {
    ...mapState(['photosData']),
  },

  async mounted() {
    await this.$store.dispatch('fetchImgs')
    console.log(this.$store.state.photosData)
  },
}
</script>

<style scoped>
.gallery-wrapper {
  max-width: 1100px;
  padding: 10px;
  margin: 5px auto;
  border: 1px solid #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.gallery-item {
  border: 1px solid #000;
  margin: 10px;
  flex: 0 1 200px;
  height: 200px;
  padding: 10px;
}
</style>