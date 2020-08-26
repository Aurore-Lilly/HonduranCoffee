$(function(){ /* to make sure the script runs after page load */

  function readMoreLessPara(initiallyVisibileChars) {

    let visibleChars = initiallyVisibileChars;
    let getText = $('.readMoreInit');
    getText.each(function(){
      let text = $(this).text();
      let completeText = text.slice(0, initiallyVisibileChars) + "<span class='ellipses'>... </span><br class='new-line'><a href='#' class='btn-link more'>Read more</a>" +"<span class='more-para-text' style='display: none;'>"+text.slice(initiallyVisibileChars, text.length)+"<br><a href='#' class='btn-link less'>Read less</a></span>"

      if(text.length < visibleChars) {
        return
      } else {
        $(this).html(completeText)
      }
    });
    $('.more').on('click', function(e){
      e.preventDefault();
      $(this).hide().prev('.new-line').hide().prev('.ellipses').hide();
      $(this).next('.more-para-text').show();
    })

    $('.less').on('click', function(e){
      e.preventDefault();
      $(this).parent('.more-para-text').hide().prev('.more').show().prev('.new-line').show().prev('.ellipses').show();
    })
  }

  readMoreLessPara(400);

});
