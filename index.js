/* global Vue */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      subMessage: "Hi again!",
      thirdMessage: "Hi.",
      showHiddenInfo: false,
      greyOutInfo: false,
      movies: ["Jurassic Park the Best", "Jurassic World Kinda Bad", "Jurassic World 2 Much Worse"],
      recentMovies: ["Godzilla vs. Kong", "Minari", "A Quiet Place Part II"],
      newMovies: ""
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
    },
    addMovie: function () {
      console.log("adding movie...");
      console.log(this.newMovies);
      this.movies.push(this.newMovies);
      this.newMovies = "";
    }
  }
});
