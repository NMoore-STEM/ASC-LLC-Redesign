//TEST JS FILE - USED TO DEBUG SCRIPT USED ON CONTACT PAGE OF ASC REVAMP

//--------- UI FORM BEHAVIOR
// Removed $(document).ready(function(){ as VSCode said was depricated
// Jquery specs also said that from ver 3.0+, it is recommended to use $(function(){}
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
    $('.submit').on('focus focusin',function() {
        $('.submitButton').css({'outline':'1px solid blueviolet','outline-offset':'7px'})
    });
    $('.submit').on('blur focusout',function() {
        $('.submitButton').removeAttr('style');
    });

    //------------  FORM VERIFICATION/SUBMISSION/& resulting animation
    //var emailStr = $('#emailField').val();
    //var nameStr = $('#nameField').val();
    //var messageStr = $('#messageField').val();
    var regex = new RegExp(/^\b[\w\.-]+@{1}[\w\.-]+\.\w{2,6}\b/i);
    function blankCheck() {
        if (emailStr && nameStr && msgStr != '') {
            alert('blankCheck PASS!!!');
        return true;
        } else {
            alert('BLANK FAIL!!!');
        return false;
        };
    };
    $(".contactForm").on('submit',function(e){
        function validateAll() {
            //blankCheck();
            if (blankCheck() && regex.test(emailStr)) {
                alert('vA PASS!!!');
                $('.submit').val("SENDING...");
                //$('.submit').blur();
    //INSERTED FULL ANIMATION (THUS FAR)================================
                $('.willChangeJQ').css("background-color","#B7ACCD");
                $('.submitButton').addClass("darken").removeAttr('style');
                //$(".load_outline3").addClass("loading");
                $(".load_outline3").addClass("loading03");
                $(".load_outline2").addClass("loading02");
                $(".load_outline").addClass("loading01");
                /* setTimeout(function(){
                    $(".load_outline2").addClass("loading2")}, 500);
                setTimeout(function(){
                    $(".load_outline").addClass("loading3")}, 500); */
                setTimeout(function(){
    // Cant change below .blur() as it is more of a command
                    $('.submit').blur();
                }, 450);
                setTimeout(function(){
                    $(".submit").val("SENT");
                    
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
                    $('.thankYou-sub').css('animation','ty_left01 1.2s ease-out forwards');
                    } else {
                        $('.thankYou-sub').css('animation','ty_left02 0.8s ease-out forwards');
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
            var href = $('.contactForm').attr("action");
            $.ajax({
                type: "POST",
                dataType: "json",
                url: href,
                data: $('.contactForm').serialize(),
                /*success: function(response){
                    if(response.status == "success"){
                        window.location.href = 'thanks.html'; // change this. 
                    }else{
                        alert("An error occured: " + response.message);
                        //window.location.href = 'thanks.html';
                    }
                }*/
            });
        });
    });
});



//PREVIOUS ATTEMPTS WITH NOTES BELOW
/*Below also worked, but truncated version implemented instead */
    /*if (nameF.val() === ""){
        nL.removeClass(lA);
     } else {
         nL.addClass(lA);
     };*/
     /* PREVIOUS CODE FOR EMAIL FIELD - USING .blur() instead of .on() */
     /* Using .blur() seemed to cause functinality issues and throw odd errors */
     /* as well as using .submit(), which controls overall behavior of form */
     /* VSCode recommends not using event shortcuts such as .blur() or .submit()
     since jquery v3.3+ */
     /* jquery website also recommends not using the event shortcuts for v1.7+ */
    /*if (emailStr != ''){
        emL.addClass(lA);
    };
    emailF.focus(function() {
        emailC.addClass(fA);
        emL.addClass(lA);
    });
    emailF.blur(function() {
        emailC.removeClass(fA);
        if (!emailF.val()) {
            emL.removeClass(lA);
        }
    });*/
    /* SUBMIT example below */
    /*$(".contactForm").submit(function(e){
        function validateAll() {
            //blankCheck();
            if (blankCheck() && regex.test(emailStr)) { */

                //Original method - all fields with class moved at the same time
                    //$(".willMoveJQ").css('transform','translateX(60px)');
                    //Might strike below - JSvanilla approach - not used
                    /* for (var i=0;i<3,i++) {
                        (function(i){
                            setTimeout(function(){
                            $("form > div").slice(0,3).css('animation','form_left 0.5s ease-in forwards');
                        }(i)
                    }; */