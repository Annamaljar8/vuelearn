new Vue({
  el: '#exercise',
  data: {
    name: '',
    age: 0,
    imageSrc: "https://sovets.net/photos/uploads/165/8381750-17820547.jpg",
  },
  methods: {
    sayAge: function(age) {
      return this.age*3},
      randomNumber: function getRandom() {
        return Math.random();},
    changeName: function(event) {
      this.name = event.target.value;},
    changeAge: function(event) {
      this.age = event.target.value;},
  }
});
