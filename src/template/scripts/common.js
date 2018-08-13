$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	// function pixelPerfect(name, opacity, width) {
	// 	var ppBlock = $('.'+name),
	// 			ppImage = ppBlock.attr('data-pp');
	// 	ppBlock.css({
	// 		'opacity': '0.' + opacity,
	// 		'position': 'absolute',
	// 		'transform': 'translateX(-50%)',
	// 		'left': '50%',
	// 		'z-index': '100',
	// 		'width': width + 'px' 
	// 	});
	// }
	// pixelPerfect('pp', 5, 480);


	$('.nano').nanoScroller({
		alwaysVisible: true
	});

	$('.drop__area').click(function(event) {
		var drop = $(this).parents('.drop');

		if (drop.hasClass('drop_show')) {
			drop.removeClass('drop_show');
		} else {
			drop.parents('.drops').find('.drop').removeClass('drop_show');
			drop.addClass('drop_show');
		}
	});

	function valueElementForm(nameElement, blockElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($(blockElement)),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement.replace(' ', '-') + '-' + elementValue);
			elementLabel.attr('for', nameElement.replace(' ', '-') + '-' + elementValue);
		});
		
	}
	valueElementForm('input', 'input');
	valueElementForm('checkbox', 'input');
	valueElementForm('drop__item', 'input');
	valueElementForm('alfabet__body li', 'input');
	valueElementForm('textarea', 'textarea');
	
	function dropChange(selector) {
		var selectorHTML = $('.' + selector);
		selectorHTML.change(function(event) {
			var inputText =  $(this).next('label').text(),
					drop = $(this).parents('.drop'),
					textArrea = drop.find('.drop__input input'),
					textArreaVal = textArrea.val();
			if (selector != 'checkboxs__item input') {
				if ($(this).is(':checked')) {				
					textArrea.val(inputText);
					drop.removeClass('drop_show');
					drop.addClass('drop_active');
				} else{
					drop.addClass('drop_error').removeClass('drop_show');	
				}
			} else {
				if ($(this).is(':checked')) {
					if (textArreaVal == '') {
						textArrea.val(inputText);
					} else {
						textArrea.val(textArreaVal + ', ' + inputText);
					}
					drop.addClass('drop_active');

				} else{
					if (textArrea.val().split(",").length - 1 == 0) {
						textArreaVal = textArreaVal.replace(inputText , '');
						textArrea.val(textArreaVal);
						if (textArreaVal =='' || textArreaVal == null) {

							drop.removeClass('drop_active')
						}
					}
					 else {
						textArreaVal = textArreaVal.replace(', ' + inputText, '');
						textArrea.val(textArreaVal);

					}
					
				}
			}
		});
	}
	dropChange('drop__item input');
	dropChange('alfabet__body input');
	dropChange('checkboxs__item input');


	var portfolioSlider = $('.portfolio__list'),
			portfolioNav = $('.portfolio__arrows'),
			portfolioCountWrap = $('.portfolio__counts .count-current'),
			portfolioTotalWrap = $('.portfolio__counts .count-total'),
			portfolioTotal = portfolioSlider.find('.portfolio__item').length;

	
	portfolioTotalWrap.html(portfolioTotal);

	portfolioSlider.slick({
		appendArrows: portfolioNav,
		fade: true,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="upload/svg/btn-left.svg" alt="" /></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="upload/svg/btn-right.svg" alt="" /></button>'
	});

	portfolioSlider.on('afterChange', function(event, slick, direction){
	  portfolioCountWrap.html(direction + 1);
	});


	$('.portfolio__item').each(function(index, el) {
		var images = $(this).find('.portfolio__img-list'),
				arrows = $(this).find('.portfolio__img-arrows'),
				dots = $(this).find('.portfolio__img-dots');
		images.slick({
			fade: true,
			arrows: true,
			dots: true,
			appendArrows: arrows, 
			appendDots: dots,
			prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="upload/svg/btn-left-small.svg" alt="" /></button>',
			nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="upload/svg/btn-right-small.svg" alt="" /></button>'
		})
	});
	

	var reviewsSlider = $('.reviews__list'),
			reviewsCountWrap = $('.reviews__counts .count-current'),
			reviewsTotalWrap = $('.reviews__counts .count-total'),
			reviewsTotal = reviewsSlider.find('.reviews__item').length;

	
	reviewsTotalWrap.html(reviewsTotal);

	reviewsSlider.slick({
		fade: true,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="upload/svg/btn-left.svg" alt="" /></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="upload/svg/btn-right.svg" alt="" /></button>'
	});

	reviewsSlider.on('afterChange', function(event, slick, direction){
	  reviewsCountWrap.html(direction + 1);
	});



	$('.input .input__wrap').focus(function(event) {
		var input = $(this).parents('.input');

		input.toggleClass('input_focus');

	});

	$('.input .input__wrap').blur(function(event) {
		var input = $(this).parents('.input');
		input.removeClass('input_focus');
	});

	$('.input .input__wrap').change(function(event) {
		var input = $(this).parents('.input'),
				text = $(this).val();
		if (text != '') {
			input.addClass('input_filled');
		} else {
			input.removeClass('input_filled');
		}
	});

	$("a[href^='#']").click(function(){
  	var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
    return false;
	});


	var nav = $('.nav'),
			mobileBtn = $('.panel__mob-btn');

	mobileBtn.click(function(event) {
		nav.toggleClass('nav_toggle');
		mobileBtn.toggleClass('panel__mob-btn_toggle');
	});
});
