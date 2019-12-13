$('a').on('click', function(event){
  if (this.hash !==''){
    event.preventDefault();

    const hash = this.hash;
    
    $('html, body').animate(
      {scrollTop: $(hash).offset().top - 50},
      800
    );

    $('.toggler').prop('checked', false);
  }
});

$(function() {
	$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
	
	$(".accordion > .accordion-item").click(function() {
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});
});