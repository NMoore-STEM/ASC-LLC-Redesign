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
    // $(document).scroll(function(){
    $(document).on('scroll', function(){
        if ($(document).scrollTop() > 450) {
            $('#headerMT').addClass('show');
        } else {
            $('#headerMT').removeClass('show');
        }
    });
    //Below will be used to have logo move into header in FULL
    // $(document).scroll(function(){
    $(document).on('scroll', function(){
        if ($(document).scrollTop() > 430) {
            $('#logoContainer').addClass('logoReveal');
        } else {
            $('#logoContainer').removeClass('logoReveal');
        }
    });
    $(document).ready(function(){
        // opens menu
        $('#menuButton,.menuItem').on('click touch', function(){
            $('#menu').toggleClass('menuOpen');
        });
    });
    //////////////////////////////////////////////
    //       ASC Title Bar Scroll Animation     //
    //           (refactored/DRYed)             //
    //          from 31 lines to 7 !            //
    //////////////////////////////////////////////
    $(function(){
        for (let i=0; i<5; i++) {
            $('#title0'+i).one('inview', function(){
                //var $this = $(this);
                //event.preventDefault();
                //console.log('title_bar_0'+i);
                //console.log($this);
                $(this).addClass('animation_final')
            });
        }
    });
    /////////////////////////////////////////////
    //==  "Why" section core values animation =//
    $(function(){
        var $outer = $('#coreValues');
            $inner = $('#coreInternal');
            $coreLi = $('#coreInternal li')
            $trigger = $('#coreTrigger')
    // changed below to ".one()" instead of ".on()"
    //  this will prevent the event from happening every
    // time the element is scrolled into view - possible
    // memory saving?
        $trigger.one('inview', function(event,isInView) {
            if (isInView) {
                setTimeout(function(){
                    $inner.addClass('coreFinal');
                },100);
                setTimeout(function(){
                    $coreLi.each(function(i){
                        setTimeout(function(){
                            $coreLi.slice(0).eq(i).addClass('finalLi')
                        }, i*250);
                        console.log('inner core');
                    });
                    console.log('second core');
                },500)
                console.log('first core');
            } else {}
        });
    });
    $(function(){
        //console.log('this thing on?!')
        for(let j=0;j<6;j++){
            $('.service_group0'+j).on('click',function(){
                //console.log(j);
                $('#details0'+j).toggleClass('show_details')
            });
        }
    });
    // WORKING CONTACT FORM VERIFICATION AND SUBMISSION (fr contact_test.js)
    $(function(){
        var fA = 'focusActive';
            lA = 'labelActive';
            nameF = $('#nameField');
            nL = $('#nameLabel');
            nameC = $('.nameContainer');
            emailF = $('#emailField');
            emL = $('#emailLabel');
            emailC = $('.emailContainer');
            msgF = $('#messageField');
            msgL = $('#messageLabel');
            msgC = $('.messageContainer');
            emailStr = emailF.val();
            hPot = $('#botCatfish');
            nameStr = nameF.val();
            msgStr = msgF.val()
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
    // BOT TRAP/HONEYPOT FUNCTION
        function botBoot() {
            if (hPot.val() =="") {
                return true;
            } else {
                alert('ACCESS DENIED');
                return false;
            };
        };
        $(".contactForm").on('submit',function(e){
            function validateAll() {
                if (blankCheck() && regex.test(emailF.val()) && botBoot()) {
                    alert('vA PASS!!!');
                    $('.subB').val("SENDING...");
        // ANIMATION BELOW
                    $('.willChangeJQ').css("background-color","#B7ACCD");
                    $('.submitButton').addClass("darken").removeAttr('style');
                    $(".load_outline3").addClass("loading03");
                    $(".load_outline2").addClass("loading02");
                    $(".load_outline").addClass("loading01");
                    setTimeout(function(){
                        // $('.subB').blur();
                        $('.subB').trigger('blur');
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
// Another MOBILE button UX approach in attempt to minimize code
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
    //  20221013 added all button classes in one function
    //  to DRY up code - seems to work as intended
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
    });
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
        console.log('This page was restored from the bfcache.');
        } else {
        console.log('This page was loaded normally.');
        };
    });
    window.addEventListener('unload', function () {});
});