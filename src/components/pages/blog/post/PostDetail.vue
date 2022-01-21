<template>
    <v-sheet
        min-height="100%"
        rounded="lg"
    >
        <v-container v-if="post_data">
            <h1>{{ post_data.title.rendered }}</h1>
                
            <div
                v-html="post_data.content.rendered">
            </div>
        </v-container>
    </v-sheet>
</template>

<script>

export default {
    data: () => ({
        post_id: null,
        post_data: null
    }),
    created() {
        this.post_id = this.$route.params['id']
        this.setPost()
    },
    methods: {
        setPost() {
            this.apiGetRelatedPost("posts", null, this.post_id)
            .then(response => {
                this.post_data = response.data
            })
            .catch(error => {
                console.log(error)
            })
        },
    },
}
</script>


<style scoped>

</style>