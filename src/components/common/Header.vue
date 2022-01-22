<template>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
          <v-btn
            @click="toHome('/')"
            class="text-h5"
            color="white"
            depressed
          >
          WordPress REST APIを使ったSPAブログ</v-btn>
      </v-container>
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      
    }),
    methods: {
      toHome(path) {
        this.$router.push(path, () => {})
      },
      
    }
  }
</script>

<style scoped>
.avatar:hover {
  cursor: pointer;
}
</style>