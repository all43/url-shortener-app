<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="url">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'InputBlock',
  data: () => ({
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
  }),
  methods: {
    clear() {
      this.url = '';
    },
    handleSubmit() {
      const { url } = this;
      this.$emit('create', { url });
      this.clear();
    },
  },
};
</script>
