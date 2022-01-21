<template>
    <div>
        <v-card
            v-for="post in this.params.categories"
            class="mb-2 pa-2"
            outlined
            :key="post.id"
        >
            <v-list-item two-line class="pa-0">
                <v-list-item-content>
                    <v-list-item-title>{{ post.title.rendered }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-card-actions class="px-0 pb-4">
                <v-btn
                    depressed
                    color="primary"
                    @click="setPost(post)"
                >
                    もっと見る
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
      params: Object
    },
    
    data: () => ({
        posts: null,
    }),

    mounted() {
      // window.onload = ()=> {
      //   this.getCategoryPost()
      // }
    },
    
    methods: {
        setPost(data) {
            this.$router.push('/post/' + data.id)
        }
    },
}

</script>