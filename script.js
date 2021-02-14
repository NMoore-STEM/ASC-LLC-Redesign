

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
    $('#menuButton').on('click', function(){
        //var container = $('#menu, #menuButton')
        /*if (!container.is(event.target) && container.visibility('visible')) {
            $('#menu').toggleClass();
        };*/
        /*$('.menuClosed').toggleClass('menuOpen');
        $('#menu').toggleClass('menuButtonOpen');*/
        /*$('#menu').removeClass('menuClosed');
        $('#menu').addClass('menuOpen');*/
        $('#menu').toggleClass('menuOpen');
    });
    $('.menuItem').on('click', function(){
        $('.menuClosed').removeClass('menuOpen');
        $('#menu').removeClass('menuButtonOpen');
    });
    /*$(document).click(function(event) {
        if ($('.menuOpen').is(':visible') && $(event.target).not('#menu')) {
         $('#menu').removeClass('menuOpen')};*/
    /*$('#menuButton').blur(function() {
        $('.menuClosed').removeClass('menuOpen');
    })*/
});
//From left section title animations
//".animate_initial" => ".animate_final"
//animate_initial {translate: 0px -100px 0px 0px; opacity:0}
//animate_final {translate: 0 0 0 0; opacity:1}
//triggered by window position and parent div position
//Console log commands to use:
/*console.log($(document).scrollTop())
console.log($(window).height())
console.log($('.sectionTitle').offset().top)
var $element = $('.sectionTitle')
console.log($element.outerHeight())*/
//looks like animation will need to be triggered when offset().top of element is >= 
// +150px of window size - will need to refine more to include an "in-view" calc/event

/*var $animation_element = $('.sectionTitle');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    $.each($animation_element, function() {
        var $element = $('.sectionTitle');
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('animation_final');
    } else {
      $element.removeClass('animation_final');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');*/

/*Below attempt was close to working, but the issues are beyond my understanding
USED THIS in CONSOLE and it seemed to return values just fine:
console.log($window.scrollTop())
console.log($window.height())

var $bottom = ($window.scrollTop() + $window.height())
console.log($bottom.valueOf())
console.log($('.sectionTitle').offset().top)
console.log($('.sectionTitle').height())
var $divBottom = ($('.sectionTitle').offset().top + $('.sectionTitle').height())
console.log($divBottom.valueOf())
function do_tha_thang() {
  var $top = ($window.scrollTop())
  var $bottom = ($window.scrollTop() + $window.height())
  var $divTop = ($('.sectionTitle').offset().top)
  var $divBottom = ($('.sectionTitle').offset().top + $('.sectionTitle').height())
  if (($divBottom >= $top) && ($divTop <= $bottom)){ $('sectionTitle').addClass('animation_final')} else {
    $('sectionTitle').removeClass('animation_final')
  }
}
$('.sectionTitle').outerHeight()

//---  begin code for website ---//
var $window = $(window);
var $title = ('#titleMain');

$(document).ready(function move() {
    var $top = ($window.scrollTop());
    var $bottom = ($window.scrollTop() + $window.height());
    var $divTop = ($('#titleMain').offset().top);
    var $divBottom = ($('#titleMain').offset().top + $('#titleMain').height());
    $.each($title, function(){
        if (($divBottom >= $top) && ($divTop <= $bottom)){ 
            $('#titleMain').addClass('.animation_final')
        } else {
            $('#titleMain').removeClass('.animation_final')
        }
    });
})

$window.on('scroll resize', move)
//$window.trigger('scroll');
*/

