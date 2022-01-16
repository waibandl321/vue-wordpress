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
            <v-sheet
              min-height="100%"
              rounded="lg"
            >
            <v-container>
                <div>
                    <p class="text-h4 text--primary">
                        {{ $route.params.slug }}
                    </p>
                </div>
                <div>
                    <Loading v-if="!posts"/>
                    <template v-else>
                      <v-card
                          v-for="post in posts"
                          class="mx-auto my-2"
                          outlined
                          :key="post.id"
                      >
                        <v-list-item two-line >
                            <v-list-item-content>
                                <v-list-item-title class="mb-2">{{ post.title.rendered }}</v-list-item-title>
                                <v-list-item-subtitle>{{ category_data.name }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-card-actions>
                            <v-btn
                                depressed
                                color="primary"
                                @click="setPost(post)"
                            >
                                もっと見る
                            </v-btn>
                        </v-card-actions>
                      </v-card>
                  </template>
                </div>
              </v-container>
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
import Loading from "@/components/common/Loading";

export default {
    components: {
        Loading,
        Header,
        Aside,
    },
    data: () => ({
        category_data: [],
        posts: null,
    }),
    created() {
        this.init()
        this.set()
        this.getPost()
    },
    
    methods: {
        // リロード対策(カテゴリー情報保持)
        init() {
            const arr = JSON.parse(sessionStorage.getItem('category'))
            this.category_data = arr.category
        },
        // 描画するカテゴリー詳細の情報
        set() {
            this.$store.watch(
                state => state.category,
                category => {
                    this.category_data = category
                    this.getPost()
                }
            )
        },
        // カテゴリーに紐づく記事一覧
        async getPost() {
            const url = "https://freelance321.com/wp-json/wp/v2/posts?categories=" + this.category_data.id
            axios.get(url)
            .then(res => {
                this.posts = res.data
                return res.data
            })
            .then(data => {
              if(data) {
                this.setCategoryMeta(this.$route.params.slug)
              }
            })
        },
        setPost(data) {
            this.$router.push('/post/' + data.id)
        }
    },
}

</script>