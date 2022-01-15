<template>
  <v-app id="inspire">
    <Header />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!-- aside -->
          <v-col cols="3">
            <Aside />
          </v-col>
          <!-- main -->
          <v-col cols="9">
            <v-simple-table >
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">記事</th>
                    <th class="text-left">投稿日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="post in posts"
                    :key="post.id"
                    @click="clickRow(post)"
                  >
                    <td>{{ post.title.rendered }}</td>
                    <td>{{ post.date }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
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
    posts: [],

    search: '',
    loading: true,
  }),
  created() {
    this.getPosts()
    this.setPageMeta('ホーム')
  },
  
  methods: {
    getPosts() {
      const url = "http://localhost:8888/wp-dev/wp-json/wp/v2/posts?per_page=50"
      axios.get(url)
      .then(response => {
        this.posts = response.data
      })
    },
    clickRow(post) {
      this.$router.push('/post/' + post.id)
    }
  }
}
</script>

<style scoped>
tr:hover {
  cursor: pointer;
}
</style>