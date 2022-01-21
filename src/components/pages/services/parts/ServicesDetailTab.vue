<template>
  <v-container>
    <v-card>
      <v-container>
      <v-card-title class="justify-center py-6">
        <h2 class="font-weight-bold ">
          サービス紹介
        </h2>
      </v-card-title>

      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="primary"
        grow
      >
        <v-tab
          v-for="item in items"
          :key="item.key"
          @click="mode = item.key"
        >
          {{ item.text }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-show="mode == 'homepage' "
        >
          <HomePage />
        </v-tab-item>
        <v-tab-item
          v-show="mode == 'ec' "
        >
          <Ec />
        </v-tab-item>
        <v-tab-item
          v-show="mode == 'operation' "
        >
          <Operation />
        </v-tab-item>
        <v-tab-item
          v-show="mode == 'system' "
        >
          <System />
        </v-tab-item>
      </v-tabs-items>
      </v-container>
    </v-card>
    </v-container>
</template>

<script>
import Ec from "@/components/pages/services/parts/tabs/Ec";
import HomePage from "@/components/pages/services/parts/tabs/HomePage";
import Operation from "@/components/pages/services/parts/tabs/Operation";
import System from "@/components/pages/services/parts/tabs/System";

  export default {
    components: {
      Ec,
      HomePage,
      Operation,
      System
    },
    data () {
      return {
        tab: null,
        items: [
          { key: "homepage", text: "ホームページ制作" },
          { key: "ec", text: "ECサイト制作" },
          { key: "operation", text: "運用コンサル" },
          { key: "system", text: "システム改修 "}
        ],
        mode: "homepage"
      }
    },
  }
</script>

<style>

</style>