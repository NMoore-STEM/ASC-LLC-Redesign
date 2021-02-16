

//NOTE: scrollTop did not work when using "console.log($(document).scrollTop())"
//in console because in the bg class/id in the <main> element in HTML had a
//"position: fixed;" declaration which prevented this.  I had encountered the 
//same problem with the Bailey Lab website.  I had used position:fixed so the
//background remained fixed as the other elements of the document scrolled.
//Instead, I used "background-attachment: fixed;" which accomplished the same
//desired effect.

//Reveal header for MOBILE and TABLET//
$(document).ready(function(){
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

    // New working jquery for MOBILE button UX
$(function(){
    
    function resetNav(){
        //var goTo = $(this).attr('href');
        var goTo = $('#gh01').prop('href');
        console.log($('#gh01').attr('href'))
        //var this1 = document.activeElement;

        //might be able to make use of function.apply(thisObj, [array])
        //to pass on "this" rather than return this...
        // resetNav.apply(document.activeElement);
        // above code led to "too much recursion", basically called itself into an endless loop

        setTimeout(function(){
            console.log($(this));
            $('.button_fx').removeClass('clicked_fx');
            $('.button_text').removeClass('clicked_txt');
            $('a').removeClass('clicked');
            //window.open('https://github.com/NMoore-STEM','_blank') || window.location.replace(goTo);
            window.open(goTo) || window.location.replace(goTo);
            //window.location = goTo;
        }, 700)
        console.log($(this));
        return this;
    }
    $('#gh01').on('click touch', function(e){
        var goTo = $(this).attr('href');

        e.preventDefault();
        if ($(window).width() < 771) {
            // Prevent button from going instantly to href
            e.preventDefault();
            // For dev purposes
            console.log(document.activeElement);
            //
            $(this).addClass('clicked');
            $(this).find('.button_fx').addClass('clicked_fx');
            $(this).find('.button_text').addClass('clicked_txt');
            window.location.href = goTo;
            
        } else {
            return true;
        }
    });
    //$('#c01').on('click touch', mobileUXC);
    /*$('#c01').on('click touch', function(e){
        var goTo = $(this).attr('href');
    
        //navAnim();
        if ($(window).width() < 771) {
        // Prevent button from going instantly to href
            e.preventDefault();
            // For dev purposes
            console.log(document.activeElement);
            //
            $(this).addClass('clicked');
            $(this).find('.button_fx').addClass('clicked_fx');
            $(this).find('.button_text').addClass('clicked_txt');
            resetNavC();
        } else {
            // This is for all ".contactButton" at vw > MOBILE
            return true;
        };
    });*/
    $('#c02').on('click touch', function(e){
        var goTo = $(this).attr('href');
    
        if ($(window).width() < 771) {
            e.preventDefault();
            // For dev purposes
            console.log(document.activeElement);
            //
            $(this).addClass('clicked');
            $(this).find('.button_fx').addClass('clicked_fx');
            $(this).find('.button_text').addClass('clicked_txt');
            setTimeout(function(){
                $('.button_fx').removeClass('clicked_fx');
                $('.button_text').removeClass('clicked_txt');
                $('#gh01').removeClass('clicked');
                window.open(goTo, "_blank") || window.location.replace(goTo);
            }, 700)
        } else {
            return true;
        };
    });
    $('#r01').on('click touch', function(e){
        var goTo = $(this).attr('href');
    
        if ($(window).width() < 771) {
            e.preventDefault();
            // For dev purposes
            console.log(document.activeElement);
            //
            $(this).addClass('clicked');
            $(this).find('.button_fx').addClass('clicked_fx');
            $(this).find('.button_text').addClass('clicked_txt');
            setTimeout(function(){
                $('.button_fx').removeClass('clicked_fx');
                $('.button_text').removeClass('clicked_txt');
                $('#gh01').removeClass('clicked');
                window.open(goTo, "_blank") || window.location.replace(goTo);
            }, 700)
        } else {
            // This is for all ".contactButton" at vw > MOBILE
            return true;
        };
    });
    /*$('#gh01').on('click touch', function(e){
        var goTo = $(this).attr('href');
    
        if ($(window).width() < 771) {
        // Prevent button from going instantly to href
            e.preventDefault();
            // For dev purposes
            console.log(document.activeElement);
            //
            $(this).addClass('clicked');
            $(this).find('.button_fx').addClass('clicked_fx');
            $(this).find('.button_text').addClass('clicked_txt');
            setTimeout(function(){
                //$(this).find('.button_fx').removeClass('clicked_fx');
                //$(this).find('.button_text').removeClass('clicked_txt');
                //$(this).removeClass('clicked');
                $('.button_fx').removeClass('clicked_fx');
                $('.button_text').removeClass('clicked_txt');
                $('#gh01').removeClass('clicked');
                // Not sure about below line - trying to get new tab to open on click
                window.open(goTo, "_blank") || window.location.replace(goTo);
            }, 700)
        } else {
            // This is for all ".contactButton" at vw > MOBILE
            return true;
        };
    });*/
    $('#gh02').on('click touch', function(e){
        //var goTo = $(this).attr('href');
    
        if ($(window).width() < 771) {
        // Prevent button from going instantly to href
            e.preventDefault();
            // For dev purposes
            console.log(document.activeElement);
            //console.log(this);
            console.log($(this));
            // trying to make sure "this" is what I intend
            //resetNav.apply(document.activeElement);

            $(this).addClass('clicked');
            $(this).find('.button_fx').addClass('clicked_fx');
            $(this).find('.button_text').addClass('clicked_txt');
        // Problem within resetNav() function - (this) is not reffering
        // to the <a> element once resetNav() runs... 20210215
        // Just opens another blank page in new tab/window, but
        // class reset works fine
            resetNav();
            return this;
        } else {
            // This is for all ".contactButton" at vw > MOBILE
            return true;
        };
        console.log($(this));
        return this;
    });
        // For testing bfcache status in console log
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
        console.log('This page was restored from the bfcache.');
        } else {
        console.log('This page was loaded normally.');
        };
    });
    /*window.onpageshow = function (event) {
        if (event.persisted) {
            window.location.reload();
        }
    };*/
    // Alternative attempt at refreshing button UX on browser "back"
    /*window.addEventListener(onpageshow, function(event){
        if (event.persisted ||
            ( typeof window.performance != ('undefined') &&
            window.PerformanceNavigation.type === 2 )) {
                window.location.reload();
        }
    })*/
    /*window.addEventListener(onpageshow, function(event){
        if (event.persisted) {
                window.location.reload();
        }
    })*/

    // Below code accomplishes what I want, but dev tools are disabled 
    // after browser back button is clicked - looking for a resolution...
    window.addEventListener('unload', function () {});

})


    