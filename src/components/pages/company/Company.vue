<template>
  <v-app id="inspire">
    <Header />
    <v-main class="grey lighten-3">
      <v-container>
          <!-- main -->
          <div>
            <Services />
          </div>
          <div>
            <AboutCeo />
          </div>
          <div>
            <History />
          </div>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"

import Services from "@/components/pages/company/parts/Services"
import History from "@/components/pages/company/parts/History"
import AboutCeo from "@/components/pages/company/parts/AboutCeo"

export default {
  components: { Header, Footer, Services, History, AboutCeo },

  created() {
    this.setPageMeta('会社概要')
  },
}
</script>