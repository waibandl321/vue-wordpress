<template>
    <div>
        <Loading v-if="loading"/>
        <v-simple-table v-else>
            <template v-slot:default >
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
    </div>
</template>

<script>
import Loading from "@/components/common/Loading"
export default {
    components: {
        Loading
    },
    data: () => ({
        posts: [],
        loading: true
    }),

    created() {
        this.init()
    },
    
    methods: {
        init() {
            this.apiGetRelatedPost("posts", 20)
            .then(response => {
                this.posts = response.data
                this.loading = false
            })
            .catch(error => {
                console.log(error)
            })
        },
        clickRow(post) {
            this.$router.push('/post/' + post.id)
        }
    }
}
</script>