//ANOTHER ATTEMPT at adding a class when element is in view (w/o plugin)
/*$(document).ready (function my_view () {
    var $window = $(window).height();
    var $titleBar = $.each('.sectionTitle');
    (function () {
        var $currentPos = ($.scrollTop() + $window);
        var $visible = ($titleBar.offset().top >= $currentPos);
        if ($visible){
            $titleBar.addClass('animation_final')
        } else {
            $titleBar.removeClass('animation_final')
        }
    })
    $window.on('scroll resize', my_view)
});*/
//DONE!!! trying another approach using jquery.inview add on/library
//jquery.inview attempt 01
$(document).ready(function(){
    //var $titleBar = $('.sectionTitle');

    var $bar01 = $('#title01');
    var $bar02 = $('#title02');
    var $bar03 = $('#title03');
    var $bar04 = $('#title04');

    $bar01.on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar01.addClass('animation_final')
        } else {
          // element has gone out of viewport
          //$bar01.removeClass('animation_final')
        }
    });
    $bar02.on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar02.addClass('animation_final')
        } else {
          // element has gone out of viewport
          //$bar02.removeClass('animation_final')
        }
    });
    $bar03.on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar03.addClass('animation_final')
        } else {
          // element has gone out of viewport
          //$bar02.removeClass('animation_final')
        }
    });
    $bar04.on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar04.addClass('animation_final')
        } else {
          // element has gone out of viewport
          //$bar02.removeClass('animation_final')
        }
    });
});
    // Need to turn this JQ off for TABLET and MOBILE vw
    //  Might not need to add code for this - modifying CSS in MOBILE to see...
    /*$bar01.off('inview', function(event, isInView) {
        if (isInView) && /*<<"vw <=770px">>*/ /*{
            /*$bar01.removeClass('animation_final')
        } else {
          // element has gone out of viewport
        }
    });*/
    /*$bar02.on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar02.addClass('animation_final')
        } else {
          // element has gone out of viewport
          //$bar02.removeClass('animation_final')
        }
    });
    $bar03.on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar03.addClass('animation_final')
        } else {
          // element has gone out of viewport
          //$bar02.removeClass('animation_final')
        }
    });
    $bar04.on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar04.addClass('animation_final')
        } else {
          // element has gone out of viewport
          //$bar02.removeClass('animation_final')
        }
    });  */

//This method is working, HOWEVER!, it is applying the addClass to all similar elements at once
//ATTEMPT 02
/*var $bar01 = $('#title01');
var $bar02 = $('#title02');
var $bar03 = $('#title03');
var $bar04 = $('#title04');

$(document).ready(function(){
    $bar01.one('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar01.addClass('animation_final')
        } else {
          // element has gone out of viewport
          $bar01.removeClass('animation_final')
        }
    });
});
$(document).ready(function(){
    $bar02.one('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar02.addClass('animation_final')
        } else {
          // element has gone out of viewport
          $bar02.removeClass('animation_final')
        }
    });
});
$(document).ready(function(){
    $bar03.on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar03.addClass('animation_final')
        } else {
          // element has gone out of viewport
          $bar03.removeClass('animation_final')
        }
    });
});
$(document).ready(function(){
    $bar04.on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $bar04.addClass('animation_final')
        } else {
          // element has gone out of viewport
          $bar04.removeClass('animation_final')
        }
    });
})*/


/*$(document).click(function(event) {
   if ($('.menuOpen').is(':visible') && $(event.target).not('#menu')) {
    $('#menu').removeClass('menuOpen')};
});*/
/*$(document).click(function (e){

    var container = $('#menu');
    var button = $('#menuButton');

	if (!container.is(e.target) && container.has(e.target).length === 0){

		$('#menu').toggleClass('menuOpen');
		
	}
});*/

//Button click animation for MOBILE and TABLET//
//NOTE: Need to use #btn to grab element, then toggle class to .menuItemClicked//


//Contact page "onfocus" event to highlight active field//

/*$(document).ready().addEventListener(function(){
$('#nameField').on('focus', function() {
        $('.floatContainer').addClass('floatContainerActive');
        $('label').addClass('labelActive');
});

$('#nameField').off('focus', function() {
        $('.floatContainer').removeClass('floatContainerActive');
        $('label').removeClass('labelActive');
});
});*/

