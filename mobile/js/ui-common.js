// ui-common.js

(function(global,$){
	'use strict';
	
	$(function($) {

		// btnTop
		var $btnTop = $('.btnTop');
		$(window).on('scroll', function() {
			var winTop = $(window).scrollTop();
			if ( winTop > 100 ) {
			$btnTop.fadeIn();
			} else {
			$btnTop.fadeOut();
			}
		});
		$btnTop.on('click', function() {
			$('html, body').animate( { scrollTop : 0 }, 400 );
			return false;
		});
		
		// top_fixed
		var $mall_main = $('.mall_main');
		var $coupon_main = $('.coupon_main');
		$(window).on('scroll', function() {
			var winTop = $(window).scrollTop();
			if ( winTop > 22 ) {
			$mall_main.addClass('top_fixed');	
			$coupon_main.addClass('top_fixed');	
			} else {
			$mall_main.removeClass('top_fixed');
			$coupon_main.removeClass('top_fixed');	
			}
		});
		
		// tip toggle
		var $btn_tip_toggle = $('.btn_tip_toggle'),
			$cont_tip_toggle = $('.cont_tip_toggle');
			
		$btn_tip_toggle.on('click', function(e) {
			e.preventDefault();
			$(this).toggleClass('on');
			$cont_tip_toggle.toggle();
		});
		
		// checkbox toggle
		$('.ui_check').on('click', function() {
			$(this).parent().toggleClass('on');;
		});
		
		// email select choice
		var $str_select = $('.str_select'),
			 $str_email = $('.str_email')
		$str_select.change(function(){
		   $('.str_select option:selected').each(function () {
				
				if($(this).val()== '1'){ //직접입력일 경우
					 $str_email.val('');                    //값 초기화
					 $str_email.attr('readonly',false); //활성화
				}else{ //직접입력이 아닐경우
					 $str_email.val($(this).text());      //선택값 입력
					 $str_email.attr('readonly',true); //비활성화
				}
		   });
		});
		
		//select
		$(function() {
		  var selectTarget = $('.select_sorting_type2 select');

		  selectTarget.change(function() {
			var select_name = $(this).children('option:selected').text();
			$(this).siblings('label').text(select_name);
		  });
		});
		
		// accordion faq
		(function accordion () {
			
			$('.accordion_list').children('li').first().children('a').addClass('active')
				.next().addClass('is_open').show();
				
			$('.accordion_list').on('click', '.subject_link', function(e) {
			e.preventDefault();
				
			  if (!$(this).hasClass('active')) {

				$('.accordion_list .is_open').removeClass('is_open').hide();
				$(this).next().toggleClass('is_open').toggle();			  
				
				$('.accordion_list').find('.active').removeClass('active');			
				$(this).addClass('active');			
				
			 } else {
				$('.accordion_list .is_open').removeClass('is_open').hide();
				$(this).removeClass('active');
			  }
		   });
		})();
		
		// accordion2 mall_main
		(function accordion2 () {		
			$('.accordion_list2').children('li').first().children('a').addClass('active')
				.next().addClass('is_open').show();
			
			var $subject_link = $('.accordion_list2 .subject_link');		
			for (var i = 0, l=$subject_link.length; i < l ; i++) {				
				$subject_link[i].onclick = function(e) {
					e.preventDefault();			
					$(this).toggleClass('active');
					$(this).next().toggleClass('is_open');
				};		
			}		
		})();	
	
	});
})(this,this.jQuery);


//numberCounter
function numberCounter(target_frame, target_number) {
	this.count = 0; this.diff = 0;
	this.target_count = parseInt(target_number);
	this.target_frame = document.querySelector(target_frame);
	this.timer = null;
	this.counter();
};
numberCounter.prototype.counter = function() {
	var self = this;
	this.diff = this.target_count - this.count;

	if(this.diff > 0) {
		self.count += Math.ceil(this.diff / 5);
	}

	this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	if(this.count < this.target_count) {
		this.timer = setTimeout(function() { self.counter(); }, 20);
	} else {
		clearTimeout(this.timer);
	}
};
