$(document).ready(function(){
// MOBILE header menu
    $('#menuButton,.menuItem').on('click', function(){
        $('#menu').toggleClass('menuOpen');
    });
});
/////   MOBILE UX - Button "touch" effect
// Previously written code for mobile button UX was 2894 chars - this one
// is only 2218 chars -- This was a 23.4% improvement
$(function(){
    // Function that delays page nav on click/touch to 
    // allow button UX feedback animation to complete
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
    //  GitHub button click listener
    //  Refactored 50 lines to 9
    $('#gh02').on('click', function(e){
        if ($(window).width() < 771) {
            e.preventDefault();
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
})
////  Portfolio Modals
$(function(){
    var mScr = $('.modal_screen');
        sRst = $('.g_modal');
        sRst2 = $('.modal_scroll');
        xModal = $('.close_modal');
    $('.more_info').on('click', function(event){
        event.preventDefault();
        mScr.addClass('m_screen_open m_screen_fade');
        mScr.css({ 
            'display':'block',
            'visibility':'visible'
        } );
        setTimeout(function(){
            sRst.addClass('g_modal_open');
        },100);
        setTimeout(function(){
            xModal.addClass("show_close");
            // tabindex flow reassignment on modal open
            $('.home_link,#menuFULL>a,.ghButton,#asc_img,#lab_img,.port_button,.svg_play_button,footer a,.modal_scroll').attr('tabindex','-1');
        },400);
        $('body, html').css('overflow-y', 'hidden');
    });
    xModal.on('click', function(event){
        event.preventDefault();
        sRst2.scrollTop(0);
        $('body, html').css('overflow-y', 'auto');
        $(this).removeClass('show_close');
        sRst.removeClass('g_modal_open');
        // restore tabindex to main page after closing modal
        $('.home_link,#menuFULL>a,.ghButton,#asc_img,#lab_img,.port_button,.svg_play_button,footer a').removeAttr('tabIndex');
        sRst.one('transitionend', function(e){
            mScr.removeClass('m_screen_fade').one('transitionend', function(){
            }).off(e);
            function hideModal() {
                mScr.hide().removeClass('m_screen_open').off(e);
                // Added below to hide item-specific content after open
                $('.modal_content_00, .modal_content_01').hide();
            }
            setTimeout(hideModal,175);
        })
    });
});
// Full resolution modal buttons - open modal
$(function(){
    var mBttn = $('.more_info');
    // shows modal content based on which button is clicked on page
    for(let l=0;l<mBttn.length;l++){
        mBttn.on('click',function(){
            var l = mBttn.index(this);
            console.log('l:'+l);
            $('.modal_content_0'+l).show();
        });
        return false
    };
});
// MOBILE resolution modal buttons - open modal
$(function(){
    var cBttn = $('.mobile_info');
    // shows modal content based on which button is clicked on page
    for(let m=0;m<cBttn.length;m++){
        cBttn.on('click',function(){
            var m = cBttn.index(this);
            $('body, html').css('overflow-y', 'hidden');
            $('.modal_screen').addClass('m_s_o_mobile');
            $('#headerMT').addClass('headerMT_modal');
            $('.close_mobile').toggleClass('mobile_close_initial');
            setTimeout(modalCloseIn,400);
            $('.head_flex').addClass('mobile_modal');
            $('#menuButton').addClass('mb_modal_open');
            $('.home_link').removeAttr('href');
            console.log('m:'+m);
            $('.modal_content_0'+m).addClass('m_show');      
        });
        // prevent page jump and double-fire
        return false
    }
});
function modalCloseIn(){
    $('.close_mobile').toggleClass('show_mobile_close');
}
$(function(){
    // to close modal in MOBILE resolution only
    $('.close_mobile').on('click', function(event){
        event.preventDefault();
        $('.home_link').attr('href','#');
        $('body, html').css('overflow-y', 'scroll');
        $('.close_mobile').toggleClass('mobile_close_initial');
        setTimeout(modalCloseIn,300);
        $('.modal_screen').removeClass('m_s_o_mobile').one('transitionend', function(e){
            $('.modal_scroll').scrollTop(0,0);
            $('.modal_content_00, .modal_content_01').removeClass('m_show');
        })
        $('#headerMT').removeClass('headerMT_modal');
        $('.head_flex').removeClass('mobile_modal');
        $('#menuButton').removeClass('mb_modal_open');

    })
});
//  Button on portfolio page that starts and stops svg animation on items
$(function(){
    $('.start_stop_gmj').on('click', function(event){
        event.preventDefault();
        if ($(this).text() == "start animation"){
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
//  Kanji12 button and animation
$(function(){
    $('.start_stop_knj12').on('click', function(event){
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
//  Modular functions for kanji12  /////////
// refactored code from 18 lines to 14 lines //
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
    $('.start_stop_knj34').on('click', function(event){
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
//  Modular functions for kanji34
//  refactored 15 lines to a DRY 14 lines
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
//  For iFrame refresh concentric circles
$(function(){
    var iframe = $('.circle_iframe')
    $('#iframeRefresh').on('click', function(){
        iframe.attr("src", iframe.attr("src"));
    })
});
// Hero statement code
// with this stated here, one can type: "alert(Nick_Moore)"
// or "console.log(Nick_Moore)" to see the array displayed
let Nick_Moore = ["your", "new", "employee"];