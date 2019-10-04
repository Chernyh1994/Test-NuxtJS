<template>
    <component :is="errorPage" :error="error" />
</template>

<script>
import error404 from '~/components/error/404.vue';
import error500 from '~/components/error/500.vue';
export default {
  layout: 'login',

  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404;
      }
      return error500;
    },
  },

  created () {
    this.$vuetify.theme.dark = true
  },

};
</script>

