<template>
  <div class="list">
    <div class="item column-mobile" v-for="item in items" :key="item.shortUrl">
      <a :href="item.url" target="_blank">{{ item.url }}</a>
      <mark @click="copy($event)">
        <code>{{ item.shortUrl }}</code>
      </mark>
  </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  props: {
    items: { type: Array, required: true },
  },
  methods: {
    async copy({ target }) {
      if (!navigator.clipboard) return;
      try {
        await navigator.clipboard.writeText(target.innerText);
        // eslint-disable-next-line no-alert
        alert('Copy OK');
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  mark {cursor: pointer;}
  div.item {
    margin-top: 0.2em;
    display: flex;
    border-radius: 0.2em;
    border: 1px solid gray;
    mark, a {
      margin: 0.2em;
      padding: 0.1em;
    }
  }
</style>
