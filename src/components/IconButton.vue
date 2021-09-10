<template>
  <div
    class="button-container"
    :style="
      'border-color:' +
        colors[index] +
        '; width: ' +
        size +
        'px; height: ' +
        size +
        'px; border-width: ' +
        parseInt(size) / 10 +
        'px;'
    "
    @click="onClicked"
    v-if="index >= 0"
  >
    <v-img
      :src="images[index]"
      contain
      :height="parseInt(size) / 3"
      :width="parseInt(size) / 3"
    />
  </div>
  <div
    v-else
    class="empty-contents"
    :style="
      'width: ' +
        parseInt(size) * 0.9 +
        'px; height: ' +
        parseInt(size) * 0.9 +
        'px; margin:' +
        parseInt(size) * 0.05 +
        'px;'
    "
  ></div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
    clicked: {
      type: Function,
      default: () => {
        console.log("clicked");
      },
    },
    size: {
      default: "150",
    },
  },
  data() {
    return {
      names: ["rock", "paper", "scissors", "lizard", "spock"],
      colors: ["#dd405c", "#516ff9", "#eaa722", "#4dbed1", "#905ce5"],
      images: [
        require("../assets/images/icon-rock.svg"),
        require("../assets/images/icon-paper.svg"),
        require("../assets/images/icon-scissors.svg"),
        require("../assets/images/icon-lizard.svg"),
        require("../assets/images/icon-spock.svg"),
      ],
      index: 0,
    };
  },
  methods: {
    onClicked() {
      this.clicked(this.name);
    },
  },
  watch: {
    name(newValue) {
      this.index = this.names.indexOf(newValue);
    },
  },
  mounted() {
    this.index = this.names.indexOf(this.name);
  },
};
</script>
<style scoped>
.button-container {
  background: white;
  border-radius: 50%;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
}
.empty-contents {
  background: #17223e;
  border-radius: 50%;
}
</style>
