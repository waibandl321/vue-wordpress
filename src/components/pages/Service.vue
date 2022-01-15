<template>
  <v-app id="inspire">
    <Header />
    <v-main class="grey lighten-3">
      <v-container>
          <!-- main -->
            サービス紹介
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/common/Header"


export default {
  components: { Header },

  created() {
    this.setPageMeta('サービス')
  },
}
</script>
