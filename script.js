

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

/////////////////////////////////////////////////////
//           ASC Title Bar Scroll Animation        //
//            (refactored/DRYed)                   //
//           from 31 lines to 7 !                  //
/////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////
//0000000000000   Title Bar inview animations 00000//
/////////////////////////////////////////////////////
//        Commented out 20220901                   //
//     Reinstate if refactored code does not work  //

//jquery.inview attempt 01
// BELOW NEEDS TO BE REFACTORED/CLEANED-UP
// $(document).ready(function(){

//     var $bar01 = $('#title01');
//         $bar02 = $('#title02');
//         $bar03 = $('#title03');
//         $bar04 = $('#title04');
        // added var below to handle new functions
//        $this = $(this);


    // might be able to remove "event" from all function parameters below
    // also, consider changing functs to arrow functions (seems to be more fluid and responsive)
//    $bar01.on('inview', function(event, isInView) {
//        if (isInView) {
          // element is now visible in the viewport
//          $bar01.addClass('animation_final')
//        } else {
          // element has gone out of viewport
//        }
//    });
//    $bar02.on('inview', (event, isInView) => {
//        if (isInView) {
          // element is now visible in the viewport
//          $bar02.addClass('animation_final')
//        } else {
          // element has gone out of viewport
//        }
//    });
//    $bar03.on('inview', (event, isInView) => {
//            if (isInView) {
                // element is now visible in the viewport
//                $bar03.addClass('animation_final');
//            } else {
                // element has gone out of viewport
//            }
//        });
//    $bar04.on('inview', function(event, isInView) {
//        if (isInView) {
          // element is now visible in the viewport
//          $bar04.addClass('animation_final')
//        } else {
          // element has gone out of viewport
//        }
//    });
//});

////////////////////////////////////////////////////
//000000000000   End original title bar code 00000//
////////////////////////////////////////////////////

//// ----> Above refactored/ DRYed
//  If all title bars have the class "titleBar"...
//$('.titleBar).forEach('inview',function(isInView){
//    titleBarIn();
//    return this;
//});
//      OR (will need to loop through elements to get i)
//$('#title0'+i).forEach(isInView, function(isInView){
//    for (let i=1; i<4; i++) {
//        const element = array[i];        
//    }
//  titleBarIn();
//  return this;
//})
//function titleBarIn(event,isInView){
//    if (isInView) {
//        $this.addClass('animation_final')
//      } else {};
//}
//
//    Another attempt...
//      .forEach() might be replaced with .each()...
//
// $(document).ready(function(){
//      var $bar01 = $('#title01');
//          $bar02 = $('#title02');
//          $bar03 = $('#title03');
//          $bar04 = $('#title04');
        // added var below to handle new functions
//         $this = $(this);
//  for (let i=0; i<5; i++) {
    //console.log(i);
//    $('#title0'+i).one('inview', function(event){
//        var $this = $(this);
//        event.preventDefault();
//        console.log('title_bar_0'+i);
//        console.log($this);
//        titleBarIn('#title0'+i);
//        $this.addClass('animation_final')
//        return this
     //not sure if below is needed...
//        return this;
//    });
//  }
//function titleBarIn(event,isInView){
//    if (isInView) {
//        $this.addClass('animation_final')
//      } else {};
//}
//
//     OR for titleBarIn...
//    function titleBarIn($this){
//        if ('inview') {
//            $this.addClass('animation_final')
//        } else {};
//    }
//});

//=============  "Why" section core values animation ====
$(function(){
    var $outer = $('#coreValues');
        $inner = $('#coreInternal');
        // $coreLi = $('#coreValues li')
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
            },500);
            // $('#coreInternal li').each(function(i){
            //     setTimeout(function(){
            //         $coreLi.slice(0).eq(i).css({top:0})
            //     }, i*50);
            //     console.log('inner core');
            // });
            setTimeout(function(){
                // $coreLi.css({top:0});
                $coreLi.each(function(i){
                    setTimeout(function(){
                        // $coreLi.slice(0).eq(i).css({top:0,opacity:1})
                        $coreLi.slice(0).eq(i).addClass('finalLi')
                    }, i*250);
                    console.log('inner core');
                });
                console.log('second core');
            },1200)
            console.log('first core');
        } else {}
    });
    // $(document).ready(function(){});
});
// Possibly add HTML structure (divs containing the li elements
// so the text can slide down from overflow:hidden in the parent
// div.  Will need to stagger using an array for all li elements
// within the coreInternal element to drop each one down after
// the other - smoothly) to obtain desired effect with core
// values items. - 20220701
// 20220702 - used the above suggestion and attained desired
// effect - seems to work well at full resolution - need to 
// test all other resolutions...

