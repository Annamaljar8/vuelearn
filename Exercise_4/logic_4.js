new Vue({
  el: '#exercise',
  data: {
  attachHighlight: false,
  attachBig: false,
  fontSize: 'big',
  color: '',
  myClass: '',
  isShrink: true,
},

  methods: {
  startEfect: function () {
    setInterval (() => {
      this.attachHighlight = !this.attachHighlight;
    }, 2000);
  }
}
})
