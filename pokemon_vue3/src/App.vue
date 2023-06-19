<template>
  <div>
    <main-screen
      v-if="statusMatch === 'default'"
      @on-start="onHandleBeforeStart($event)"
    />
    <interact-screen
      v-if="statusMatch === 'match'"
      :cards-context="settings.cardsContext"
    />
    <result-screen v-if="statusMatch === 'result'" />
  </div>
</template>

<script>
import MainScreen from "./components/MainScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";
import { shuffled } from "./utils/array.js";
import ResultScreen from "./components/ResultScreen.vue";
export default {
  name: "App",
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
  },
  data() {
    return {
      settings: { totalOfBlock: 0, cardsContext: [] },
      statusMatch: "default",
      startedAt: null,
    };
  },
  methods: {
    onHandleBeforeStart(config) {
      console.log("running handle before Start , ", config);
      this.settings.totalOfBlock = config.totalOfBlock;
      const firstCards = Array.from(
        { length: this.settings.totalOfBlock / 2 },
        (value, index) => index + 1
      );
      const secondCards = [...firstCards];
      const card = [...firstCards, ...secondCards];
      console.log(" yet shuffled", card);
      this.settings.cardsContext = shuffled(shuffled(shuffled(card)));
      console.log("shuffled", this.settings.cardsContext);
      //data ready
      this.settings.startedAt = new Date().getTime();
      this.statusMatch = "match";
    },
  },
};
</script>
<style scoped>
</style>