//----------------------------------------------------------------//

//=============  Drop-downs for Services section when vw is less than 1000px ==//
////////////////////////////////////////////////////////////
//0000000000          Original code        000000000000000//
////////////////////////////////////////////////////////////
// $(document).ready(function() {
//     var $details01 = $('#details01');
//     var $details02 = $('#details02');
//     var $details03 = $('#details03');
//     var $details04 = $('#details04');
//     var $details05 = $('#details05');
//     var $service01 = $('.service_group01');
//     var $service02 = $('.service_group02');
//     var $service03 = $('.service_group03');
//     var $service04 = $('.service_group04');
//     var $service05 = $('.service_group05');

//     $service01.on('click', function(){
//         $details01.toggleClass('show_details');
//     })
//     $service02.on('click', function(){
//         $details02.toggleClass('show_details');
//     })
//     $service03.on('click', function(){
//         $details03.toggleClass('show_details');
//     })
//     $service04.on('click', function(){
//         $details04.toggleClass('show_details');
//     })
//     $service05.on('click', function(){
//         $details05.toggleClass('show_details');
//     })

// });
////////////////////////////////////////////////////
//000000000      End Original Code     00000000000//
////////////////////////////////////////////////////


///////////////  New Approach  /////////////////////
////////////////////////////////////////////////////

// Service and details ids and classes
// should pick each element dependent upon which
// one is clicked
// showDetails(){
//      $('#details0'+i).toggleClass('show_details');
//}
// for (let i=1;i<=5;i++) {
//      $('#details0'+i).showDetails()
// }
// for (let i=1;i<=5;i++) {
//      $('.service_group0'+i)
// }
//             Needs more work
//   Might need to remove numbers at the end of each 
//   .service_group so it can iterate through each similar
//   class on click?

//             Yet another approach
//   const serviceG = document.querySelectorAll('.service_grouP');
//   serviceG.forEach(element => {
//      Element.addEventListener('click', (e)=>{
//          $('#details0'+i).showDetails()
//      })
//   })
//                  OR...
//
//   const serviceG = document.querySelectorAll('.service_grouP');
//   serviceG.forEach(element => {
//      Element.addEventListener('click', (e)=>{
//          for (let i=1;i<=5;i++) {
//              $('#details0'+i).showDetails()
//          }
//      })
//   })
//
//         ANOTHER ATTEMPT 20220901
//////////////////////////////////////////////////
//000000     Working refactored code   00000000//
//000000     from 27 lines to 7 !       00000000//
//////////////////////////////////////////////////
$(function(){
    //console.log('this thing on?!')
    for(let j=0;j<6;j++){
        $('.service_group0'+j).on('click',function(){
            //console.log(j);
            $('#details0'+j).toggleClass('show_details')
        });
    }
})

