<template>
  <v-dialog v-model="dialog" persistent width="600">
    <v-card>
      <div
        style="display: flex; flex-direction: row; justify-content: space-between;"
      >
        <h1>Rules</h1>
        <v-btn icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div
        style="display: flex; flex-direction: row; justify-content: center; align-items:center;"
      >
        <v-img
          :src="require('@/assets/images/image-rules-bonus.svg')"
          width="400px"
          contain
        />
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    dialog: {
      default: false,
    },
    closeDialog: {
      type: Function,
    },
  },
};
</script>
