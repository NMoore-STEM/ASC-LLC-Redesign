$(document).ready(function(){
    // opens menu (in mobile)
    $('#menuButton,.menuItem').on('click touch', function(){
        $('#menu').toggleClass('menuOpen');
    });
});

/////   MOBILE UX - Button "touch" effect
//  Another MOBILE button UX approach in attempt to minimize code
// Previously written code for mobile button UX was 2894 chars - this one
// is only 2218 chars -- This was a 23.4% improvement! 20210217
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
///////  20221013 added all button classes in one function
//       to DRY up code - seems to work as intended
//     Refactored 50 lines to 10
    $('#c01,#c02,#gh00,#gh01,#gh02').on('click touch', function(e){
        if ($(window).width() < 771) {
            e.preventDefault();
            console.log($(this));
            let boundUX = mobileUX.bind(this);
            boundUX();
        } else {
            return true;
        };
    })
    // Testing for back-forward cache
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
        console.log('This page was restored from the bfcache.');
        } else {
        console.log('This page was loaded normally.');
        };
    });
    window.addEventListener('unload', function () {});
})
///////////////////////////////////
//////   portfolio modals    //////
//////     --Cleaned up--    //////
///////////////////////////////////
$(function(){
    var mScr = $('.modal_screen');
        sRst = $('.g_modal');
        sRst2 = $('.modal_scroll');
        xModal = $('.close_modal');
    $('.more_info').on('click touch', function(event){
        event.preventDefault();
        // Below to establish coordinates for click location
        var x, y;
            x = event.pageX;
            y = event.pageY;
        console.log(x,y);
        //end coordinates code
        mScr.addClass('m_screen_open m_screen_fade');
        mScr.css({ 'display':'block','visibility':'visible'} );
        setTimeout(function(){
            sRst.addClass('g_modal_open');
        },100);
        setTimeout(function(){
            xModal.addClass("show_close");
            // Below is for shifting tabindex flow on modal open 20221025
            $('.home_link,#menuFULL>a,.contactButton,#asc_img,#lab_img,.port_button,.svg_play_button,footer a,.modal_scroll').attr('tabindex','-1');
        },400);
        $('body, html').css('overflow-y', 'hidden');
    });
    xModal.on('click touch', function(event){
        event.preventDefault();
        sRst2.scrollTop(0);
        $('body, html').css('overflow-y', 'auto');
        $(this).removeClass('show_close');
        sRst.removeClass('g_modal_open');
        // Below is to restore tabindex to main page after closing modal
        $('.home_link,#menuFULL>a,.contactButton,#asc_img,#lab_img,.port_button,.svg_play_button,footer a').removeAttr('tabIndex');
        sRst.one('transitionend', function(e){
            mScr.removeClass('m_screen_fade').one('transitionend', function(){
                console.log('!!! innermost');
            }).off(e);
            function hideModal() {
                // mScr.css({ 'display':'none','visibility':'hidden'}).removeClass('m_screen_open').off(e);
                mScr.hide().removeClass('m_screen_open').off(e);
                // Added below to hide item-specific content after open
                $('.modal_content_00, .modal_content_01').hide();
                // $('.modal_content_00, .modal_content_01').removeClass('m_show');
                console.log('new function');
            }
            setTimeout(hideModal,175);
            console.log('mid level');
        })
        console.log('top level');
    });
    
});

