new Vue ({
  el: '#exercise_3',
  data: {
    value: 0,
    value2: 0,
    value3: 0
  },
  watch: {
    value2: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.value3 = vm.value2;
      }, 5000);
    },
  },
  methods: {
    result: function() {
      return this.value == 37 ? 'done' : 'not there yet';
    }
  },
})
