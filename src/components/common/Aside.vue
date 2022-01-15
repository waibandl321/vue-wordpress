<template>
    <v-sheet rounded="lg">
        <v-list color="transparent">
            <template v-for="r in categories">
                <v-list-item
                    v-if="r.count > 0"
                    :key="r.id"
                    link
                    @click="setCategoryId(r)"
                >
                    <v-list-item-content>
                    <v-list-item-title>
                        {{ r.name }}
                    </v-list-item-title>
                    </v-list-item-content>
            </v-list-item>
        </template>
        </v-list>
    </v-sheet>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        categories: [],
    }), 
    created() {
        this.getCategories()
    },
    methods: {
        getCategories() {
            const url = "http://localhost:8888/wp-dev/wp-json/wp/v2/categories?per_page=100"
            axios.get(url)
            .then(response => {
                this.categories = response.data
            })
        },
        setCategoryId(data) {
            this.$store.commit('setCategoryData', data)
            this.$router.push('/category/' + data.slug)
        }
    }
}
</script>