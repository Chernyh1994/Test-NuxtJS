<template>
  <v-app >
   
    <Navbar/>

      <v-content>
        <nuxt />
      </v-content>

    <Footer/>

  </v-app>
</template>

<script>
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'
export default {
  components: {
    Footer,
    Navbar
  },
}
</script>

<style> 
  
</style>