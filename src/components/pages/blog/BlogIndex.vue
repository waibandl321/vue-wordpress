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
            <router-view
              :params="params"
            />
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


export default {
  components: {
    Header,
    BlogAside,
    Footer,
  },
  data: () => ({
    params: {
      categoryPosts: [],
      headers: [
          {
              text: 'ID',
              align: 'start',
              sortable: false,
              value: 'id',
          },
          { text: '記事', value: 'name' },
          { text: '投稿日', value: 'date' },
      ],
      allPosts: [],
    },
    categoryList: [],
  }),
  
  created() {
    this.getCategories()
    this.setPageMeta('ホーム')
    this.getAllPosts()
  },
  
  methods: {
    menuClick(id) {
        this.params.categoryPosts = []
        this.getCategoryPost(id)
    },

    // 全記事
    getAllPosts() {
      this.apiGetRelatedPost("posts", 100)
        .then(response => {
            this.params.allPosts = this.convertPostList(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },

    // 全カテゴリー
    getCategories() {
      this.apiGetRelatedPost("categories", 20)
      .then(response => {
          this.categoryList = response.data
      })
      .catch(error => {
          console.log(error)
      })
    },

    // カテゴリー記事
    getCategoryPost(id) {
      this.apiGetCategoryPosts("posts", null, id)
      .then(response => {
          this.params.categoryPosts = this.convertPostList(response.data)
      })
      .catch(error => {
          console.log(error)
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