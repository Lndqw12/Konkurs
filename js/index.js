/* Sidebar */
$(function() {
  $('.headerqq').click(function() {
    $('.headerqq').removeClass('active-tab');
    $(this).addClass('active-tab');
  });
});

/* Parallax */
$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.background').css('top',-(scrolled*0.2)+'px');
}