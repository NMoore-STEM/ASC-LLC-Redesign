

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

var $animation_element = $('.sectionTitle');
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
$window.trigger('scroll');

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