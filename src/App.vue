<template>
  <div id="app">
   <InputBlock @create="createShortUrl" :disabled="loading" />
   <History :items="history" />
  </div>
</template>

<script>
import api from '@/mixins/api';
import InputBlock from '@/components/InputBlock.vue';
import History from '@/components/History.vue';

export default {
  name: 'App',
  mixins: [api],
  data: () => ({
    history: [],
  }),
  components: {
    InputBlock,
    History,
  },
  methods: {
    async createShortUrl({ url }) {
      const result = await this.request('api/urls', { url });
      if (result.success) {
        const { shortUrl } = result;
        this.history.push({ url, shortUrl });
      }
      console.log(this.history);
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
