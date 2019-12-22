$('a').on('click', function(event){
  if (this.hash !==''){
    event.preventDefault();

    const hash = this.hash;

    if ($(window).width() <= 850) {
      $('html, body').animate(
        {scrollTop: $(hash).offset().top},
        800
      );
  
      $('.toggler').prop('checked', false);
    } else {
          $('html, body').animate(
            {scrollTop: $(hash).offset().top - 57},
            800
          );

          $('.toggler').prop('checked', false);
        }
      }
    }
    );

$(function() {
	$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
	
	$(".accordion > .accordion-item").click(function() {
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});
});