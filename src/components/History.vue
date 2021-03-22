<template>
  <div class="list">
    <div class="item" v-for="item in items" :key="item.shortUrl">
      <div class="full">{{ item.url }}</div>
      <div class="short">{{ item.shortUrl }}</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  props: {
    items: { type: Array, required: true },
  },
};
</script>

<style lang="scss" scoped>
  div.item {
    div {
      margin: 0.2em;
      padding: 0.1em;
      border: 1px solid darkgrey;
      display: inline-block;
    }
  }
</style>
