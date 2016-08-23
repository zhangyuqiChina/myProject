var indexHome = require('../tpls/home.string');

SPA.defineView('home', {
  html: indexHome,
  plugins:[{
  	name:"avalon",
  	options:function(vm){
  		vm.livelist=[];
  	}
  }],
//绑定视图事件
bindEvents:{
	'show':function(){
		var vm=this.getVM();
//		$.ajax({
//			url:'/myProject/mock/livelist.json',
//			type:'get',
//			data:{},
//			success:function(res){
//				vm.livelist=res.data;
//			}
//			})
			var mySwiper=new Swiper("#home-container",{
				loop:false,
				pagination : '.swiper-pagination',
				paginationClickable :true,
				autoplay: 2000,
				loop : true,
			});
			
			var mySwiper = new Swiper('#home-container1',{
				freeMode : true,
				freeModeMomentum : false,
			})
			
			
			
			
			
			
			
	}
}
});


































