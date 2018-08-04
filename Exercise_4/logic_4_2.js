new Vue({
  el: '#exercise',
  data: {
  attachHighlight: false,
  attachBig: false,
  color: 'green',
},
methods: {
  startEfect: function () {
    setInterval (() => {
      this.attachHighlight = !this.attachHighlight;
    }, 2000);
  }
}
})
