// JavaScript Document

	//tooltip
	
	$('[data-toggle="tooltip"]').tooltip(); 
	
	//menu hover
	
	$(".nav-menu-bar .dropdown").hover( 	
		           
		function() {
			
			$(this).find('.dropdown-menu').first().stop(true, true).slideDown(); 
						   
		},
		function() {
			$(this).find('.dropdown-menu').first().stop(true, true).slideUp(); 
	});
			
    
	
	//search bar
	$(".b-search-form").hide();
	
	$(".b-search-icon").click(function(){
	$(".b-search-form").slideToggle("slow");
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('active');
			$(this).addClass('active');    
		}
	});
	
	//enquiry form
	
	$(".enq-btn").click(function(){
		$(".form-wrap").animate({
			width: "toggle"
		});
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('active');
			$(this).addClass('active');    
		}
		if ( $(".form-wrap").hasClass('visible') ) {
			$(".form-wrap").removeClass('visible');
		} else {
			$(".form-wrap").removeClass('visible');
			$(".form-wrap").addClass('visible');    
		}
	});
	
	$('.form-wrap .form-control,.contact-form .form-control').on('focus blur', function (e) {
        $(this).parents('.form-wrap .form-group,.contact-form .form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
	}).trigger('blur');
	
		//about video button
	$(".abt-video").hide();
	$(".play-btn").click(function(){
		
		$(".abt-video").show();
		$(".abt-img").hide();
	});

	
	//back to top
   
	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});

	// scroll body to 0px on click
	$('#back-top a').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//horizontal tab
	$('#horizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion           
		width: 'auto', //auto or any width like 600px
		fit: true,   // 100% fit in a container
		closed: 'accordion', // Start closed if in accordion view
		activate: function(event) { // Callback function if tab is switched
		var $tab = $(this);
		var $info = $('#tabInfo');
		var $name = $('span', $info);
		$name.text($tab.text());
		$info.show();
		}
	});

	//scrollbar
	
	$(".content").mCustomScrollbar({
		scrollButtons:{
			enable:true
		},
		callbacks:{
			onScrollStart:function(){ myCallback(this,"#onScrollStart") },
			onScroll:function(){ myCallback(this,"#onScroll") },
			onTotalScroll:function(){ myCallback(this,"#onTotalScroll") },
			onTotalScrollOffset:60,
			onTotalScrollBack:function(){ myCallback(this,"#onTotalScrollBack") },
			onTotalScrollBackOffset:50,
			whileScrolling:function(){ 
				myCallback(this,"#whileScrolling"); 
				$("#mcs-top").text(this.mcs.top);
				$("#mcs-dragger-top").text(this.mcs.draggerTop);
				$("#mcs-top-pct").text(this.mcs.topPct+"%");
				$("#mcs-direction").text(this.mcs.direction);
				$("#mcs-total-scroll-offset").text("60");
				$("#mcs-total-scroll-back-offset").text("50");
			},
			alwaysTriggerOffsets:false
		}
	});
	
	function myCallback(el,id){
		if($(id).css("opacity")<1){return;}
		var span=$(id).find("span");
		clearTimeout(timeout);
		span.addClass("on");
		var timeout=setTimeout(function(){span.removeClass("on")},350);
	}
	
	$(".callbacks a").click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass("off");
		if($(e.target).parent().attr("id")==="alwaysTriggerOffsets"){
			var opts=$(".content").data("mCS").opt;
			if(opts.callbacks.alwaysTriggerOffsets){
				opts.callbacks.alwaysTriggerOffsets=false;
			}else{
				opts.callbacks.alwaysTriggerOffsets=true;
			}
		}
	});
		
	
	
	

	
	
	
	
	

