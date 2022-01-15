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
                <v-col cols="9" class="">
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
    components: {
        Header,
        Aside
    },
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
            const url = "http://localhost:8888/wp-dev/wp-json/wp/v2/posts/" + this.post_id
            axios(url)
            .then(res => {
                this.post_data = res.data
                return res.data
            })
            .then(data => {
                this.setPostmeta(data)
            })
            
        },
    },
}
</script>


<style scoped>

</style>