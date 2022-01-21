<template>
  <v-app id="inspire">
    <Header />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!-- aside -->
          <v-col cols="3">
            <BlogAside
              :categories="categoryList"
              :menuClick="menuClick"
            />
          </v-col>
          <!-- main -->   
          <v-col cols="9">
            <router-view :params="params"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/common/Header"
import BlogAside from "@/components/pages/blog/common/BlogAside"
import Footer from "@/components/common/Footer"
import axios from 'axios'

export default {
  components: {
    Header,
    BlogAside,
    Footer,
  },
  data: () => ({
    params: {
      categories: [],
    },
    categoryList: [],
  }),
  
  created() {
    this.getCategories()
    this.setPageMeta('ホーム')
  },
  
  methods: {
    menuClick(id) {
        this.getCategoryPost(id)
        return this.count = id
    },
    getCategories() {
      this.apiGetRelatedPost("categories", 20)
      .then(response => {
          this.categoryList = response.data
      })
      .catch(error => {
          console.log(error)
      })
    },
    async getCategoryPost(id) {
        const url = "https://freelance321.com/wp-json/wp/v2/posts?categories=" + id
        axios.get(url)
        .then(res => {
            this.params.categories = res.data
            return res.data
        })
        .then(data => {
          if(data) {
            this.setCategoryMeta(this.$route.params.slug)
          }
        })
    },
  }
}
</script>

<style scoped>
tr:hover {
  cursor: pointer;
}
</style>