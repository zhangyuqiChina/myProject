var indexMy2 = require('../tpls/my-2.string');

SPA.defineView('my-2', {
  html: indexMy2,
  plugins: [
	  'delegated'
	 ],
  
  bindActions: {
  	'dBack': function(){
  		this.hide();
  	}
	}
  
});