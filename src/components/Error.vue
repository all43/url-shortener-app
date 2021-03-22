<template>
  <p>Error: {{ errorText }}</p>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: { type: String },
  },
  computed: {
    errorText() {
      const messages = {
        invalidUrl: 'Invalid URL format',
        connectionError: 'Connection error has occured, please try again',
        unknown: 'Unknow error',
      };
      return messages[this.error];
    },
  },
};
</script>
