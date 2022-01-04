//naruto
$(document).ready(function() {
    var winh = $(window).height();
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        $(".scrollable").each(function() {
            var parent_pos = $(this).parent().offset().top;
            var next_pos = parent_pos + $(this).parent().height();
            var parent_scrolled = scrolled - $(this).parent().offset().top;
            if (parent_scrolled > 0 && scrolled < next_pos - winh) {

                if ($(this).attr("data-left")) {
                    $(this).css('left', (($(this).data('left2') - $(this).data('left')) * parent_scrolled / winh + $(this).data('left')) + '%');
                }
                if ($(this).attr("data-top")) {
                    $(this).css('top', (($(this).data('top2') - $(this).data('top')) * parent_scrolled / winh + $(this).data('top')) + '%');
                }
                if ($(this).attr("data-width")) {
                    $(this).css('width', (($(this).data('width2') - $(this).data('width')) * parent_scrolled / winh + $(this).data('width')) + '%');
                }
            }
        });
    });//end of win scroll
});

//novel
$(document).ready(function() {
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        var winh = $(window).height();
        $(".scrollable").each(function() {
            var parent_pos = $(this).parent().offset().top;
            var next_pos = $(this).parent().next().offset().top;
            var parent_height = $(this).parent().height();
            var parent_scrolled = scrolled - parent_pos + winh * 0.25;

            if ($(this).parent().hasClass("horizontal")) {
                if ($(this).attr("data-left1")) {
                    $(this).css('transform', "translateX(" + (($(this).data('left2') - $(this).data('left1')) * parent_scrolled / parent_height + $(this).data('left1')) + 'vw)');
                }

            } else {
                if (scrolled > parent_pos - winh * 0.25 && scrolled < next_pos - winh * 0.25) {

                    if ($(this).attr("data-left1")) {
                        $(this).css('left', (($(this).data('left2') - $(this).data('left1')) * parent_scrolled / parent_height + $(this).data('left1')) + '%    ');
                    }
                    if ($(this).attr("data-top1")) {
                        $(this).css('top', (($(this).data('top2') - $(this).data('top1')) * parent_scrolled / parent_height + $(this).data('top1')) + '%');
                    }
                    if ($(this).attr("data-width1")) {
                        $(this).css('width', (($(this).data('width2') - $(this).data('width1')) * parent_scrolled / parent_height + $(this).data('width1')) + '%');
                    }
                    if ($(this).attr("data-height1")) {
                        $(this).css('height', (($(this).data('height2') - $(this).data('height1')) * parent_scrolled / parent_height + $(this).data('height1')) + '%');
                    }
                    if ($(this).attr("data-bottom1")) {
                        $(this).css('bottom', (($(this).data('bottom2') - $(this).data('bottom1')) * parent_scrolled / parent_height + $(this).data('bottom1')) + '%');
                    }
                }

            }

        });
        //                console.log($("#testing").offset().left/$(window).width());
    });
});