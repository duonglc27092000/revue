const app = Vue.createApp({
  template: "<h1> Hello {{nameD}}</h1>",
  data() {
    return {
      nameD: "Duongh399",
    };
  },
});
app.mount("#contact");
