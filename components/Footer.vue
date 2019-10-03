<template>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; JSN (Test)</span>
    </v-footer>
</template>

<script>
export default {
    data(){
        return{
            fixed: true,
        }
    }
}
</script>