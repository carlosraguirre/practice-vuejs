/* global Vue */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      subMessage: "Hi again!",
      thirdMessage: "Hi."
    };
  },
  methods: {
    goodbye: function () {
      console.log("Goodbye!");
      this.subMessage = "Goodbye!";
    }
  }
});
