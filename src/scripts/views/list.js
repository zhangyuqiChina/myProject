var indexList = require('../tpls/list.string');

SPA.defineView('list', {
  html: indexList,
  
  plugins: [
	  'delegated', {
      name: 'avalon',
      options: function (vm) {
        vm.qlist = [];
        vm.isShowLoading = true;
        vm.bannerUrl = "";//这里一定要定义一下
      }
  }],
  
  //绑定单击事件
  bindActions: {
  	'back': function(){
  		this.hide();
  	},
  	
  	'gotoDetails': function(el,data){
		SPA.open('my-2', {
			param:{
				id: data.goodscode
			}
		});
  	}
  },
  
  // 绑定视图事件
  bindEvents: {
    'show': function () {
    	var vm = this.getVM();
      // ajax拉取数据
      $.ajax({
        url: '/myProject/mock/list-phone.json',
        type: 'get',
        data: {},
        success: function (res) {
        	vm.qlist = res.body.data.goods;
        	vm.bannerUrl = res.body.data.bannerUrl;
        }
      })
    }
  }
});