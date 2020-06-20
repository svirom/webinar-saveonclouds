$(document).ready(function() {

  // link on homepage header
  $(".btn-top").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });

  // Video Button
	$(document).on("click", ".button-wrapper .play-button", function() {
		var $video = $(this).closest('.video-wrapper-inner').find('.iframe-wrapper iframe');
		var src = $video.attr('src');
		var buttonWrapper = $(this).closest('.video-wrapper-inner').find('.button-wrapper');

		$video.attr('src', src + '&autoplay=1');
		buttonWrapper.css("display", "none");
	});

})