//----------------------------------------------------------------//
//    Could replace ".blur()" with ".focusout()" if cross-browser issues arise
/*$(document).ready(function(){
    var fA = 'focusActive';
    var lA = 'labelActive';
    $('#nameField').focus(function() {
        $('.nameContainer').addClass(fA);
        $('#nameLabel').addClass(lA);
    });
    $('#nameField').blur(function() {
        $('.nameContainer').removeClass(fA);
        if (!$('#nameField').val()) {
            $('#nameLabel').removeClass(lA);
        }
    });
    $('#emailField').focus(function() {
        $('.emailContainer').addClass(fA);
        $('#emailLabel').addClass(lA);
    });
    $('#emailField').blur(function() {
        $('.emailContainer').removeClass(fA);
        if (!$('#emailField').val()) {
            $('#emailLabel').removeClass(lA);
        }
    });
    $('#messageField').focus(function() {
        $('.messageContainer').addClass(fA);
        $('#messageLabel').addClass(lA);
    });
    $('#messageField').blur(function() {
        $('.messageContainer').removeClass(fA);
        if (!$('#messageField').val()) {
            $('#messageLabel').removeClass(lA);
        }
    });
    $('.submit').focusin(function() {
        $('.submitButton').css({'outline':'1px solid blueviolet','outline-offset':'7px'})
    });
    $('.submit').focusout(function() {
        $('.submitButton').removeAttr('style');
    });
});
//----------------------------------------------------------------//
//----   Attempt to keep label above text field if content is entered, 
//----   if not, then label reverts to initial position  

    /*
    $('#emailField').blur(function() {    
        if ($('#emailField').val().length < 0) {
            $('#emailLabel').removeClass('labelActive');
        } else {
            $('#emailLabel').addClass('labelActive');
        }
    })
    */

//----  Doesnt seem to work, when using "console.log($('#emailField).value()"
//----  in console, 0 is returned whether or not something is entered into
//----  field.  This can be refined to work as intended, but will be abandoned
//----  for now (time constraints).

    /*$('#nameField').on('focus blur', function() {
        $('.nameContainer').toggleClass('focusActive');
   });*/
//});

/*  Below code was somehow brought back to life when creating accordians for SERVICES
section.  Contact form has reverted to working as intended with inactivating this code.
$('#nameField').blur(function() {
    $('<div.floatContainer>').removeClass('floatContainerActive');
    $('label').removeClass('labelActive');
});

$("form :input").focus(function() {
    $('.floatContainer').addClass('floatContainerActive');
    $("label[for='" + this.id + "']").addClass("labelfocus");
    $('label').addClass('labelActive');
});

$('#nameField').blur(function() {
    $('<div.floatContainer>').removeClass('floatContainerActive');
    $('label').removeClass('labelActive');
});
/*function activeField(){
    $(document).getElementByClass('.floatContainer')
        $('floatContainer').toggleClass('floatContainerActive')
};*/
/*$(document).ready(function() {
    function activeField() {
        $(document).getElementByClass('.floatContainer')
            $('floatContainer').toggleClass('floatContainerActive')
    };
    //$('#contactField').onfocus(activeField)

});*/
/*$('input').focus(function() {
    $('.floatContainer').addClass('floatContainerActive')
});
$('textarea').focus(function() {
    $('.floatContainer').addClass('floatContainerActive')
});
$(document).ready(function() {
    $('input').focus(function() {
        $('<div.floatContainer>').toggleClass('floatContainerActive')
    })
});*/

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

//----  scrapped idea - For cred page web dev portfolio items in FULL view ---//
/*$(document).ready(function() {
    var $study = $('.case_study_popup');
    $study.on(click,function(){

    }*/  //PENDING IMPLEMENTATION --- scrapped idea

//  Below is to provide negative feedback for incomplete form and to prevent form submission
/* $(function(){
    if ($('#nameField','#emailField','#messageField').val(length) = 0){
        $('.submit').off('click');
        $('.submitButton').addClass('subm_error');
    } else {

    }
}) */


