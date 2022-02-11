

//NOTE: scrollTop did not work when using "console.log($(document).scrollTop())"
//in console because in the bg class/id in the <main> element in HTML had a
//"position: fixed;" declaration which prevented this.  I had encountered the 
//same problem with the Bailey Lab website.  I had used position:fixed so the
//background remained fixed as the other elements of the document scrolled.
//Instead, I used "background-attachment: fixed;" which accomplished the same
//desired effect.

//Reveal header for MOBILE and TABLET//
$(document).ready(function(){
    // Below to keep header visible if page is refreshed/nav back and not top
    if ($(document).scrollTop() > 430) {
        $('#headerMT').addClass('show');
        $('#logoContainer').addClass('logoReveal');
    } else {
        $('#headerMT').removeClass('show');
        $('#logoContainer').removeClass('logoReveal');
    }
    // Above might not be best solution, but cannot think of another now

    $(document).scroll(function(){
        if ($(document).scrollTop() > 450) {
            $('#headerMT').addClass('show');
        } else {
            $('#headerMT').removeClass('show');
        }
    });

    //Below to keep logo in view if page is refreshed not at top (FULL)
    /*if ($(document).scrollTop() > 430) {
        $('#logoContainer').addClass('show');
    } else {
        $('#logoContainer').removeClass('show');
    }*/
    //Below will be used to have logo move into header in FULL
    $(document).scroll(function(){
        if ($(document).scrollTop() > 430) {
            $('#logoContainer').addClass('logoReveal');
        } else {
            $('#logoContainer').removeClass('logoReveal');
        }
    });
});
//use: console.log($('#logoContainer').css('left')); to get position

//THIS ALSO worked in console:
/*
$(document).ready(function() {
    var $left1 = $('#menuFULL').css('left');
    var $left2 = $('#logoContainer').css('left');
    console.log($left1, $left2);
});
*/
//MOBILE & TABLET Menu button action//
$(document).ready(function(){
    // opens menu
    $('#menuButton').on('click touch', function(){
    // Below is for dev purposes
        //$('#menu').addClass('menuOpen');
        $('#menu').toggleClass('menuOpen');
    // Attempt to collapse menuItem elements
        /*$('#menu').on('click touch', function(){
            $('.menuItem').each(function(i){
                if ($('#menu').hasClass('menuOpen'))
                setTimeout(function(){
                    $('.menuItem').css('animation','menu_collapse 2s ease-in forwards')
                }, i*200);
            });
        });*/
    });
    //closes menu after button in menu is clicked
    $('.menuItem','#menu').on('click touch', function(){
        $('#menu').toggleClass('menuOpen');
        /*$('.menuItem').each(function(i){
            if ($('#menu').hasClass('menuOpen'))
            setTimeout(function(){
                $('.menuItem').eq(i).css('animation','menu_collapse 2s ease-in forwards')
            }, i*200);
        });*/
        $('#menu').toggleClass('menuButtonOpen');
    });
});

//jquery.inview attempt 01
$(document).ready(function(){

    var $bar01 = $('#title01');
    var $bar02 = $('#title02');
    var $bar03 = $('#title03');
    var $bar04 = $('#title04');

    // might be able to remove "event" from all function parameters below
    // also, consider changing functs to arrow functions (seems to be more fluid and responsive)
    $bar01.on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar01.addClass('animation_final')
        } else {
          // element has gone out of viewport
        }
    });
    $bar02.on('inview', (event, isInView) => {
        if (isInView) {
          // element is now visible in the viewport
          $bar02.addClass('animation_final')
        } else {
          // element has gone out of viewport
        }
    });
    $bar03.on('inview', (event, isInView) => {
            if (isInView) {
                // element is now visible in the viewport
                $bar03.addClass('animation_final');
            } else {
                // element has gone out of viewport
            }
        });
    $bar04.on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar04.addClass('animation_final')
        } else {
          // element has gone out of viewport
        }
    });
});
    

//----------------------------------------------------------------//

//=============  Drop-downs for Services section when vw is less than 1000px ==//

$(document).ready(function() {
    var $details01 = $('#details01');
    var $details02 = $('#details02');
    var $details03 = $('#details03');
    var $details04 = $('#details04');
    var $details05 = $('#details05');
    var $service01 = $('.service_group01');
    var $service02 = $('.service_group02');
    var $service03 = $('.service_group03');
    var $service04 = $('.service_group04');
    var $service05 = $('.service_group05');

    $service01.on('click', function(){
        $details01.toggleClass('show_details');
    })
    $service02.on('click', function(){
        $details02.toggleClass('show_details');
    })
    $service03.on('click', function(){
        $details03.toggleClass('show_details');
    })
    $service04.on('click', function(){
        $details04.toggleClass('show_details');
    })
    $service05.on('click', function(){
        $details05.toggleClass('show_details');
    })

});

