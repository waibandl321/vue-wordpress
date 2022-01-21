<template>
    <v-item-group>
        <v-container>
            <h2>事業内容</h2>
            <v-row>
                <v-col
                v-for="n in 3"
                :key="n"
                cols="4"
                >
                <v-card
                class="mx-auto"
                >
                <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                    <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">
                    Number 10
                </v-card-subtitle>

                <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                    color="primary"
                    >
                    もっと詳しくみる
                    </v-btn>

                </v-card-actions>
                </v-card>
            </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<style scoped>
h2 {
  margin-bottom: 16px;
}
</style>