// WORKING CONTACT FORM VERIFICATION AND SUBMISSION (fr contact_test.js)
// can clean up "var" before each variable as it only needs to be declared once if all are grouped below
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
        hPot = $('#botCatfish');
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
////////////////////////////////////////
// Best working modal script (20220227)
////////////////////////////////////////
// $(function(){
//     $('.more_info').on('click touch', function(event){
//         event.preventDefault();
//         var x, y;
//         x = event.pageX;
//         y = event.pageY;
//         console.log(x,y);
//         $('.modal_screen').addClass('m_screen_open');
//         $('.modal_screen').css('display','block');
//         setTimeout(function(){
//             $('.g_modal').addClass('g_modal_open');
//         },100);
//         setTimeout(function(){
//             $('.close_modal').addClass("show_close");
//         },400);
//         $('body, html').css('overflow-y', 'hidden');
//     });
//     $('.close_modal').on('click touch', function(event){
//         event.preventDefault();
//         var sReset = $('.g_modal')
//         sReset.scrollTop(0);
//         $(this).removeClass('show_close');
//         sReset.removeClass('g_modal_open');
//         $('body, html').css('overflow-y', 'auto');
//         $('.modal_screen').removeClass('m_screen_open')
//         $('.modal_screen').css('display','none');
//     })
// });
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Using transitionend to remove modal elements from DOM after closing transitions
////////////////////////////////////////////////////////////////
// $(function(){
//     var mScr = $('.modal_screen');
//         sReset = $('.g_modal')
//     $('.more_info').on('click touch', function(event){
//         event.preventDefault();
//         var x, y;
//         x = event.pageX;
//         y = event.pageY;
//         console.log(x,y);
//         // $('.modal_screen').addClass('m_screen_open');
//         mScr.addClass('m_screen_open');
//         // $('.modal_screen').css({ 'display':'block','visibility':'visible'});
//         mScr.css({ 'display':'block','visibility':'visible'} );
//         // $('.modal_screen').css('display','block');
//         setTimeout(function(){
//             $('.g_modal').addClass('g_modal_open');
//         },100);
//         setTimeout(function(){
//             $('.close_modal').addClass("show_close");
//         },400);
//         $('body, html').css('overflow-y', 'hidden');
//     });
//     // Using .off(e) and .one() instead of .on() seemed to work
//     $('.close_modal').on('click touch', function(event){
//         event.preventDefault();
//         // var sReset = $('.g_modal')
//         sReset.scrollTop(0);
//         $('body, html').css('overflow-y', 'auto');
//         $(this).removeClass('show_close');
//         sReset.removeClass('g_modal_open');
//         sReset.one('transitionend', function(e){
//             // $('.modal_screen').removeClass('m_screen_open').one('transitionend', function(e){
//             mScr.removeClass('m_screen_open').one('transitionend', function(e){
//                 // $('.modal_screen').css({ 'display':'none','visibility':'hidden'});
//                 mScr.css({ 'display':'none','visibility':'hidden'});
                
//                 // $('.modal_screen').off(e);
//                 mScr.off(e);
//                 console.log('!!! innermost');
//             });
//             sReset.off(e);
//             console.log('mid level');
//         })
//         console.log('top level');
//     })
// });
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//              Best working script for portfolio modals    //
//                --Cleaned up--                            //
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
$(function(){
    var mScr = $('.modal_screen');
        sRst = $('.g_modal');
        xModal = $('.close_modal')
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
            },400);
            $('body, html').css('overflow-y', 'hidden');
    });
        xModal.on('click touch', function(event){
            event.preventDefault();
            sRst.scrollTop(0);
            $('body, html').css('overflow-y', 'auto');
            $(this).removeClass('show_close');
            sRst.removeClass('g_modal_open');
            sRst.one('transitionend', function(e){
                mScr.removeClass('m_screen_fade').one('transitionend', function(){
                    //mScr.css({ 'display':'none','visibility':'hidden'}).off(e);
                    console.log('!!! innermost');
                }).off(e);
                function hideModal() {
                    mScr.css({ 'display':'none','visibility':'hidden'}).removeClass('m_screen_open').off(e);
                    // Added below to hide item-specific content after open
                    $('.modal_content_00, .modal_content_01').hide();
                    console.log('new function');
                }
                setTimeout(hideModal,175);
                console.log('mid level');
            })
            console.log('top level');
    })
});

