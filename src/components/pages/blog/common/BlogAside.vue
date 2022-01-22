<template>
    <v-sheet rounded="lg">
        <v-list color="transparent">
            <template v-for="r in categories">
                <v-list-item
                    v-if="r.count > 0"
                    :key="r.id"
                    link
                    @click="setCategoryId(r.id)"
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
// import axios from 'axios'

export default {
    props: {
        categories: {
            type: Array
        },
        menuClick: {
            type: Function,
            required: true
        }
    },
    methods: {
        // Prop で渡した function を実行
        setCategoryId(id) {
            this.$router.push('/category/' + id, () => {})
            this.menuClick(id)
        }
    }
}
</script>