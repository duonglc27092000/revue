<template>
  <div class="card">
    <div
      class="card__inner"
      :class="{ isFlip: isFlip }"
      @click="onToggleIsFlipCard"
    >
      <div class="card__face card__face--font">
        <div class="card__content"></div>
      </div>
      <div class="card__face card__face--back">
        <div
          class="card__content"
          :style="{
            backgroundImage: `url(${require('@/assets/' + imgBackFaceUrl)})`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: [Number, String, Object, Array],
      required: true,
    },
    imgBackFaceUrl: { type: String, default: "", require: true },
  },
  emits: ["onFlip"],
  data() {
    return {
      isFlip: false,
    };
  },
  methods: {
    onToggleIsFlipCard() {
      this.isFlip = !this.isFlip;
      if (this.isFlip) this.$emit("onFlip", this.card);
    },
    onFlipBack() {
      this.isFlip = false;
    },
  },
};
</script>
<style lang="css" scoped>
.card {
  display: inline-block;
  margin-left: 1.6rem;
  margin-bottom: 1.6rem;
  width: 9rem;
  height: 12rem;
  line-height: 12rem;
  text-align: center;
}
.card__inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: 0.75s;
  transform-style: preserve-3d;
  cursor: pointer;
}
.card__inner.isFlip {
  transform: rotateY(-180deg);
}
.card__face {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 1.6rem;
  box-shadow: 0px 3px 10px 13px rgba(0, 0, 0, 0.2);
  position: absolute;
}
.card__face--font .card__content {
  background: url("../assets/images/icon_back.png") no-repeat center center;
  height: 100%;
  width: 100%;
  background-size: 5rem 5rem;
}

.card__face--back {
  background-color: var(--light);
  transform: rotateY(-180deg);
}
.card__face--back .card__content {
  height: 100%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>