

//NOTE: scrollTop did not work when using "console.log($(document).scrollTop())"
//in console because in the bg class/id in the <main> element in HTML had a
//"position: fixed;" declaration which prevented this.  I had encountered the 
//same problem with the Bailey Lab website.  I had used positoin:fixed so the
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
    // Need to turn this JQ off for TABLET and MOBILE vw
    //  Might not need to add code for this - modifying CSS in MOBILE to see...
    /*$bar01.off('inview', function(event, isInView) {
        if (isInView) && /*<<"vw <=770px">>*/ {
            /*$bar01.removeClass('animation_final')
        } else {
          // element has gone out of viewport
        }*/
    /*});
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
}
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
$(document).ready(function(){
    $('#nameField').focus(function() {
        $('.nameContainer').addClass('focusActive');
        $('#nameLabel').addClass('labelActive');
    });
    $('#nameField').blur(function() {
        $('.nameContainer').removeClass('focusActive');
        //$('#nameLabel').removeClass('labelActive');
    });
    $('#emailField').focus(function() {
        $('.emailContainer').addClass('focusActive');
        $('#emailLabel').addClass('labelActive');
    });
    $('#emailField').blur(function() {
        $('.emailContainer').removeClass('focusActive');
        //$('#emailLabel').removeClass('labelActive');
    });
    $('#messageField').focus(function() {
        $('.messageContainer').addClass('focusActive');
        $('#messageLabel').addClass('labelActive');
    });
    $('#messageField').blur(function() {
        $('.messageContainer').removeClass('focusActive');
        //$('#messageLabel').removeClass('labelActive');
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
});
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
//----  For cred page web dev portfolio items in FULL view ---//
/*$(document).ready(function() {
    var $study = $('.case_study_popup');
    $study.on(click,function(){

    }*/  //PENDING IMPLEMENTATION//
});