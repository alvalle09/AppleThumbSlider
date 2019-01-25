
$(document).ready(function(){
    let totalWidth = 0;
    let positions = new Array();

    $('#slides .slide').each(function(i) {
        positions[i] = totalWidth;
        totalWidth += $(this).width();

        if( !$(this).width()) {
            alert('Please add width to images');
            return false;
        }
    });

    $('#slides').width(totalWidth);

    $('#menu ul li a').click(function(e, keepScroll){
        // Remove active class and add inactive
        $('li.product').removeClass('active').addClass('inactive');
        // add active class to parent
        $(this).parent().addClass('active');
        var pos = $(this).parent().prevAll('.product').length;

        $('#slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);

        e.prevenDefault;

        // stop autoscroll
        if(!autoScroll) clearInterval(itvl);

    })




})