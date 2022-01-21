<template>
    <v-container>
        ホームページ制作のコンテンツ
        <Faq />
        <PriceList />
    </v-container>
</template>

<script>
import Faq from "@/components/pages/common/Faq.vue"
import PriceList from "@/components/pages/common/PriceList.vue"
export default {
    components: {
        Faq,
        PriceList
    },
}
</script>