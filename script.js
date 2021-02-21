

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
    if ($(document).scrollTop() > 450) {
        $('#headerMT').addClass('show');
    } else {
        $('#headerMT').removeClass('show');
    }
    // Above might not be best solution, but cannot think of another now

    $(document).scroll(function(){
        if ($(document).scrollTop() > 450) {
            $('#headerMT').addClass('show');
        } else {
            $('#headerMT').removeClass('show');
        }
    });
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
        $('#menu').toggleClass('menuOpen');
    });
    //closes menu after button in menu is clicked
    $('.menuItem').on('click', function(){
        $('.menuClosed').removeClass('menuOpen');
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
    $bar01.on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar01.addClass('animation_final')
        } else {
          // element has gone out of viewport
        }
    });
    $bar02.on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar02.addClass('animation_final')
        } else {
          // element has gone out of viewport
        }
    });
    $bar03.on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar03.addClass('animation_final')
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