//TEST JS FILE - USED TO DEBUG SCRIPT USED ON CONTACT PAGE OF ASC REVAMP

//--------- UI FORM BEHAVIOR
$(document).ready(function(){
    var fA = 'focusActive';
    var lA = 'labelActive';
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
    var emailStr = $('#emailField').val();
    var nameStr = $('#nameField').val();
    var messageStr = $('#messageField').val();
    var regex = new RegExp(/^\b[\w\.-]+@{1}[\w\.-]+\.\w{2,6}\b/i);
    function blankCheck() {
        if (emailStr && nameStr && messageStr) {
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
            if (blankCheck() && regex.test(emailStr)) {
                alert('vA PASS!!!');
                $('.submit').val("SENDING...");
                $('.submit').blur();
    //INSERTED FULL ANIMATION (THUS FAR)================================
                $('.willChangeJQ').css("background-color","#B7ACCD");
                $('.submitButton').addClass("darken").removeAttr('style');
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
                //$('.submitButton').css({'background-color':'green'});
            return true;
            } else {
                $('.submitButton').css({'background-color':'red'});
                alert('validateAll FAIL!!!');
            return false;
            };
        };
        validateAll();
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