// Array index experiment to load associated content
$(function(){
    var mBttn = $('.more_info');
        cBttn = $('.mobile_info');
        //mCont = $('.modal_content_0'+l)
    for(let l=0;l<mBttn.length;l++){
        // var l = $('.more_info').index(this);
        //     m = l+1;
        //var mBttn = $('.more_info');
        mBttn.on('click',function(){
            var l = mBttn.index(this);
                //m = l+1;
            //console.log($(this),i);
            //console.log(i);
            //console.log( mBttn.index(this) );
            //console.log('l:'+l+'then m:'+m);
            console.log('l:'+l);
            $('.modal_content_0'+l).show();

            // Will need to change if/else to
            // if/ and if/else if more items are
            // added to graphic design section w
            // a corresponding modal
            // if(l == 0){
            //     $('.modal_content_0'+l).show();
            //     console.log('IF')
            // }else{
            //     $('.modal_content_0'+l).show();
            //     console.log('ELSE')
                // Almost there!!! need to have close
                // button click hide the same element
                // that was shown, each time...
            //};
        });
        // function showModalIn() {
        //     var l = $('.more_info').index(this);
        //     console.log('l:'+l);
        //     $('.modal_content_0'+l).show();
        // }
    };
    for(let m=0;m<cBttn.length;m++){
        cBttn.on('click',function(){
            var m = cBttn.index(this);
            console.log('m:'+m);
            $('.modal_content_0'+m).show();
        });
    }
});
// $(function(){
//     $('.more_info').each('click', function(i){
//         $('.modal_content_0'+i).eq(i).show();
//         console.log($(this));
//     });
// });
////////////------- Alternative Approach ----------/////////////
//      This approach will be to create an array of all       //
//      graphic design portfolio item "more details" buttons  //
//      and have each one open unique and relevant content    //
//      corresponding to where the button is located in the   //
//      page.                                                 //
//  **Consider using .each() method rather than loop iteration//
//  **Might also need to use the .siblings() method to select //
//      nearest sibling next to the button that is clicked    //
//  ** .closest() method will not work as it searches the DOM //
//      for ancestors or only elements that are parents or    //
//      greater from the position of the selected element     //
////////////////////////////////////////////////////////////////
//     20220903 - Notes on DRYing up modal script:            //
//        Separate (in HTML) the modal general template from  //
//        item-specific, unique content.  Logic could follow  //
//        "if i == 0 then add first item content" "else (since//
//        there are only two items that will have modals for  //
//        now - if more is added then will need if, and if,   //
//        else) show second item content"                     //
//        classes .modal_top and .modal_flex will have button //
//        item-specific content - can follow in HTML directly //
//        after corresponding section.  Modal template can    //
//        possibly be placed at broader scope, possibly after //
//        or before the entire graphic design portfolio items //
////////////////////////////////////////////////////////////////

//  var more = $('.more_info');
//      mScr = $('.modal_screen');
//      sReset = $('.g_modal');
//      clBtn = $('.close_modal')


// $(function(){
//     $('.more_info').each(function(){
//     var mScr = $(this).nextAll('.modal_screen');
//         sReset = $(this).nextAll('.g_modal');
//         clBtn = $(this).nextAll('.close_modal')
//         $(this).on('click touch', () => {
//             var mScr = $(this).nextAll('.modal_screen');
//                 sReset = $(this).nextAll('.g_modal');
//                 clBtn = $(this).nextAll('.close_modal')


                // var mScr = $('.more_info .modal_screen');
                //     sReset = $('.more_info .g_modal');
                //     clBtn = $('.close_modal')
                //event.preventDefault();


    //         console.log('open button works');
    //         $(this).nextAll('.modal_screen').addClass('m_screen_open m_screen_fade');
    //         mScr.css({ 'display': 'block', 'visibility': 'visible' });
    //             setTimeout(function () {
    //                 sReset.addClass('g_modal_open');
    //             }, 100);
    //             setTimeout(function () {
    //                 clBtn.addClass("show_close");
    //             }, 400);
    //             $('body, html').css('overflow-y', 'hidden');
    //     });
    // });
    // $('.close_modal').on('click touch', function(){


        //event.preventDefault();


        // $('.g_modal').scrollTop(0);
        // $('body, html').css('overflow-y', 'auto');
        // $('.close_modal').removeClass('show_close');
        // $('.g_modal').removeClass('g_modal_open');
        // $('.g_modal').one('transitionend', function(){
        //     $('.modal_screen').removeClass('m_screen_fade').one('transitionend', function(){


                //mScr.css({ 'display':'none','visibility':'hidden'}).off(e);


