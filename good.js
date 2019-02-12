$('#menu ul li a').click(function(e, keepScroll){
    // Remove active class and add inactive
    $('li.product').removeClass('active').addClass('inactive');
    // Add active class to parent
    $(this).parent().addClass('active');
    
    var pos  = $(this).parent().prevAll('.product').length;
    
    $('#slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);
    
    // Prevent default
    e.preventDefault();
    
    // Stop autoscroll
    if(!autoScroll) clearInterval(itvl);
});
