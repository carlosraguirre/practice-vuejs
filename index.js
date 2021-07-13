/* global Vue */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      subMessage: "Hi again!",
      thirdMessage: "Hi.",
      showHiddenInfo: false,
      greyOutInfo: false
    };
  },
  methods: {
    goodbye: function () {
      console.log("Goodbye!");
      this.subMessage = "Goodbye!";
    },
    toggle: function () {
      console.log('in toggle');
      this.showHiddenInfo = ! this.showHiddenInfo;
    },
    greyOut: function () {
      console.log('greying out text');
      this.greyOutInfo = ! this.greyOutInfo;
    }
  }
});