// WORKING CONTACT FORM VERIFICATION AND SUBMISSION (fr contact_test.js)
$(function(){
    var fA = 'focusActive';
    var lA = 'labelActive';
    var nameF = $('#nameField');
    var nL = $('#nameLabel');
    var nameC = $('.nameContainer');
    var emailF = $('#emailField');
    var emL = $('#emailLabel');
    var emailC = $('.emailContainer');
    var msgF = $('#messageField');
    var msgL = $('#messageLabel');
    var msgC = $('.messageContainer');
    var emailStr = emailF.val();
    var nameStr = nameF.val();
    var msgStr = msgF.val();
    
    if (nameStr != ''){
        nL.addClass(lA);
    };
    nameF.on('focus',function() {
        nameC.addClass(fA);
        nL.addClass(lA);
    });
    nameF.on('blur',function() {
        nameC.removeClass(fA);
        if (!nameF.val()) {
            nL.removeClass(lA);
        }
    });
    if (emailStr != ''){
        emL.addClass(lA);
    };
    emailF.on('focus',function() {
        emailC.addClass(fA);
        emL.addClass(lA);
    });
    emailF.on('blur',function() {
        emailC.removeClass(fA);
        if (!emailF.val()) {
            emL.removeClass(lA);
        }
    });
    if (msgStr != ''){
        msgL.addClass(lA);
    };
    msgF.on('focus',function() {
        msgC.addClass(fA);
        msgL.addClass(lA);
    });
    msgF.on('blur',function() {
        msgC.removeClass(fA);
        if (!msgF.val()) {
            msgL.removeClass(lA);
        }
    });
    $('.subB').on('focus focusin',function() {
        $('.submitButton').css({'outline':'1px solid blueviolet','outline-offset':'7px'});
    });
    $('.subB').on('blur focusout',function() {
        $('.submitButton').removeAttr('style');
    });

    // FORM VERIFICATION - SUBMISSION - ANIMATION
    // Wrote a unique regular expression using regexr website to test parameters
    var regex = new RegExp(/^\b[\w\.-]+@{1}[\w\.-]+\.\w{2,6}\b/i);
    function blankCheck() {
        if (emailF.val()!="" && nameF.val()!="" && msgF.val()!="") {
            alert('blankCheck PASS!!!');
        return true;
        } else {
            alert('BLANK FAIL!!!');
        return false;
        };
    };
    $(".contactForm").on('submit',function(e){
        function validateAll() {
            if (blankCheck() && regex.test(emailF.val())) {
                alert('vA PASS!!!');
                $('.subB').val("SENDING...");
    // ANIMATION BELOW
                $('.willChangeJQ').css("background-color","#B7ACCD");
                $('.submitButton').addClass("darken").removeAttr('style');
                $(".load_outline3").addClass("loading03");
                $(".load_outline2").addClass("loading02");
                $(".load_outline").addClass("loading01");
                setTimeout(function(){
    // Can't change below .blur() as it is more of a command
                    $('.subB').blur();
                }, 450);
                setTimeout(function(){
                    $(".subB").val("SENT");
    //Staggered input field exit animation- Jquery approach - tested and works
                    $("form > div").each(function(i){
                        setTimeout(function(){
                            $("form > div").slice(0,3).eq(i).css('animation','form_left 0.5s ease-in forwards')
                        }, i*60);
                    });
                    $('.submitButton').css('background-color','white');
                    $('.subB').css({'color':'#553692','font-size':'20pt','pointer-events':'none','cursor':'not-allowed'});
                }, 5000);
                setTimeout(function(){
                    $(".submitButton").removeClass("loading darken sent").css({'height':'30px','animation':'form_left 0.5s ease-in forwards'});
                }, 5700);
                setTimeout(function(){
                    $('.contactForm').css({'max-height':'35vh','background-color':'whitesmoke'});
                }, 6000);
                setTimeout(function(){
                    if ($(window).width() <= 770) {
                    $('.thankYou').css('animation','ty_left01 1s linear forwards');
                    } else {
                        $('.thankYou').css('animation','ty_left02 1s linear forwards');
                    }
                }, 6200);
                setTimeout(function(){
                    if ($(window).width() <= 770) {
                    $('.thankYou-sub').css('animation','ty_left01 1.2s ease-out forwards');
                    } else {
                        $('.thankYou-sub').css('animation','ty_left02 0.8s ease-out forwards');
                    }
                }, 6400);
            } else {
    //Below is to give test users feedback
                $('.submitButton').css({'background-color':'red'});
                alert('validateAll FAIL!!!');
            };
        };
        validateAll();
        $.when(validateAll).done(function(){
            e.preventDefault();
            var href = $('.contactForm').attr("action");
            $.ajax({
                type: "POST",
                dataType: "json",
                url: href,
                data: $('.contactForm').serialize(),
            });
        });
    });
});


