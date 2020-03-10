$('.gallery div.item a').click(function() {
  var itemID = $(this).attr('href');
  $('.gallery div.item').addClass('item_open');
  $(itemID).addClass('item_open');
  return false;
});

$('.close').click(function() {
  $('.port, .gallery div.item').removeClass('item_open');
  return false;
});
$('.close-btn').click(function() {
  $('.port, .gallery div.item').removeClass('item_open');
  return false;
});

$(".gallery div.item a").click(function() {
  $('html, body').animate({
    scrollTop: parseInt($("#top").offset().top)
  }, 400);
});