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
  		$.ajax({
  			url:'/myProject/mock/livelist.json',
  			type:'get',
  			data:{},
  			success:function(res){
  				vm.livelist=res.data;
  			}
<<<<<<< HEAD
//			var mySwiper=new Swiper("#m-container",{
//				loop:false,
//				onSlideChangeStart:function(swiper){
//					var index=swiper.activeIndex;
//					
//				}
//			})
=======
>>>>>>> master
  		})
  	}
  }
  
  
  
});



































