<template>
  <div style="padding-top: 20px; display: flex; justify-content: center;">
    <div class="score-container">
      <div>
        <v-img
          :src="require('../assets/images/logo-bonus.svg')"
          contain
          height="100"
          width="100"
        />
      </div>
      <v-card style="width: 100px; height: 100px;">
        <v-card-text style="display: flex; flex-direction: column;">
          <span>SCORE </span>
          <span style="font-size:44px; font-weight: 600; margin-top: 10px;">
            {{ score }}
          </span>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      score: "score",
    }),
  },
};
</script>
<style scoped>
.score-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  max-width: 600px;
  min-width: 50%;
  border-radius: 10px;
  border-width: 2px;
  border-color: lightgray;
  border-style: solid;
}
</style>
