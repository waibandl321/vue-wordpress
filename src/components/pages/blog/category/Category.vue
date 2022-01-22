<template>
    <div>
        <template>
            <v-data-table
                loading="!this.params.categoryPosts"
                :headers="this.params.headers"
                :items="this.params.categoryPosts"
                :items-per-page="12"
                class="elevation-1"
                @click:row="setPost"
            >
            </v-data-table>
        </template>
    </div>
</template>

<script>
export default {
    props: {
      params: Object,
    },
    
    data: () => ({
        category_id: null,
    }),

    created() {
        this.category_id = this.$route.params['id']
    },

    mounted() {
        // リロード対策
        window.onload = () => {
            this.loading = true
            this.apiGetCategoryPosts("posts", null, this.category_id)
            .then(response => {
                this.params.categoryPosts = this.convertPostList(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        }
    },

    methods: {
        setPost(data) {
            this.$router.push('/post/' + data.id)
        },
    },
}
</script>

<style scoped>

</style>