var indexHome = require('../tpls/home.string');

SPA.defineView('home', {
  html: indexHome,
  plugins:[{
  	name:"avalon",
  	options:function(vm){
  		vm.homeCarousels=[];
  		vm.homeGoodgroups=[];
  		vm.homeGoodgroups1=[];
  	}
  }],
//绑定视图事件
bindEvents:{
	'show':function(){
		var vm=this.getVM();
		$.ajax({
        url: '/myProject/mock/home-huo.json',
        type: 'get',
        data: {},
        success: function (res) {
        	vm.homeCarousels = res.body.carousels;
        	vm.homeGoodgroups= res.body.goodGroups;
      		vm.homeGoodgroups1= res.body.goodGroups[0].slideGoods;
//      	vm.homeSlideGoods= res.body.goodGroups.slideGoods;
        	console.log(res.body.goodGroups[0].slideGoods)
        	
        	
        							//轮播图头部
											var mySwiper=new Swiper("#home-container",{
												loop:false,
												pagination : '.swiper-pagination',
												paginationClickable :true,
												autoplay: 2000,
												loop : true,
											});
											//轮播图横向1
											var swiper = new Swiper('#home-container1', {
								       // pagination: '.swiper-pagination',
								        slidesPerView: 3.5,
								        //paginationClickable: true,
								        //spaceBetween:10
								   		 });
											//轮播图横向2
											var swiper = new Swiper('.home-container2', {
								       // pagination: '.swiper-pagination',
								        slidesPerView: 3.5,
								        //paginationClickable: true,
								        //spaceBetween:10
								   		 });
        }
      })
			//点击事件;
			$(".hxb-home img").on("tap",function(){
				window.location.href="/myProject/index.html#list#"
			})
			
	}
}
});


































