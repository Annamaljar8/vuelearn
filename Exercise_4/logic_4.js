new Vue({
  el: '#exercise',
  data: {
  attachHighlight: false,
  color: '',
  myClass: '',
  isLook: true,
  progressBar: {
    width: '0px',
    backgroundColor: 'green'
  }
},

  methods: {
  startEfect: function () {
    setInterval (() => {
      this.attachHighlight = !this.attachHighlight;
    }, 2000);
  },
  startProgress: function() {
    let vm = this;
    let width = 0;

  setInterval(() => {
    width = width + 20;
    vm.progressBar.width = width + 'px';
    }, 500);
  }
}
})
