<template>
  <v-container
    style="display: flex; flex-direction: row; justify-content: center; align-items: center; height: calc(100% - 144px);"
  >
    <div
      style="display: flex; flex-direction: column; color: white; font-size: 24px;"
    >
      <span style="margin-bottom: 20px;">YOU PICKED</span>
      <icon-button :name="mine" :size="300" />
    </div>
    <div
      v-if="end"
      style="display: flex; flex-direction: column; margin-left: 100px;"
    >
      <span style="color: white; font-size: 50px;">{{ message }}</span>
      <v-btn
        color="white"
        light
        large
        style="margin-top: 10px"
        @click="playAgain"
        >play again</v-btn
      >
    </div>

    <div
      style="margin-left: 100px; display: flex; flex-direction: column; color: white; font-size: 24px;"
    >
      <span style="margin-bottom: 20px;">THE HOUSE PICKED</span>
      <icon-button :name="bot" :size="300" />
    </div>
    <v-btn
      @click="openDialog"
      style="position: absolute; right: 40px; bottom: 20px;"
      >rules</v-btn
    >
    <div data-app>
      <rules :dialog="ruleDialog" :closeDialog="closeDialog" />
    </div>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import IconButton from "../components/IconButton.vue";
import Rules from "./Rules.vue";
export default {
  components: { IconButton, Rules },
  data: () => ({
    mine: "",
    bot: "",
    names: ["rock", "paper", "scissors", "lizard", "spock"],
    end: false,
    message: "YOU LOSE",
    winList: [
      [2, 3],
      [0, 4],
      [1, 3],
      [1, 4],
      [0, 2],
    ],
    ruleDialog: false,
  }),
  methods: {
    ...mapActions({ win: "win", lose: "lose" }),
    checkWin() {
      var mineIndex = this.names.indexOf(this.mine);
      var botIndex = this.names.indexOf(this.bot);
      console.log(mineIndex, botIndex);
      if (mineIndex == botIndex) {
        this.message = "YOU TIED";
        return;
      }

      if (this.winList[mineIndex].includes(botIndex)) {
        this.message = "YOU WIN";
        this.win();
      } else {
        this.message = "YOU LOSE";
        this.lose();
      }
    },
    playAgain() {
      this.$router.back();
    },
    openDialog() {
      this.ruleDialog = true;
    },
    closeDialog() {
      this.ruleDialog = false;
    },
  },
  mounted() {
    this.mine = this.$route.params.type;
    if (!this.mine) {
      this.$router.push({ name: "Select" });
    } else {
      setTimeout(() => {
        this.bot = this.names[Math.floor(Math.random() * 4)];
        setTimeout(() => {
          this.end = true;
          this.checkWin();
        }, 1000);
      }, 2000);
    }
  },
};
</script>
