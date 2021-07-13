/* global Vue */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Welcome to Internet Calculator",
      number1: 0,
      number2: 0,
      number3: 0,
      sumTotal: null
      productTotal: null
    };
  },
  methods: {
    sum: function() {
      console.log(this.text);
      this.sumTotal = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
    product: function() {
      console.log(this.text);
      this.productTotal = parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3);
    }
  }
});