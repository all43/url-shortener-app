<template>
  <div class="loading">
    Loading...
  </div>
</template>

<style lang="scss" scoped>
@keyframes blink{
  0% {color: gray;}
  50% {color: black;}
  100% {color: gray;}
}
  div.loading {
    min-height: 110px;
    animation: blink 0.8s infinite;
  }
</style>