//============  Unified verification code below ==================
/* function nameVerify() {
    if (!$('#nameField').val()) {
        return false;
    }
};
function emailVerify() {
    //var regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    var regex = new RegExp(/^\b[\w\.-]+@{1}[\w\.-]+\.\w{2,6}\b/gi); //tested and working
    var emailF = $('#emailField');
    var emailStr = emailF.val();
    if (!emailF.val() || regex.test(emailStr)) {
        return false;
    }
};
function messageVerify() {
    if (!$('messageField').val()) {
        return false;
    }
};
function clickGate() {
    var nResult = nameVerify();
    var eResult = emailVerify();
    var mResult = messageVerify();
    if (nResult == false || eResult == false || mResult == false) {
        //<<button "shake" animation here>>
    } else { //<<full submit form actions and animations here>> }
}; */
//var emailF = $('#emailField');
/* var emailStr = $('#emailField').val();
var nameStr = $('#nameField').val();
var messageStr = $('#messageField').val();
var regex = new RegExp(/^\b[\w\.-]+@{1}[\w\.-]+\.\w{2,6}\b/i);
function blankCheck() {
    if (emailStr == '' || nameStr == '' || messageStr == '') {
      return false;
    } else {
      return true;
    };
};
function validateAll() {
    if (blankCheck== false || regex.test(emailStr)== false) {
        //alert('FAIL!!!');
      return false;
    } else {
        //alert('PASS!!!');
      return true;
    };
}; */
/*var emailStr = $('#emailField').val();
var nameStr = $('#nameField').val();
var messageStr = $('#messageField').val();
var regex = new RegExp(/^\b[\w\.-]+@{1}[\w\.-]+\.\w{2,6}\b/i);
function blankCheck() {
    if (emailStr == '' || nameStr == '' || messageStr == '') {
      return true;
    } else {
      return false;
    };
};
function validateAll() {
    if (!blankCheck() && regex.test(emailStr).val()) {
        alert('PASS!!!');
        $('.submit').val("SENDING...");
      return true;
    } else {
        $('.submitButton').css('background-color', 'red');
        alert('FAIL!!!');
      return false;
    };
};
$(".submit").click(function() {
    blankCheck();
    validateAll();
});*/
    /* var emailStr = $('#emailField').val();
    var nameStr = $('#nameField').val();
    var messageStr = $('#messageField').val();
    var regex = new RegExp(/^\b[\w\.-]+@{1}[\w\.-]+\.\w{2,6}\b/i);
    function validateAll() {
        if (blankCheck() || regex.test(emailStr)) {
            alert('PASS!!!');
          return true;
        } else {
            alert('PASS!!!');
          return false;
        };
    };
    function blankCheck() {
        if (emailStr || nameStr || messageStr) {
          return true;
        } else {
          return false;
        };
    }; */
    //validateAll();
        /*if (validateAll()) {
            $('.submitButton').style('background-color', 'red');
        } else {
            $('.submit').val("SENDING...");
        };*/
    //});

/* $(".submit").click(function(){
    if (!validateAll() === true) {
        //$('.submit').prop('disabled',true);
        //shake/denial animation
        //$('.submit').prop('disabled',false)
        $('.submit').val("SENDING...");
        $('.willChangeJQ').css("background-color","#B7ACCD");
        $('.submitButton').addClass("darken");
        $(".load_outline3").addClass("loading");
        setTimeout(function(){
            $(".load_outline2").addClass("loading2")}, 500);
        setTimeout(function(){
            $(".load_outline").addClass("loading3")}, 500);
        setTimeout(function(){
            $(".submit").val("SENT");
            //$(".willMoveJQ").css('transform','translateX(60px)');
            $(".willMoveJQ").css('animation','form_left 0.5s ease-in forwards');
            $('.submitButton').css('background-color','white');
            $('.submit').css({'color':'#553692','font-size':'20pt','pointer-events':'none','cursor':'not-allowed'});
        }, 5000);
        setTimeout(function(){
            //$(".willMoveJQ").css('transform','translateX(-700px)');
            //$('.submit').off('click');
            $(".submitButton").removeClass("loading");
            $(".submitButton").removeClass("darken");
            $(".submitButton").removeClass("sent");
        }, 5100);
    }else{
        $('input[type=submit]').prop('disabled', true);
    }
});*/

