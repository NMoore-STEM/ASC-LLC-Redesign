//===NOTE: Will need to generate svg objects that grow slowly (both stroke width and radius) after the
//===first button click.  Any further clicks will send a wave through the circles by means of shrinking then
//===growing stroke width back to normal.  It might be useful to include a refresh/recycle function button in
//===a non-intrusive placement on the page.

//====1.) on.click -> begin circle generation loop - all circles growing from center eventually to a determined
//===position
//===(there will need to be a calculation based on viewport width and height, whichever is greater, as to how 
//===many circles will be generated)(might need createObject or something along those lines)

//===For further consideration: create proposed design, then add a cursor position tracking listener,
//===then create ephemeral concentric circles that vary stroke-width over time, radiate from original click position,
//===and eventually disappear/fade (and are removed from DOM).
//===Should experiment with performance: no limit on instances running at any time, limit to 4, limit to two,
//===limit to one instance.  Monitor frame-rate of animations if possible.  Play with filter primitives such as
//===additive/subtractive/feBlend mode=multiply and see if performance is noticably affected.

//=== What is the vanilla equiv of below?  Is it even needed since initial action is triggered by button click?
//$(document).ready(function()

//window.onload 

//var btn = document.getElementById('button');
window.onload = function () {
    var main = document.getElementById('order');
    var btn = document.getElementById('button');
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var middle = vw.valueOf()/2;
    var middleH = vh.valueOf()/2;
    var delta_circ = vw.valueOf()/5;
    var max_circ = vw.valueOf()*1.2;
    var start_circ = 2;
    var first_end_circ = max_circ;
    var max_circ_count = 5;
    let clickCount = 0;
    //var clickCount = 0;
    btn.addEventListener("click", function() {
        clickCount += 1;
        //alert("you gon'learn t'day!");
        //initial_draw();
        if (clickCount <= 1){
            var howMany = document.querySelectorAll('circle').length;
            function drawCircles(){
                if (howMany < 1){
                    clicked();
                    console.log('you did it!');
                } else {
                    //seqCircles();
                    alert('more than 1 circle!');
                    return console.log('you seem to have more than one circle');
                }
            };
            drawCircles();
        } else {
            //rippleFX();
        }
        //clicked();
        return console.log(clickCount);
    });
    function drawCircles(){
        if (clickCount <= 1){
            var howMany = document.querySelectorAll('circle').length;
            function drawCircles(){
                if (howMany < 1){
                    clicked();
                    return console.log('you did it!');
                } else {
                    //seqCircles();
                    console.log('you seem to have more than one circle');
                }
            };
            drawCircles();
            } else {
                //rippleFX();
            };
    };


    // function initial_draw() {
    //     document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // }

    // if (clickCount < 1){
    //     var howMany = document.querySelectorAll('circle').length;
    //     function drawCircles(){
    //         if (howMany < 1){
    //             clicked();
    //         } else {
    //             seqCircles();
    //         }
    //     };
    //     drawCircles();
    // } else {
    //     rippleFX();
    // }

    function clicked() {
        
        const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg1. setAttribute ("width", "100%");
        svg1. setAttribute ("height", "100%" );
        svg1. setAttribute ("viewBox", "0 0 300 300" );
        main.appendChild(svg1);
        const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        cir1.setAttribute("cx", "50%" );
        cir1.setAttribute("cy", "50%" );
        cir1.setAttribute("r", 100);
        cir1.setAttribute("stroke", "#FFFFFF");
        cir1.setAttribute("stroke-width", 2)
        cir1.setAttribute("fill", "none");
        //Need function for "when circle is done (specified time interval maybe, or near-done so it starting before the last one
        //is finished), make another circle but with added factor for radius (i+20px or similar, maybe prev_circ.attributeValue()+20px)
        //until available space is populated fully (beyond the viewport)"
        for (var i=0;i < 20; i++){
            function make_circ(){
                svg1.appendChild(cir1);
            };
            make_circ();
        }
        //svg1.appendChild(cir1);
        return console.log('you did it!');
    }
}

function seqCircles(){

}
//To count how many circle elements are present at any given moment use: console.log(document.querySelectorAll('circle').length)

//=== Newer attempt with help from youtube tutorial
//let utils = {};
// let main = document.getElementByID('order');
// let svg = dom_utils.createSVG({
//     type: 'svg',
//     id: 'mainSVG',
//     width: '100%',
//     height: '100%'
// });
var vw = window.innerWidth;
var vh = window.innerHeight;
var middle = vw.valueOf()/2;
var middleH = vh.valueOf()/2;
//var delta_circ = getWidth()/5;
var delta_circ = vw.valueOf()/5;
//OR... var delta_circ = 30;
//var max_circ = getWidth()*1.2;
var max_circ = vw.valueOf()*1.2;
var delta_circ = vw.valueOf()*1.2;
var start_circ = 2;
//var next_circ = last circle width - delta_circ (only for any circle after first)
var first_end_circ = max_circ;
var max_circ_count = 5;
//OR... var max_circ_count = getWidth()/32;
//OR... var max_circ_count = max_circ/delta_circ;

//main.appendChild(svg);

// let circle = dom_utils.createSVG({
//     type:'circle',
//     class:'great-circle',
//     attrs: {
//        id:'myCircle',
//        cx:'125',
//        cy:'125',
//        r:'180',
//        stroke:'#004369',
//        fill:'#DB1F48',
//        strokeWidth:3,
//     }
// });
//svg.appendChild(circle);

function clicked(main) {
    const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg1. setAttribute ("width", "100" );
    svg1. setAttribute ("height", "100" );
    svg1. setAttribute ("viewBox", "0 0 300 300" );
    const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cir1.setAttribute("cx", middle );
    cir1.setAttribute("cy", middleH );
    cir1.setAttribute("r", 500);
    return console.log('you did it!');
}
//var mid_button = document.getElementByID('button');
// el.addEventListener(click,clicked(),false);
// mid_button.addEventListener("click", function() {
//     alert("is this the right way");
// })
// mid_button.onclick = function() {
//     alert("button was clicked");
// };

//=== Array attempt/Logic
//=== If array = 0 or [0], then generate circles
//=== when creating the concentric circles (no fill)
//=== If array length/count is > 0, then generate ripple animation (shrink grow stroke in sequence flowing outward)
//=== possible toggleClass in sequence i+200ms (will need to modify stroke-width in css @keyframes animation)
//===  Older attempt below
// document.getElementById('button').onclick(clicked);

// const button=document.getElementByType('button');

// function clicked(button.onclick()) {
//     return true

// }
// function generateWaves(){
//     if (document.button.child == 0){
//         for(i=1;i>x;i++){
//             button.appendChild();
//         }
//     }
// }

// function clicked(e) {
//     Event.preventDefault;
//     if (button.clicked == true){
//         this.addClass('wave');
//     } else {
//         generateWaves();
//     }

// };

// function wave() {
//     if(document.getElementById('button').clicked == true)
//     {
//         alert("button was clicked");
//     } else {
//         return false;
//     }
// };