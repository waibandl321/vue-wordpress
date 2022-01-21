<template>
  <v-app id="inspire">
    <Header />
    <v-main class="grey lighten-3">
      <v-container>
          <!-- main -->
            <ServicesDetailTab />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import ServicesDetailTab from "@/components/pages/services/parts/ServicesDetailTab.vue"


export default {
  components: {
    Header,
    Footer,
    ServicesDetailTab
  },

  created() {
    this.setPageMeta('サービス')
  },
}
</script>
