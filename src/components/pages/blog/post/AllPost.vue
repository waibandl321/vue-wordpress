<template>
    <div>
        <template >
            <v-data-table
                loading="!this.params.allPosts"
                :headers="this.params.headers"
                :items="this.params.allPosts"
                :items-per-page="12"
                class="elevation-1"
                @click:row="clickRow"
            >
            </v-data-table>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        params: Object
    },
    
    methods: {
        clickRow(data) {
            this.$router.push('/post/' + data.id)
        }
    }
}
</script>

