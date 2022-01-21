<template>
  <v-app id="inspire">
    <Header />
    <v-main class="grey lighten-3">
      <v-container>
          <!-- main -->          
            <Carousels />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import Carousels from "@/components/pages/common/Carousels"


export default {
  components: {
    Header,
    Footer,
    Carousels
  },
  data: () => ({}),
  created() {},
  methods: {}
}
</script>

<style scoped>
tr:hover {
  cursor: pointer;
}
</style>