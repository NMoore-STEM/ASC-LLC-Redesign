$(document).ready(function(){
// Below to keep header logo visible if page is refreshed/nav back and not top
    if ($(document).scrollTop() > 430) {
        $('#headerMT').addClass('show');
        $('#logoContainer').addClass('logoReveal');
    } else {
        $('#headerMT').removeClass('show');
        $('#logoContainer').removeClass('logoReveal');
    }
// Scroll listener to bring logo into nav header when scrolling away from splash
    $(document).on('scroll', function(){
        if ($(document).scrollTop() > 430) {
            $('#headerMT').addClass('show');
            $('#logoContainer').addClass('logoReveal');
        } else {
            $('#headerMT').removeClass('show');
            $('#logoContainer').removeClass('logoReveal');
        }
    });
// opens menu in mobile resolution
    $('#menuButton,.menuItem').on('click', function(){
        $('#menu').toggleClass('menuOpen');
    });
//  ASC section title bar scroll animation
//  Refactored: from 31 lines to 7
    $(function(){
        for (let i=0; i<5; i++) {
            $('#title0'+i).one('inview', function(){
                $(this).addClass('animation_final')
            });
        }
    });
//  "Why" section core values animation
    $(function(){
        var $inner = $('#coreInternal');
            $coreLi = $('#coreInternal li')
            $trigger = $('#coreTrigger')
// changed below to ".one()" instead of ".on()"
//  this will prevent the event from happening every
// time the element is scrolled into view
        $trigger.one('inview', function(isInView) {
            if (isInView) {
                setTimeout(function(){
                    $inner.addClass('coreFinal');
                },100);
                setTimeout(function(){
                    $coreLi.each(function(i){
                        setTimeout(function(){
                            $coreLi.slice(0).eq(i).addClass('finalLi')
                        }, i*250);
                    });
                },500)
            } else {}
        });
    });
    $(function(){
        for(let j=0;j<6;j++){
            $('.service_group0'+j).on('click',function(){
                $('#details0'+j).toggleClass('show_details')
            });
        }
    });
//  MOBILE resolution button behavior
// Previously written code for mobile button UX was 2894 characters
// now only 2218 chars - 23.4% improvement
    $(function(){
        function resetNav(){
            var goTo = $(this).prop('href');
            setTimeout(function(){
                $('.button_fx').removeClass('clicked_fx');
                $('.button_text').removeClass('clicked_txt');
                $('a').removeClass('clicked');
                if ($(this).is('[id^="gh"]')){
                    window.open(goTo) || window.location.replace(goTo);
                } else {
                    window.location.assign(goTo);
                }
            }.bind(this), 700)
        }
        function mobileUX() {
            let boundNav = resetNav.bind(this);
            $(this).addClass('clicked');
            $(this).find('.button_fx').addClass('clicked_fx');
            $(this).find('.button_text').addClass('clicked_txt');
            boundNav();
        }
        //  Combined all button ids in one function to DRY up code
        //  Refactored 50 lines to 10
        $('#c01,#c02').on('click', function(e){
            if ($(window).width() < 771) {
                e.preventDefault();
                let boundUX = mobileUX.bind(this);
                boundUX();
            } else {
                return true;
            };
        })
    });
// Below is to give feedback as to if the page was loaded from cache or fresh reload
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
        console.log('This page was restored from the bfcache.');
        } else {
        console.log('This page was loaded normally.');
        };
    });
    // window.addEventListener('unload', function () {});
});