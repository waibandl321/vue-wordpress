<template>
  <v-app id="inspire">
    <Header />
    <v-main class="grey lighten-3">
      <v-container>
          <!-- main -->
            <v-stepper v-model="e1">
              <v-stepper-header>
                <v-stepper-step
                  :complete="e1 > 1"
                  step="1"
                >
                  step 1
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step
                  :complete="e1 > 2"
                  step="2"
                >
                  step 2
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">
                  step 3
                </v-stepper-step>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                  ></v-card>

                  <v-btn
                    color="primary"
                    @click="e1 = 2"
                  >
                    送信
                  </v-btn>

                  <v-btn text>
                    戻る
                  </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                  ></v-card>

                  <v-btn
                    color="primary"
                    @click="e1 = 3"
                  >
                    送信
                  </v-btn>

                  <v-btn text>戻る</v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                  <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                  ></v-card>
                  <v-btn
                    color="primary"
                    @click="e1 = 1"
                  >
                    送信
                  </v-btn>
                  <v-btn text>戻る</v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/common/Header"


export default {
  components: { Header },
  data: () => ({
    e1: 1,
  }),
  created() {
    this.setPageMeta('問い合わせ')
  },
}
</script>
