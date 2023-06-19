<template>
  <div>
    <h1>InteractScreen here</h1>
    <card-pokemon
      v-for="(card, index) in cardsContext"
      :key="index"
      :ref="`card-${index}`"
      :img-back-face-url="`images/${card}.png`"
      :card="{ index, value: card }"
      @onFlip="checkRule($event)"
    />
  </div>
</template>
<script>
import CardPokemon from "./CardPokemon.vue";
export default {
  components: {
    CardPokemon,
  },

  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      rules: [],
    };
  },
  methods: {
    checkRule(card) {
      if (this.rules.length === 2) return false;

      this.rules.push(card);
      if (
        this.rules.length === 2 &&
        this.rules[0].value == this.rules[1].value
      ) {
        console.log("...right");
        // this.rules = [];
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        console.log("...wrong");

        // close tow card
        this.$refs[`card-${this.rules[0].index}`].onFlipBack();
        this.$refs[`card-${this.rules[1].index}`].onFlipBack();
        // reset rules to []
        this.rules = [];
      } else return false;
    },
  },
};
</script>
<style scoped>
h1 {
  margin: 30px;
}
</style>