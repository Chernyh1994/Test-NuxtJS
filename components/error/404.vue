<template>
  <div class="error-404">
    <h1 class="mdi mdi-settings mdi-spin">This page doesn’t exist</h1>
    <p>The link you clicked on may be broken or no longer exist.</p>
  </div>
</template>

<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
    .error-404{
        text-align:center;
    }
</style>