//                 console.log('!!! innermost');
//             });
//             function hideModal() {
//                 $('.modal_screen').css({ 'display':'none','visibility':'hidden'}).removeClass('m_screen_open');
//                 console.log('new function');
//             }
//             setTimeout(hideModal,175);
//             console.log('mid level');
//         });
//         console.log('top level');
//     });
// })
// var more = $('.more_info');
//     mScr = $('.modal_screen');
//     sReset = $('.g_modal')
// for (var i = 0; i < more.length; i++) {
//     more[i].on('click touch', function(event){
//         event.preventDefault();
//         var x, y;
//         x = event.pageX;
//         y = event.pageY;
//         console.log(x,y);
//         mScr.addClass('m_screen_open m_screen_fade');
//         mScr.css({ 'display':'block','visibility':'visible'} );
//         setTimeout(function(){
//             $('.g_modal').addClass('g_modal_open');
//         },100);
//         setTimeout(function(){
//             $('.close_modal').addClass("show_close");
//         },400);
//         $('body, html').css('overflow-y', 'hidden');
//     });
// }
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
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
    $('.mobile_info').on('click touch', function(event){
        //var fTop = $('HTML').scrollTop();
        //    mTop = fTop - 1563;
        event.preventDefault();
        $('body, html').css('overflow-y', 'hidden');
        //$('.modal_screen').css({'top':mTop + 'px'}).addClass('m_s_o_mobile');
        $('.modal_screen').addClass('m_s_o_mobile');
        // Below is to prevent unwanted page jumping after click
        return false;
    })
})
$(function(){
    $('.close_mobile').on('click touch', function(event){
        event.preventDefault();
        $('body, html').css('overflow-y', 'scroll');
        $('.modal_screen').removeClass('m_s_o_mobile').one('transitionend', function(e){
            // $(this).css({'display':'none'});
            $('.g_modal').scrollTop(0);
            $('.modal_content_00, .modal_content_01').hide();
        })
    })
})
// ****NOTE: Use "return false;" within click function to help
//              prevent the page from jumping on click

//Graphic design portfolio item details pop-up window
// $(function(){
//     $('.more_info').on('click touch', function(event){
//         event.preventDefault();
//         // Below is an attempt to track click coordinates
//         var x, y;
//         x = event.pageX;
//         y = event.pageY;
//         console.log(x,y);
//         // var sReset = $('.g_modal')
//         // sReset.scrollTop = 0;
//         // sReset.scrollTop(0);
//         // $('.g_modal').scrollTop();
//         //grow window from graphic, add viewport 100vw 100vh layer and darken all objects behind, lock scroll on viewport (behind new window)
//         //fade in content and close button on top right corner
//         $('.modal_screen').addClass('m_screen_open');
//         $('.modal_screen').css('display','block');
//         // $('.g_modal').addClass('g_modal_open');
//         setTimeout(function(){
//             $('.g_modal').addClass('g_modal_open');
//         },100);
//         // $('.close_modal').addClass("show_close"); //might not be needed
//         setTimeout(function(){
//             $('.close_modal').addClass("show_close");
//         },400);
//         //allow scroll in pop-up window only
//         $('body, html').css('overflow-y', 'hidden'); //html element also has scroll, need to disable as well
//         //content will include why and how portfolio item was created
//     });
    // $('.close_modal').on('click touch', function(event){
    //     event.preventDefault();


        // below resets scroll position each time it is closed


        // var sReset = $('.g_modal')
        // sReset.scrollTop(0);
        // $(this).removeClass('show_close');
        // sReset.removeClass('g_modal_open');


        // Below not working...  close but not working as intended
        // var mdl = $('.g_modal');
        // mdl.on('transitionend webkittransitionend', function(){
        //     console.log('This is working');
        //     $('.modal_screen').removeClass('m_screen_open').addClass('m_screen_closing');
        //     $('.modal_screen').on('webkitanimationend animationend', function(){
        //         $('.modal_screen').removeClass('m_screen_closing');
        //     })
        // })


        // $('.modal_screen').removeClass('m_screen_open');


        // Below worked but had odd behaviour (1st click opened modal, clicking close closed modal, clicking again opened then shut immediately, no body scroll)
        // Figured out what was happening (added console logs in different scopes):
        // Below function runs on modal open because .modal_screen goes through a transition on open as well

        // $('.modal_screen').on('transitionend webkitTransitionEnd oTransitionEnd', function(){
        //     if (sReset.hasClass('g_modal_open') && $('.modal_screen').css('display','block')){
        //         // $(this).css('display','none');
        //         console.log('above operations not completed');
        //     } else {
        //         $(this).css('display','none');
        //         console.log('!!! inner inner function');
        //     }
            
        //     console.log('close function inner');
        // })

        // Below approach not working (from MDN site)
        // let mdscr = $('.m_screen_open');
        // mdscr.ontransitionend = () => {
        //     if (sReset.hasClass('g_modal_open')){
        //         // $(this).css('display','none');
        //         console.log('above operations not completed');
        //     } else {
        //         $(this).css('display','none');
        //         console.log('!!! inner inner function');
        //     }
        // }
        // May remove below timeout as it looks better with immediate close
        // setTimeout(function(){
        //     $('.modal_screen').removeClass('m_screen_open');
        // },200);
        // $('.m_screen_open').style('animation','modal_alpha 1s ease reverse');
        // Below is a mess - redo all of this - might use deferred object
        // $('.modal_screen').addClass('m_screen_closing').removeClass('m_screen_open');
        // const mdl = $('.m_screen_closing');
        // mdl.bind('animationend', function(){
        //     console.log('Animation ended');
        //     $('.modal_screen').removeClass('m_screen_closing');
        // })

