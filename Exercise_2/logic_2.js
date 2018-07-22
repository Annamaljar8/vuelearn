new Vue ({
  el:'#exercise',
  data: {
    value: '',
  },
  methods: {
    alertMe: function() {
      alert('Alert!')
    },
    readKey: function (event){
    this.value=event.target.value;}
  }
})