// Array index experiment to load associated content
$(function(){
    var mBttn = $('.more_info');
        cBttn = $('.mobile_info');
    for(let l=0;l<mBttn.length;l++){
        mBttn.on('click',function(){
            var l = mBttn.index(this);
            console.log('l:'+l);
            $('.modal_content_0'+l).show();
        });
        return false
    };

    //// === Below moved/nested under a singular .on('click') for MOBILE

    // for(let m=0;m<cBttn.length;m++){
    //     cBttn.on('click',function(){
    //         var m = cBttn.index(this);
    //         console.log('m:'+m);
    //         $('.modal_content_0'+m).show();
    //         // $('.modal_content_0'+m).addClass('m_show');            
    //     });
    //     return false
    // }
});
////////////////////////////////////////////////////////////////
//         MOBILE version                                     //
//   **Create new button that:                                //
//     - Locks current scroll position of document (and       //
//       disables)                                            //
//     - Moves entire document to left (off-screen/out of     //
//       viewport)                                            //
//     - Slides in modal content from right side (takes up    //
//       entire viewport)                                     //
//     - Enables scroll on modal content (only)               //
//   **ALTERNATIVELY                                          //
//     - Lock document scroll position                        //
//     - Move in modal content from right (off screen), and   //
//       on top layer/z-index of document                     //
//     - Top of modal will be determined of current scroll    //
//       position when the "more info" button is clicked
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
$(function(){
    var cBttn = $('.mobile_info');
    // cBttn.on('click touch', function(event){
    //     event.preventDefault();
    //     $('body, html').css('overflow-y', 'hidden');
    //     $('.modal_screen').addClass('m_s_o_mobile');
    //     //=== below new on 20221104
    //     $('#headerMT').addClass('headerMT_modal');
    //     $('.head_flex').addClass('mobile_modal');
    //     $('#menuButton').addClass('mb_modal_open');
    //     $('.home_link').removeAttr('href');

        for(let m=0;m<cBttn.length;m++){
            cBttn.on('click',function(){
                var m = cBttn.index(this);
                    // targetContent = $('.modal_content_0'+m);
                $('body, html').css('overflow-y', 'hidden');
                $('.modal_screen').addClass('m_s_o_mobile');
                $('#headerMT').addClass('headerMT_modal');
                $('.head_flex').addClass('mobile_modal');
                $('#menuButton').addClass('mb_modal_open');
                $('.home_link').removeAttr('href');
                console.log('m:'+m);
                // $('.modal_content_0'+m).show();

                // $('.modal_content_0'+m).removeAttr('display');

                $('.modal_content_0'+m).addClass('m_show');

                // targetContent.show();
                // $('.modal_content_0'+m).addClass('m_show');            
            });
            return false
        }
        // Below is to prevent unwanted page jumping after click
        return false;
    // })
});
$(function(){
    $('.close_mobile').on('click touch', function(event){
        event.preventDefault();
        $('.home_link').attr('href','#');
        $('body, html').css('overflow-y', 'scroll');
        $('.modal_screen').removeClass('m_s_o_mobile').one('transitionend', function(e){
            $('.modal_scroll').scrollTop(0,0);
            // $('.modal_content_00, .modal_content_01').hide();
            $('.modal_content_00, .modal_content_01').removeClass('m_show');
        })
        //=== new on 20221104
        $('#headerMT').removeClass('headerMT_modal');
        $('.head_flex').removeClass('mobile_modal');
        $('#menuButton').removeClass('mb_modal_open');

    })
});
//  Button on portfolio page that starts and stops svg animation on items
$(function(){
    $('.start_stop_gmj').on('click touch', function(event){
        event.preventDefault();
        if ($(this).text() == 'start animation'){
            $(this).text("stop animation")
            $('.gmj_ph').fadeOut(400);
        } else {
            $(this).text("start animation")
            $('.gmj_ph').fadeIn(400);
        };
        $('#mask line').toggleClass('gmj_a01');
        $('#eff, #shi').toggleClass('gmj_a02');
        $('#shi_cross, #eff_cross').toggleClass('gmj_a03')
        // Below to keep page from jumping on click
        return false;
    })
})
//////////////////////////////////////////////////////////
//          Original kanji12 button and animation  //
/////////////////////////////////////////////////////
$(function(){
    $('.start_stop_knj12').on('click touch', function(event){
        event.preventDefault();
        if ($(this).text() == 'start animation'){
            $(this).text("stop animation")
            $('.kanji_12_ph').fadeOut(400);
        } else {
            $(this).text("start animation")
            $('.kanji_12_ph').fadeIn(400);
        };
        mask1();
        mask2();
        $('#def12').toggleClass('def_play');
        // Below to keep page from jumping on click
        return false;
    })
})
/////////   Modular functions for kanji12  /////////
// refactored above code from 18 lines to 14 lines //
function mask1(){
    var msk1 = $('[id^="mask1"]');
    for(let a=1;a<msk1.length+1;a++){
        $('#mask1'+a).toggleClass('knj1'+a);
    }
}
function mask2(){
    var msk2 = $('[id^="mask2"]');
    for(let b=1;b<msk2.length+1;b++){
        $('#mask2'+b).toggleClass('knj2'+b);
    }
}
// Kanji 34 button script
$(function(){
    $('.start_stop_knj34').on('click touch', function(event){
        event.preventDefault();
        if ($(this).text() == 'start animation'){
            $(this).text("stop animation")
            $('.kanji_34_ph').fadeOut(400);
        } else {
            $(this).text("start animation")
            $('.kanji_34_ph').fadeIn(400);
        };
        mask3();
        mask4();
        $('#def34').toggleClass('def_play');
        // Below to keep page from jumping on click
        return false;
    })
})
//////    Modular functions for kanji34    ////////
// refactored 15 lines to a DRY 14 lines         //
function mask3(){
    var msk3 = $('[id^="mask3"]');
    for(let c=1;c<msk3.length+1;c++){
        $('#mask3'+c).toggleClass('knj3'+c);
    }
}
function mask4(){
    var msk4 = $('[id^="mask4"]');
    for(let d=1;d<msk4.length+1;d++){
        $('#mask4'+d).toggleClass('knj4'+d);
    }
}
///////  For iFrame refresh concentric circles /////
$(function(){
    var iframe = $('.circle_iframe')
    $('#iframeRefresh').on('click touch', function(){
        iframe.attr("src", iframe.attr("src"));
    })
});

// These are written here to see color format patterns
// Possible h1 portfolio intro headings

let Nick_Moore = ["your", "new", "employee"];