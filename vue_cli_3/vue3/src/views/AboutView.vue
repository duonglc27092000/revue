<template>
  <div class="about">
    <h1>This is an about page</h1>
    <base-modal>ji</base-modal>
  </div>
</template>
<script>
import ModalD from "@/components/ModalD.vue";
export default {
  name: "AboutD",
  data() {
    return {
      component: {
        BaseModal: ModalD,
      },
    };
  },
  methods() {},
};
</script>
