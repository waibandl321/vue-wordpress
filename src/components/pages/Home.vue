<template>
  <v-app id="inspire">
    <Header />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!-- aside -->
          <v-col cols="2">
            <Aside />
          </v-col>
          <!-- main -->
          <v-col cols="10">
            <v-sheet
              min-height="90vh"
              rounded="lg"
            >
              <h2>投稿一覧</h2>
              <div>
                {{ posts }}
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/common/Header"
import Aside from "@/components/common/Aside"
import axios from 'axios'

export default {
  components: { Header, Aside },
  data: () => ({
    posts: []
  }),
  created() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      const url = "http://localhost:8888/wp-dev/wp-json/wp/v2/posts"
      axios.get(url)
      .then(response => {
        this.posts = response.data
      })
    }
  }
}
</script>