<template>
  <form @submit.prevent="handleSubmit" class="column-mobile">
    <input type="text" size="44" v-model="url">
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

<style lang="scss" scoped>

form {
  display: flex;
  justify-content: center;
}

input, button {
  padding: 0.3em 0.7em;
  margin-right: 0.5em;
}

button {
  &[type=button] {
    background-color: rgb(223, 93, 76);
  }
  &[type=submit] {
    background-color: rgb(55, 108, 223);
  }
  border: 0;
  border-radius: 0.2em;
  color: white;
  cursor: pointer;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.75;
  }
  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
}

button:focus, input:focus {
  outline: none;
}

</style>
