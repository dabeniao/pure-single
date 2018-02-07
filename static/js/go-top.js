var $top = $('.go-top');

// Show or hide the sticky footer button
$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $top.fadeIn(200);
  } else {
    $top.fadeOut(200);
  }
});

// Animate the scroll to top
$top.click(function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 300);
})

// Makes sure that the href="#" attached to the <a> elements
// don't scroll you back up the page.
$('body').on('click', 'a[href="#"]', function(event) {
  event.preventDefault();
});
