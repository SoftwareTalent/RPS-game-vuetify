<template>
  <v-container class="wrapper">
    <IconButton
      v-for="(name, index) in names"
      :key="index"
      :name="name"
      ref="buttons"
      class="button"
      :clicked="onSelect"
    />
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
import IconButton from "../components/IconButton.vue";
import Rules from "./Rules.vue";
export default {
  components: { IconButton, Rules },
  data: () => {
    return {
      names: ["rock", "paper", "scissors", "lizard", "spock"],
      refButtons: [],
      ruleDialog: false,
    };
  },
  mounted() {
    this.$refs.buttons.forEach((item) => {
      this.refButtons.push(item);
    });

    const length = this.$refs.buttons.length;
    const dAngle = 72;
    const radius = 250;
    this.refButtons.forEach((button, index) => {
      const angle = (index - (length - 1) / 2) * dAngle + 180;
      const angleRad = (angle * Math.PI) / 180;
      const dX = radius * Math.sin(angleRad);
      const dY = radius * Math.cos(angleRad);
      button.$el.style.left = `calc(50% ${dX >= 0 ? "+" : "-"} ${Math.abs(
        dX
      )}px)`;
      button.$el.style.top = `calc(50% ${dY >= 0 ? "+" : "-"} ${Math.abs(
        dY
      )}px)`;
    });
  },
  methods: {
    onSelect(item) {
      this.$router.push({ name: "Game", params: { type: item } });
    },
    openDialog() {
      this.ruleDialog = true;
    },
    closeDialog() {
      this.ruleDialog = false;
    },
  },
};
</script>
<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100%;
  max-width: unset !important;
}
.button {
  position: absolute;
  transform: translate(-50%, 0%);
}
</style>
