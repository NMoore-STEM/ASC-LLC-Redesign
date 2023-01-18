$(function(){
    function resetNav(){
        var goTo = $(this).prop('href');

        console.log($(this));
        if ($(this).is('[id^="gh"]')){
            window.open(goTo) || window.location.replace(goTo);
            //alert('exactly!')
        } else {
            window.location.assign(goTo);
            //alert('not quite...')
        }
        setTimeout(function(){
            console.log($(this));
            $('.button_fx').removeClass('clicked_fx');
            $('.button_text').removeClass('clicked_txt');
            $('a').removeClass('clicked');
            /*if ($(this) == $('a[id^=gh]')){
                window.open(goTo) || window.location.replace(goTo);
                alert('exactly!')
            } else {
                //window.location.assign(goTo);
                alert('not quite...')
            }*/
        }, 700)
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
})