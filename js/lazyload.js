var LazyLoad = (function(){
	var clock;
	function init(){
		$(window).on('scroll',function(){
			if(clock){
				clearTimeout(clock);
			}
			clock = setTimeout(function(){
				checkShow();
			},300);
		})
		checkShow();
	}
	
	function checkShow(){
		$('.m-lazyload').each(function(){
			var $this = $(this);
			if($this.attr('isLoaded')){
				return;
			}
			if(shouldShow($this)){
				showImg($this);
			}
		})
	}
	
	function shouldShow($node){
		var scrollH = $(window).scrollTop(),
			   winH = $(window).height(),
			    top = $node.offset().top;   
		if(top < winH + scrollH){
			return true;
		}else{
			return false;
		}
	}
	
	function showImg($node){
		$node.attr('src',$node.attr('data-src'));
		$node.attr('isLoaded',true);
	}
	
	return {
		init : init
	}
})()

LazyLoad.init();