//=============  ATTEMPT to unify verification above =================


    // UX button click feedback for contact page
    //$(".submit").click(function(){
        //var $change = $('.formContainer', '.contactForm', '#nameLabel', '#emailLabel', '#messageLabel');
        //$(".contactForm").addClass("sending_bg");
        //$("label").addClass("sending_bg");
        //$(".formContainer", ".contactForm", "#nameLabel", "#emailLabel", "#messageLabel").css("background-color","#777676");
        //$(".formContainer").css("background-color","#777676");
        //$change.css("background-color","#777676");
        //$('.willChangeJQ').css("background-color","#777676");
        /* $('.submit').val("SENDING...");
        $('.willChangeJQ').css("background-color","#B7ACCD");
        $('.submitButton').addClass("darken");
        $(".load_outline3").addClass("loading");
        setTimeout(function(){
            $(".load_outline2").addClass("loading2")}, 500);
        setTimeout(function(){
            $(".load_outline").addClass("loading3")}, 500);
        setTimeout(function(){
            $(".submit").val("SENT");
            //$(".willMoveJQ").css('transform','translateX(60px)');
            $(".willMoveJQ").css('animation','form_left 0.5s ease-in forwards');
            $('.submitButton').css('background-color','white');
            $('.submit').css({'color':'#553692','font-size':'20pt','pointer-events':'none','cursor':'not-allowed'});
        }, 5000);
        setTimeout(function(){
            //$(".willMoveJQ").css('transform','translateX(-700px)');
            //$('.submit').off('click');
            $(".submitButton").removeClass("loading");
            $(".submitButton").removeClass("darken");
            $(".submitButton").removeClass("sent");
        }, 5100);
    }); */

    // Slightly different general button click feedback for MOBILE and FULL
    /* $(".contactButton").click(function(){
        if ($(window).width() <= 770){

        }else{
            
        }
    }) */

    // Attempt at bringing all contact form elements/functions together
    /*function emptyFieldVerify(name,message) {
        var name = $('#nameField');
        var message = $('#messageField');
        if (name == val()) && (message == val()) {
            return false;
        }
    }*/
    //----Specific AJAX workaround for "FormCarry" form back-end service
    //----Code copied from: https://forum.webflow.com/t/any-good-free-form-processors-out-there-that-allow-redirects-after-submission/63192/6
    /*$(function(){
        $(".contactForm").submit(function(e){
            e.preventDefault();
            var href = $(this).attr("action");
            $.ajax({
                type: "POST",
                dataType: "json",
                url: href,
                data: $(this).serialize(),
                success: function(response){
                    if(response.status == "success"){
                        window.location.href = 'thanks.html'; // change this. 
                    }else{
                        alert("An error occured: " + response.message);
                        //window.location.href = 'thanks.html';
                    }
                }
            });
        });
    });*/

// MOBILE UX - Button "touch" effect
// if onResize is inserted at beginning of this function, should add more rules dependent on vw
/*$(function(){
    if ($(window).width() < 771) {
        $('.contactButton').on('click touch', function(e){
            // Prevent button from going instantly to href
            e.preventDefault();
            $(this).addClass('clicked');
            $('.button_fx').addClass('clicked_fx');
            $('.button_text').addClass('clicked_txt');
            setTimeout(function() {
            // Outline fx
                $(this).addClass('clicked');
            }, 200);
            setTimeout( function () { 
                $('.button_fx').removeClass('clicked_fx');
                $('.button_text').removeClass('clicked_txt');
                $(this).removeClass('clicked');
            // Redirect
                window.location = 'contact.html';
            }, 700);
            
        })
    } else {
    // This is for all ".contactButton" at vw > MOBILE
        return true;
    }
})*/

// Attempt to keep the outline fx for button click triggering on back button on browser
/* $(function(){
    $('#c01').on('click touch', function(e){
        if ($(window).width() < 771) { */
        // Prevent button from going instantly to href
            /* e.preventDefault();
            $(this).addClass('clicked');
            $('.button_fx').addClass('clicked_fx');
            $('.button_text').addClass('clicked_txt');
            setTimeout(function() { */
            // Outline fx
               /* $(this).addClass('clicked');
            }, 200);
            setTimeout( function () { 
                $('.button_fx').removeClass('clicked_fx');
                $('.button_text').removeClass('clicked_txt');
                $(this).removeClass('clicked'); */
            // Redirect
             //   window.location = 'contact.html';
            // Above redirect made every instance of .contactButton go to contact page
            // Below is an attempt at redirecting to href attribute in <a> element
            // None below worked as intended - still a few options available...
             //   window.location.href = $(this).prop('href');
                //window.location.href = targetUrl;
                //window.location.href = $(this).attr('href');
                //window.location.href = $('a').attr('href');
           // }, 700);
        // } else {
        // This is for all ".contactButton" at vw > MOBILE
            /* return true;
        };
    });
    $('#c02').on('click touch', function(e){
        if ($(window).width() < 771) { */
        // Prevent button from going instantly to href
          /*  e.preventDefault();
            $(this).addClass('clicked');
            $('.button_fx').addClass('clicked_fx');
            $('.button_text').addClass('clicked_txt');
            setTimeout(function() { */
            // Outline fx
              /*  $(this).addClass('clicked');
            }, 200);
            setTimeout( function () { 
                $('.button_fx').removeClass('clicked_fx');
                $('.button_text').removeClass('clicked_txt');
                $(this).removeClass('clicked'); */
            // Redirect
            //    window.location = 'contact.html';
            // Above redirect made every instance of .contactButton go to contact page
            /* }, 700);
        } else { */
        // This is for all ".contactButton" at vw > MOBILE
          /*  return true;
        };
    }); */


    // For testing bfcache status in console log
    /* window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
        console.log('This page was restored from the bfcache.');
        } else {
        console.log('This page was loaded normally.');
        }
    }); */

    //!!! Seems to have fixed the issue, but there is a flash of unstyled content
    //  Should place literal script in head of HTML file to avoid this
    // Back button page reset? - This should work for all browsers that use bfcache
    // ?? WILL this cause any other unexpected behaviors?  Should this only be for MOBILE?
    /* window.onpageshow = function (event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
}); */

