<template>
  <div id="app">
   <InputBlock @create="createShortUrl" />
  </div>
</template>

<script>
import api from '@/mixins/api';
import InputBlock from '@/components/InputBlock.vue';

export default {
  name: 'App',
  mixins: [api],
  components: {
    InputBlock,
  },
  methods: {
    async createShortUrl({ url }) {
      const result = await this.request('api/urls', { url });
      console.log(result);
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
