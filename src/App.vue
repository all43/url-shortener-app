<template>
  <div id="app">
    <form @submit.prevent="createShortUrl">
      <input type="text" v-model="url">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import api from '@/mixins/api';

export default {
  name: 'App',
  mixins: [api],
  components: {
    //
  },
  data: () => ({
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
  }),
  methods: {
    async createShortUrl() {
      const { url } = this;
      const response = await this.request('api/urls', { url });
      console.log(await response.json());
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