// MOBILE UX - Button "touch" effect

//  Another MOBILE button UX approach in attempt to minimize code
// Previously written code for mobile button UX was 2894 chars - this one
// is only 2218 chars -- This was a 23.4% improvement! 20210217

$(function(){
    function resetNav(){
        var goTo = $(this).prop('href');

        //console.log($(this));
        setTimeout(function(){
            //console.log($(this));
            $('.button_fx').removeClass('clicked_fx');
            $('.button_text').removeClass('clicked_txt');
            $('a').removeClass('clicked');
            if ($(this).is('[id^="gh"]')){
                window.open(goTo) || window.location.replace(goTo);
                //alert('exactly!')
            } else {
                window.location.assign(goTo);
                //alert('not quite...')
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
    $('#c01').on('click touch', function(e){
        if ($(window).width() < 771) {
            e.preventDefault();
            console.log($(this));
            let boundUX = mobileUX.bind(this);
            boundUX();
        } else {
            return true;
        };
    })
    $('#c02').on('click touch', function(e){
        if ($(window).width() < 771) {
            e.preventDefault();
            console.log($(this));
            let boundUX = mobileUX.bind(this);
            boundUX();
        } else {
            return true;
        };
    })
    $('#gh00').on('click touch', function(e){
        if ($(window).width() < 771) {
            e.preventDefault();
            console.log($(this));
            let boundUX = mobileUX.bind(this);
            boundUX();
        } else {
            return true;
        };
    })
    $('#gh01').on('click touch', function(e){
        if ($(window).width() < 771) {
            e.preventDefault();
            console.log($(this));
            let boundUX = mobileUX.bind(this);
            boundUX();
        } else {
            return true;
        };
    })
    $('#gh02').on('click touch', function(e){
        if ($(window).width() < 771) {
            e.preventDefault();
            console.log($(this));
            let boundUX = mobileUX.bind(this);
            boundUX();
        } else {
            return true;
        };
    })

    // Below code might not be needed - should test in detail before final release
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
        console.log('This page was restored from the bfcache.');
        } else {
        console.log('This page was loaded normally.');
        };
    });
    
    window.addEventListener('unload', function () {});
})

//Graphic design portfolio item details pop-up window
$(function(){
    $('.more_info').on('click touch', function(event){
        event.preventDefault();
        //grow window from graphic, add viewport 100vw 100vh layer and darken all objects behind, lock scroll on viewport (behind new window)
        //fade in content and close button on top right corner
        //allow scroll in pop-up window only
        //content will include why and how portfolio item was created
    })
})
//  Button on portfolio page that starts and stops svg animation on items
$(function(){
    $('.start_stop_gmj').on('click touch', function(event){
        // Having an issue with page jumping around 300px up when clicked
        // I think it might have to do with methods fadeOut and In
        // try replacing them with fade or add class
        event.preventDefault();
        //$('html,body').stop();
        if ($(this).text() == 'start animation'){
            $(this).text("stop animation")
            $('.gmj_ph').fadeOut(400);
            //$('.gmj_ph').hide('scale',{percent:130},200);
        } else {
            $(this).text("start animation")
            $('.gmj_ph').fadeIn(400);
            //$('.gmj_ph').show('scale',{percent:130},200);
        };
        //$('.gmj_ph').fadeOut(200);
        //$('.portfolio_svg_anim').toggleClass('gmj_logo_hide');
        $('#mask line').toggleClass('gmj_a01');
        $('#eff, #shi').toggleClass('gmj_a02');
        $('#shi_cross, #eff_cross').toggleClass('gmj_a03')
        return false;
    })
})
// Kibou Button
// $(function(){
//     $('.start_stop_knj12').on('click touch', function(event){
//         event.preventDefault();
//         if ($(this).text() == 'start animation'){
//             $(this).text("stop animation")
//             $('.kanji_12_ph').fadeOut(400);
//         } else {
//             $(this).text("start animation")
//             $('.kanji_12_ph').fadeIn(400);
//             kanji_ichi();
//         };
//         function kanji_ichi(){
//             $('#kanji_1').css('display','block');
//             $('#mask11').toggleClass('knj11');
//             $('#mask12').toggleClass('knj12');
//             $('#mask13').toggleClass('knj13');
//             $('#mask14').toggleClass('knj14');
//             $('#mask15').toggleClass('knj15');
//             $('#mask16').toggleClass('knj16');
//             $('#mask17').toggleClass('knj17');
//             kanji_ni();
//         }
//         function kanji_ni(){
//             $('#mask21').toggleClass('knj21');
//             $('#mask22').toggleClass('knj22');
//             $('#mask23').toggleClass('knj23');
//             $('#mask24').toggleClass('knj24');
//             $('#mask25').toggleClass('knj25');
//             $('#mask26').toggleClass('knj26');
//             $('#mask27').toggleClass('knj27');
//             $('#mask28').toggleClass('knj28');
//             $('#mask29').toggleClass('knj29');
//             $('#mask210').toggleClass('knj210');
//             $('#mask211').toggleClass('knj211');
//             setTimeout(anim_done, 12100);
//         }
//         function anim_done(){
//             $('.start_stop_knj12').text("start animation")
//             $('.kanji_12_ph').fadeIn(400);
//             $('#kanji_1, #kanji_2').css('display','none');
//         }
//         kanji_ichi();
//         return false;
//     })
// })
// Kibou Button (not so complicated)
// Above code seeks to give control to end-user with start/stop animation button but also
// seeks to reset the cover graphic once animation is complete.  The below attempt will allow
// start/stop with button, but will not reset the cover graphic until the user presses the button
// also animation will run infinitely but need to perfect the timing of animations - maybe first draw
// of the first kanji remains up until the second kanji finishes or have both kanji draw simultaneously
// still need to add english definitions that grow from middle...

$(function(){
    $('.start_stop_knj12').on('click touch', function(event){
        // Having an issue with page jumping around 300px up when clicked
        // I think it might have to do with methods fadeOut and In
        // try replacing them with fade or add class
        event.preventDefault();
        if ($(this).text() == 'start animation'){
            $(this).text("stop animation")
            $('.kanji_12_ph').fadeOut(400);
        } else {
            $(this).text("start animation")
            $('.kanji_12_ph').fadeIn(400);
        };
        $('#mask11').toggleClass('knj11');
        $('#mask12').toggleClass('knj12');
        $('#mask13').toggleClass('knj13');
        $('#mask14').toggleClass('knj14');
        $('#mask15').toggleClass('knj15');
        $('#mask16').toggleClass('knj16');
        $('#mask17').toggleClass('knj17');
        $('#mask21').toggleClass('knj21');
        $('#mask22').toggleClass('knj22');
        $('#mask23').toggleClass('knj23');
        $('#mask24').toggleClass('knj24');
        $('#mask25').toggleClass('knj25');
        $('#mask26').toggleClass('knj26');
        $('#mask27').toggleClass('knj27');
        $('#mask28').toggleClass('knj28');
        $('#mask29').toggleClass('knj29');
        $('#mask210').toggleClass('knj210');
        $('#mask211').toggleClass('knj211');
        $('#def12').toggleClass('def_play');
        return false;
    })
})
$(function(){
    $('.start_stop_knj34').on('click touch', function(event){
        // Having an issue with page jumping around 300px up when clicked
        // I think it might have to do with methods fadeOut and In
        // try replacing them with fade or add class
        event.preventDefault();
        if ($(this).text() == 'start animation'){
            $(this).text("stop animation")
            $('.kanji_34_ph').fadeOut(400);
        } else {
            $(this).text("start animation")
            $('.kanji_34_ph').fadeIn(400);
        };
        $('#mask31').toggleClass('knj31');
        $('#mask32').toggleClass('knj32');
        $('#mask33').toggleClass('knj33');
        $('#mask34').toggleClass('knj34');
        $('#mask35').toggleClass('knj35');
        $('#mask36').toggleClass('knj36');
        $('#mask37').toggleClass('knj37');
        $('#mask38').toggleClass('knj38');
        $('#mask39').toggleClass('knj39');

        $('#mask41').toggleClass('knj41');
        $('#mask42').toggleClass('knj42');
        $('#mask43').toggleClass('knj43');
        $('#mask44').toggleClass('knj44');
        $('#mask45').toggleClass('knj45');
        $('#mask46').toggleClass('knj46');

        $('#def34').toggleClass('def_play');
        return false;
    })
})
// Delete below before going live 
// These are written here to see color format patterns
// Possible h1 portfolio intro headings

let Nick_Moore = ["your", "new", "employee"];

$(function(Nick_Moore) {
    var $bottom = scroll();
    window.on(scroll, function(hire) {
        if ($bottom == 0) {
            hire
            $(yourTeam).append(employees[Nick_Moore])
        }
    })
})

