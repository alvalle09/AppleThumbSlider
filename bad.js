$('#menu ul li a').click(function(e, keepScroll){
    // Remove active class and add inactive
    $('li.product').removeClass('active').addClass('inactive');
    // add active class to parent
    $(this).parent().addClass('active');
    var pos = $(this).parent().prevAll('.product').length;

    $('#slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);

    // prevent default action of anchor link
    e.prevenDefault;

    // stop autoscroll
    if(!autoScroll) clearInterval(itval);

});