//TEST JS FILE - USED TO DEBUG SCRIPT USED ON CONTACT PAGE OF ASC REVAMP

//--------- UI FORM BEHAVIOR
var emailStr = $('#emailField').val();
var nameStr = $('#nameField').val();
var messageStr = $('#messageField').val();
$(document).ready(function(){
    var fA = 'focusActive';
    var lA = 'labelActive';
    //var emailStr = $('#emailField').val();
    //var nameStr = $('#nameField').val();
    //var messageStr = $('#messageField').val();
    if ($('#nameField').val() != ''){
        $('#nameLabel').addClass(lA);
    };
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
    if ($('#emailField').val() != ''){
        $('#emailLabel').addClass(lA);
    };
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
    if ($('#messageField').val() != ''){
        $('#messageLabel').addClass(lA);
    };
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

    //------------  FORM VERIFICATION/SUBMISSION/& resulting animation
    //var emailStr = $('#emailField').val();
    //var nameStr = $('#nameField').val();
    //var messageStr = $('#messageField').val();
    var regex = new RegExp(/^\b[\w\.-]+@{1}[\w\.-]+\.\w{2,6}\b/i);
    function blankCheck() {
        if ($(emailStr) && $(nameStr) && $(messageStr)) {
            alert('blankCheck PASS!!!');
        return true;
        } else {
            alert('BLANK FAIL!!!');
        return false;
        };
    };
    $(".contactForm").submit(function(e){
        function validateAll() {
            //blankCheck();
            if (blankCheck() && regex.test($('#emailField').val())) {
                alert('vA PASS!!!');
                $('.submit').val("SENDING...");
                $('.submit').blur();
    //INSERTED FULL ANIMATION (THUS FAR)================================
                $('.willChangeJQ').css("background-color","#B7ACCD");
                $('.submitButton').addClass("darken").removeAttr('style');
                $(".load_outline3").addClass("loading");
                $(".load_outline2").addClass("loading2");
                $(".load_outline").addClass("loading3");
                /* setTimeout(function(){
                    $(".load_outline2").addClass("loading2")}, 500);
                setTimeout(function(){
                    $(".load_outline").addClass("loading3")}, 500); */
                setTimeout(function(){
                    $(".submit").val("SENT");
                    //Original method - all fields with class moved at the same time
                    //$(".willMoveJQ").css('transform','translateX(60px)');
                    //Might strike below - JSvanilla approach
                    /*for (var i=0;i<3,i++) {
                        (function(i){
                            setTimeout(function(){
                            $("form > div").slice(0,3).css('animation','form_left 0.5s ease-in forwards');
                        }(i)
                    };*/
                    //Staggered input field exit animation- Jquery approach - tested and works
                    $("form > div").each(function(i){
                        setTimeout(function(){
                            $("form > div").slice(0,3).eq(i).css('animation','form_left 0.5s ease-in forwards')
                        }, i*60);
                    });
                    $('.submitButton').css('background-color','white');
                    $('.submit').css({'color':'#553692','font-size':'20pt','pointer-events':'none','cursor':'not-allowed'});
                }, 5000);
                setTimeout(function(){
                    //$(".willMoveJQ").css('transform','translateX(-700px)');
                    //$('.submit').off('click');
                    $(".submitButton").removeClass("loading darken sent").css({'height':'30px','animation':'form_left 0.5s ease-in forwards'});

                    //$(".submitButton").removeClass("darken");
                    //$(".submitButton").removeClass("sent");
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
                    $('.thankYou-sub').css('animation','ty_left01 1.2s ease-in forwards');
                    } else {
                        $('.thankYou-sub').css('animation','ty_left02 0.8s ease-in forwards');
                    }
                }, 6400);
                //$('.submitButton').css({'background-color':'green'});
            //return true;
            } else {
                //Below is to give test users feedback
                $('.submitButton').css({'background-color':'red'});
                alert('validateAll FAIL!!!');
            //return false;
            };
        };
        validateAll();
        $.when(validateAll).done(function(){
            e.preventDefault();
            //var href = $('.contactForm').attr("action");
            /*$.ajax({
                type: "POST",
                dataType: "json",
                url: href,
                data: $('.contactForm').serialize(),
                success: function(response){
                    if(response.status == "success"){
                        window.location.href = 'thanks.html'; // change this. 
                    }else{
                        alert("An error occured: " + response.message);
                        //window.location.href = 'thanks.html';
                    }
                }
            });*/
        });
    });
});
