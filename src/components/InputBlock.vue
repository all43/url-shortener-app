<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="url">
    <button type="button" :disabled="isDisabled" @click="clear">Clear</button>
    <button type="submit" :disabled="isDisabled">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'InputBlock',
  props: {
    disabled: { type: Boolean, requred: false },
  },
  data: () => ({
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
  }),
  methods: {
    clear() {
      this.url = '';
    },
    handleSubmit() {
      if (this.isDisabled) return;
      const { url } = this;
      this.$emit('create', { url });
      this.clear();
    },
  },
  computed: {
    isDisabled() {
      return this.disabled || !this.url.trim().length;
    },
  },
};
</script>
