$(function(){
	$("#intro_slide").bxSlider({
		auto: true,
	},4500);
	$("#store_slide").bxSlider({
		mode:'fade',
		pagerCustom: '#store_pager'
	});

var owl = $(".menu_slider");
	owl.owlCarousel({
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1000,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false ,// itemsMobile disabled - inherit from itemsTablet option
		navigation : true
  });

	$(".menu_list a").on('click',function(e){
		e.preventDefault();
		$('.gnb').slideToggle("slow");
	});
	$(".event_tab li a").on('click',function(e){
		e.preventDefault();
		$(this).parent().addClass('active').siblings().removeClass('active');
		
		temp=$('.event_tab li a').index($(this));
		$('.section2 .container').eq(temp).show().siblings().hide();
	});
	$(".new_menu_item").on('mouseenter',function(){
		$('strong',this).animate({opacity:0.5},1000)
	}).on('mouseleave',function(){
		$('strong',this).animate({opacity:0},1000)	
		})
	$(".l_box").fancybox();
	$(".section3 .more").on('click',function(e){
		e.preventDefault();
		$(".coffeestory_menu_page").slideDown(1000);
	});
	$(".section4 .coffee .more").on('click',function(e){
		e.preventDefault();
		$(".coffee_menu_page").slideDown(1000);
	});
	$(".section4 .cake .more").on('click',function(e){
		e.preventDefault();
		$(".cake_menu_page").slideDown(1000);		
	});
	$(".section4 .choco .more").on('click',function(e){
		e.preventDefault();
		$(".choco_menu_page").slideDown(1000);		
	});
	$(".section4 .kitchen .more").on('click',function(e){
		e.preventDefault();
		$(".kitchen_menu_page").slideDown(1000);		
	});
	$(".section4 .retail .more").on('click',function(e){
		e.preventDefault();
		$(".retail_menu_page").slideDown(1000);		
	});
	$(".section6 .more").on('click',function(e){
		e.preventDefault();
		$(".store_link_page").slideDown(1000);
	});


	$(".close").on('click',function(e){
		e.preventDefault();
		$(".section_slidedown").slideUp(1000);
	});
	
})
