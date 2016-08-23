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
		//轮播图头部
			var mySwiper=new Swiper("#home-container",{
				loop:false,
				pagination : '.swiper-pagination',
				paginationClickable :true,
				autoplay: 2000,
				loop : true,
			});
			//轮播图横向
			var mySwiper= new Swiper('#home-container1',{
				freeModeMomentum : false,
			})
			//轮播图横向1
			var mySwiper= new Swiper('#home-container2',{
				freeModeMomentum : false,
			})
			//点击事件;
			$(".hxb-home img").on("tap",function(){
				window.location.href="/myProject/index.html#list#"
			})
			
	}
}
});


































