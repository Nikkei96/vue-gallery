<template>
  <div>
    <h1>Vue Gallery</h1>
    <h2>Test JSON-placeholder api</h2>
    <hr />
    <form @submit.prevent='create'>
      <h3>Create new img for gallery!</h3>
      <input type='text' placeholder='title' v-model='title' />
      <input type='text' placeholder='img src' v-model='src' />
      <button class='create-btn' type='submit'>Create!</button>
    </form>
    <Gallery />
  </div>
</template>

<script>
import Gallery from '@/views/Gallery'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Gallery,
  },

  data: () => ({
    title: '',
    src: '',
  }),

  computed: {
    ...mapState(['photosData']),
  },

  methods: {
    ...mapActions(['createImg']),
    create() {
      const dataImg = {
        title: this.title,
        url: this.src,
        id: 1,
      }

      this.title = this.src = ''
      this.createImg(dataImg)
    },
  },
}
</script>

<style scoped>
input,
button {
  width: 300px;
  height: 30px;
  font-size: 20px;
  text-align: center;
  border: 2px solid #888;
  display: block;
  margin: 10px auto;
}

.create-btn {
  color: brown;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 200px;
}
</style>