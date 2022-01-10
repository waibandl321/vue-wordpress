<template>
    <v-sheet rounded="lg">
        <v-list color="transparent">
        <v-list-item
            v-for="r in categories"
            :key="r.id"
            link
            :to="'/category/' + r.slug"
        >
            <v-list-item-content>
            <v-list-item-title>
                {{ r.name }}
            </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        
        </v-list>
    </v-sheet>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        categories: []
    }), 
    created() {
        this.getCategories()
    },
    methods: {
        getCategories() {
            const url = "http://localhost:8888/wp-dev/wp-json/wp/v2/categories"
            axios.get(url)
            .then(response => {
                this.categories = response.data
            })
        }
    }
}
</script>