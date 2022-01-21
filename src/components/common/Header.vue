<template>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10 avatar"
          color="grey darken-1"
          size="32"
          @click="toHome('/')"
        >
          <img src="../../../public/KqDbvj6j7z.png">
        </v-avatar>

        <v-btn
          v-for="link in header_links"
          :key="link.name"
          text
          @click="pageMove(link.path)"
        >
          {{ link.name }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            label="サイト内検索"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      header_links: [
        {name: "会社概要", path: "/company/"},
        {name: "サービス", path: "/service/"},
        {name: "ブログ", path: "/blog/"},
        {name: "問い合わせ", path: "/contact/"},
      ],
    }),
    methods: {
      toHome(path) {
        this.$router.push(path)
      },
      pageMove(path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>
.avatar:hover {
  cursor: pointer;
}
</style>