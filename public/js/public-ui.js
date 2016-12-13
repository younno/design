// public-ui.js

(function(global,$){
	'use strict';
	
	$(document).ready(function () {
		
		// btn util toggle
		var $btn_util_toggle = $('.btn_util_wrap .btn_util'),
			 $cont_util_toggle = $('.btn_util_wrap .util_list'),
			 $bg_util_opacity = $('.bg_util_opacity');
			
		$btn_util_toggle.on('click', function(e) {
			e.preventDefault();
			$(this).toggleClass('on');
			$cont_util_toggle.toggle();
			$bg_util_opacity.toggle();			
		});		
		
		$bg_util_opacity.on('click', function(e) {
			$cont_util_toggle.hide();
			$($btn_util_toggle).removeClass('on');
			$(this).toggle();
		});
		
		// btmFixed
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			// You are in mobile browser
			var $btnGpWrap = $('.btn_gp_wrap'),
				$footerInner = $('.footer .inner')
			$(window).on('scroll', function() {
				var winTop = $(window).scrollTop();
				if ( winTop > 80 ) {			
				$btnGpWrap.addClass('btm_fixed');
				$footerInner.css({'paddingBottom':'90px'});
				} else {			
				$btnGpWrap.removeClass('btm_fixed');
				$footerInner.css({'paddingBottom':'40px'});
				}
			});
		}
	
		// file input
		  var $fileBox = null;  
		  $(function() {
			init();
		  })		  
		  function init() {
			$fileBox = $('.input-file');
			fileLoad();
		  }
		  function fileLoad() {
			$.each($fileBox, function(idx){
			  var $this = $fileBox.eq(idx),
				  $btnUpload = $this.find('[type="file"]'),
				  $label = $this.find('.file-label');
			  $btnUpload.on('change', function(e) {
				e.preventDefault();
				var $target = $(this),
					fileName = $target.val(),
					$fileText = $target.siblings('.file-name');
				$fileText.val(fileName);
			  })
			  $btnUpload.on('focusin focusout', function(e) {
				e.preventDefault();
				e.type == 'focusin' ?
				  $label.addClass('file-focus') : $label.removeClass('file-focus');
			  })
			})
		  }
		  
		 // Checkbox
		var checkBox = $('.ctm-check');
		var addClassCheckBox = function($input) {
			if ($input.prop('checked')) {
			  $input.parent().addClass('checked');
			} else {
			  $input.parent().removeClass('checked');
			}
		};
		checkBox.on('change', 'input', function() {
			addClassCheckBox($(this));
		})
		
	});
	
})(this,this.jQuery);