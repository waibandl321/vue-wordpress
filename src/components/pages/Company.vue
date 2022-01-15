<template>
  <v-app id="inspire">
    <Header />
    <v-main class="grey lighten-3">
      <v-container>
          <!-- main -->
            会社概要
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/common/Header"


export default {
  components: { Header },

  created() {
    this.setPageMeta('会社概要')
  },
}
</script>
