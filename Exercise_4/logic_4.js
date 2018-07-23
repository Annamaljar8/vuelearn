app = new Vue({
  el: '#exercise',
  data: {
    highlight_visible: false,
	shrink_visible: false
  },
  methods: {
	  startEfect() {
		  this.highlight_visible = !this.highlight_visible;
		  setInterval("app.highlight_visible = !app.highlight_visible;app.shrink_visible = !app.shrink_visible;", 5000);
	  }
    }

});