//         $('body, html').css('overflow-y', 'auto');
//         console.log('close funct outer')
//     })
// })

// Another attempt utilizing Jquery animations rather than CSS so as to chain events easier

    // $('.close_modal').on('click touch', function(event){
    //     event.preventDefault();
    //     var sReset = $('.g_modal')
    //     sReset.scrollTop(0);
    //     $(this).removeClass('show_close');
    //     sReset.removeClass('g_modal_open');
    //     console.log('almost...');
    //     setTimeout(function(){
    //         // below not firing - guessing that another library is needed for this
    //         $('.m_screen_open').animate({'background-color' : 'rgba(36, 15, 33, 0)'});
    //         $('body, html').css('overflow-y', 'auto');
    //         console.log('closer...');
    //         // Below is not being executed for some reason - could be conflicting CSS...
    //         $('.m_screen_open').on('animationend', function(){
    //             $('modal_screen').css('display','none');
    //             $('body, html').css('overflow-y', 'auto');
    //             console.log('!!! innermost');
    //         })
    //     }, 300);
    // });
// });
// Attempt to utilize a deferred function to trigger close button appearance
// $(function(){
//     $('.more_info').on('click touch', function(event){
//         event.preventDefault();
//         var x, y;
//         x = event.pageX;
//         y = event.pageY;
//         console.log(x,y);
//         var mscr = $('.modal_screen');
//         mscr.addClass('m_s_o').animate({backgroundColor : 'rgba(36, 15, 33, 0.6)'});


//     function screen_fade(){
//         $('.modal_screen').removeClass('m_screen_open');
//     }
//     function shrink_modal(){
//         $('.g_modal').removeClass('g_modal_open').then(screen_fade,function(){

//         }).then(function(){
//             $('modal_screen').css('display','none');
//             $('body, html').css('overflow-y', 'auto');
//             console.log('!!! innermost');
//         })
//     }
//     var dfr1 = $.Deferred();
//     dfr1.done(screen_fade);
//     $('.close_modal').on('click touch', function(event){
//         event.preventDefault();
//         dfr1.resolve();

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

// $(function(Nick_Moore) {
//     var $bottom = scroll();
//     window.on(scroll, function(hire) {
//         if ($bottom == 0) {
//             hire
//             $(yourTeam).append(employees[Nick_Moore])
//         }
//     })
// })

