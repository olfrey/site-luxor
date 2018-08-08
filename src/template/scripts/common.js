$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	function pixelPerfect(name, opacity, width) {
		var ppBlock = $('.'+name),
				ppImage = ppBlock.attr('data-pp');
		console.log(ppBlock);
		ppBlock.css({
			'opacity': '0.' + opacity,
			'position': 'absolute',
			'transform': 'translateX(-50%)',
			'left': '50%',
			'z-index': '100',
			'width': width + 'px' 
		});
	}
	// pixelPerfect('pp', 3, 1920);
});