// FOLLOW UP - this segment of code for MOBILE button UX is flawed
// All buttons trigger animations when one is clicked - index each instance?
// On portfolio page, noticed that only one button "reset" from UX fx

// Below is attempt to minimize repitition by storing all common actions
// into a function that can be reused

// Began writing the same script for each uniqe id/button, but might want
// to implement a for loop and .each() method or something similar.
// If the above suggestion is used, will need to find a way to read the 
// "html" property from each anchor element and redirect page accordingly

function mobileButtonUX() {
    //$(this).addClass('clicked');
    $('.button_fx').addClass('clicked_fx');
    $('.button_text').addClass('clicked_txt');
    //setTimeout(function() {
        // Outline fx
        //$(this).addClass('clicked');
    //}, 200);
    setTimeout( function () { 
        $('.button_fx').removeClass('clicked_fx');
        $('.button_text').removeClass('clicked_txt');
        //$(this).removeClass('clicked');
        // Redirect
        // window.location = $(this).attr('href');
        //window.location = 'contact.html';
        // Above redirect made every instance of .contactButton go to contact page
    }, 700);
};

$(function(){
    // Contact buttons on index page (2 total)
    $('#c01').on('click touch', function(e){
        if ($(window).width() < 771) {
        // Prevent button from going instantly to href
            e.preventDefault();
            $(this).addClass('clicked');
            $('.button_fx').addClass('clicked_fx');
            $('.button_text').addClass('clicked_txt');
            /*mobileButtonUX().then(function(){
                window.location.href = $(this).attr('href');
                $(this).removeClass('clicked');
            })*/
            setTimeout(function(){
                $('.button_fx').removeClass('clicked_fx');
                $('.button_text').removeClass('clicked_txt');
                window.location.href = 'contact.html';
                $(this).removeClass('clicked');
            }, 700)
        } else {
            // This is for all ".contactButton" at vw > MOBILE
            return true;
        };
    });
    $('#c02').on('click touch', function(e){
        if ($(window).width() < 771) {
        // Prevent button from going instantly to href
            e.preventDefault();
            $(this).addClass('clicked');
            $('.button_fx').addClass('clicked_fx');
            $('.button_text').addClass('clicked_txt');
            /*mobileButtonUX().then(function(){
                window.location.href = $(this).attr('href');
                $(this).removeClass('clicked');
            })*/
            setTimeout(function(){
                $('.button_fx').removeClass('clicked_fx');
                $('.button_text').removeClass('clicked_txt');
                window.location.href = 'contact.html';
                $(this).removeClass('clicked');
            }, 700)
        } else {
            // This is for all ".contactButton" at vw > MOBILE
            return true;
        };
    });
    $('#gh01').on('click touch', function(e){
        if ($(window).width() < 771) {
        // Prevent button from going instantly to href
            e.preventDefault();
            mobileButtonUX();
        } else {
        // This is for all ".contactButton" at vw > MOBILE
            return true;
        };
    });
    $('#gh02').on('click touch', function(e){
        if ($(window).width() < 771) {
        // Prevent button from going instantly to href
            e.preventDefault();
            mobileButtonUX();
        } else {
        // This is for all ".contactButton" at vw > MOBILE
            return true;
        };
    });
    $('#r01').on('click touch', function(e){
        if ($(window).width() < 771) {
        // Prevent button from going instantly to href
            e.preventDefault();
            mobileButtonUX();
        } else {
        // This is for all ".contactButton" at vw > MOBILE
            return true;
        };
    })
        // For testing bfcache status in console log
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
        console.log('This page was restored from the bfcache.');
        } else {
        console.log('This page was loaded normally.');
        }
    })
    window.onpageshow = function (event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
});


    