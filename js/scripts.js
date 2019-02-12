
$(document).ready(function(){
    let totalWidth = 0;
    let positions = new Array();

    $('#slides .slide').each(function(i) {
        positions[i] = totalWidth;
        totalWidth += $(this).width();

        if (!$(this).width()) {
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

        // prevent default action of anchor link
        e.prevenDefault;

        // stop autoscroll
        if(!autoScroll) clearInterval(itval);

    });

    //make first image active
    $('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');
    
    //Auto scroll
    let current = 1;

    function autoScroll() {
        if(current == -1 ) return false;

        $('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click', [true]);
        current++;
    }

    // duration for auto-scroll
    let duration = 2;
    let itval = setInterval(function() { autoScroll() }, duration * 1000);

})