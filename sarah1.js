$(document).ready(function(){

	$('.last').addClass('cursor_ori');
	/* ALBUM IMG */
	for (var i=1; i<9; i++){
		$('.image_'+ i).html('<img src="img/'+ i +'.jpg"/>');
	}
	
	/* PAGE */
	var muted = false;
	if (!muted) {
		$('.mute:hover').css('border-right', '15px solid #fff');
	}
	var page = 0;
	$('.next').click(function() {
		if ( page < 8 ) {
			$('.side_' + page + ', .image_' + page + ', .year_' + page).css('opacity','0');
			page += 1;
			$('.side_' + page + ', .image_' + page).css('opacity','1');
			$('.year_' + page).css('opacity','0.2');
			$('.img_bg').css('background-image','url("img/'+ page +'.jpg")');
			$('.count span').css('opacity','0');
			$('.mute_' + page).delay(1000).fadeIn(500);
			setTimeout(function() {
				$('.count span').text(page);
				$('.count span').css('opacity','1');
			}, 500);
			/* STOP LAST MUSIC */
			var page_less = page - 1;
			$('.mute_' + page_less).fadeOut(500);
			var audio_sample_stop = $('.audio_' + page_less);
			audio_sample_stop.animate( {volume: 0} , 1000, function () {
				muted = true;
			});
			setTimeout(function (){
				$('.audio_' + page_less).trigger('pause');
			}, 1000);		
			/* START MUSIC */
			if (muted) {
				setTimeout(function (){
					$('.mute').removeClass('pause').removeClass('play').addClass('play_direct');
				}, 500);		
				muted = true;
			}
			var audio_sample = $('.audio_' + page);
			$('.audio_' + page).trigger('play');
			audio_sample.animate({volume: 1}, 1000, function () {
				muted = false;
			});
		};
		if ( page == 1 ) {
			$('.last').css('opacity','1');
			$('.last').removeClass('cursor_ori');
		};
		if ( page == 8 ) {
			$('.next').css('opacity','0');
			$('.next:hover').addClass('cursor_ori');
		};
	});
	$('.last').click(function() {
		if ( page > 0 ) {
			$('.side_' + page + ', .image_' + page + ', .year_' + page).css('opacity','0');
			page -= 1;
			$('.side_' + page + ', .image_' + page).css('opacity','1');
			$('.year_' + page).css('opacity','0.2');
			$('.img_bg').css('background-image','url("img/'+ page +'.jpg")');
			$('.count span').css('opacity','0');
			$('.mute_' + page).delay(1000).fadeIn(500);
			setTimeout(function() {
				$('.count span').text(page);
				$('.count span').css('opacity','1');
			}, 500);			
			/* STOP LAST MUSIC */
			var page_more = page + 1;
			$('.mute_' + page_more).fadeOut(500);
			var audio_sample_stop = $('.audio_' + page_more);
			audio_sample_stop.animate( {volume: 0} , 1000, function () {
				muted = true;
			});
			setTimeout(function (){
				$('.audio_' + page_more).trigger('pause');
			}, 1000);		
			/* START MUSIC */
			if (muted) {
				setTimeout(function (){
					$('.mute').removeClass('pause').removeClass('play').addClass('play_direct');
				}, 500);	
				muted = true;
			}
			var audio_sample = $('.audio_' + page);
			$('.audio_' + page).trigger('play');
			audio_sample.animate({volume: 1}, 1000, function () {
				muted = false;
			});
		};
		if ( page == 0 ) {
			$('.last').css('opacity','0');
			$('.last').addClass('cursor_ori');
		};
		if ( page == 7 ) {
			$('.next').css('opacity','1');
			$('.next').removeClass('cursor_ori');
		};
	});
	
	/* MUSIC CONTRAL */
	$('.mute').click(function(){
		var mute_data = $(this).data('mute');
		var audio_sample = $('.audio_' + mute_data);
		var button = $(this);
		if (!muted) {
			$('.mute').removeClass('play').removeClass('play_direct').addClass('pause');
			button.attr('disabled', '');
			audio_sample.animate( {volume: 0} , 1000, function () {
				muted = true;
				button.removeAttr('disabled', '');
			});
			setTimeout(function (){
				$('.audio_' + mute_data).trigger('pause');
			}, 1000);
		} else {
			$('.mute').removeClass('pause').removeClass('play_direct').addClass('play');
			$('.audio_' + mute_data).trigger('play');
			button.attr('disabled', '');
			audio_sample.animate({volume: 1}, 1000, function () {
				muted = false;
				button.removeAttr('disabled', '');
			});
		}
	});
});