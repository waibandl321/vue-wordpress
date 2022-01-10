<template>
  <v-app id="inspire">
    <Header />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!-- aside -->
          <v-col cols="2">
            <Aside />
          </v-col>
          <!-- main -->
          <v-col cols="10">
            <v-sheet
              min-height="90vh"
              rounded="lg"
            >
              <v-card
                    class="mx-auto"
                >
                    <v-card-text>
                    <p class="text-h4 text--primary">
                        カテゴリー  {{ $route.params.slug }}  の詳細
                    </p>
                    <div class="text--primary">
                        
                    </div>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        text
                        color="teal accent-4"
                        @click="reveal = true"
                    >
                        Learn More
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <v-card
                        v-if="reveal"
                        class="transition-fast-in-fast-out v-card--reveal"
                        style="height: 100%;"
                    >
                        <v-card-text class="pb-0">
                        <p class="text-h4 text--primary">
                            Origin
                        </p>
                        <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                        <v-btn
                            text
                            color="teal accent-4"
                            @click="reveal = false"
                        >
                            Close
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-expand-transition>
                </v-card>
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
  export default {
    components: {
        Header,
        Aside
    },
    data: () => ({
      reveal: false,
    }),
  }
</script>