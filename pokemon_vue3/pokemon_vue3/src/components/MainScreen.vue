<template>
  <div class="main">
    <div class="main__wrap">
      <h1>POKE MEMORIES</h1>
      <h3>Select mode to start game</h3>
      <div class="actions">
        <button @click="onStart(16)">
          <span>4x4</span>
          <span>Easy</span>
        </button>
        <button @click="onStart(36)">
          <span>6x6</span>
          <span>Normal</span>
        </button>
        <button @click="onStart(64)">
          <span>8x8</span>
          <span>Hard</span>
        </button>
        <button @click="onStart(100)">
          <span>10x10</span>
          <span>Super Hard</span>
        </button>
      </div>
    </div>
    <coppy-right />
  </div>
</template>
<script>
import CoppyRight from "./CoppyRight.vue";
export default {
  name: "MainScreen",
  components: {
    CoppyRight,
  },
  emits: ["onStart"],
  methods: {
    onStart(totalOfBlock) {
      this.$emit("onStart", { totalOfBlock });
    },
  },
};
</script>
<style lang="css" scoped>
.main__wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 90vh;

}

</style>