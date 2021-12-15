"use strict";
window.onload = function () {
    var main = document.getElementById('order'),
        btn = document.getElementById('button'),
        svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        vw = window.innerWidth,
        vh = window.innerHeight,
        vw2 = vw/1.33,
        cirCount = vw2/22;
    let clickCount = 0;
    
    btn.addEventListener("click", function() {
        clickCount += 1;
        if (clickCount <= 1){
            main.append(svg1);
            svg1.setAttribute("width","100%");
            svg1.setAttribute("height","100%");
            for (var i=0;i < cirCount; i++) {
                drawCircles();
            }
            function drawCircles(){
                var cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                cir.setAttribute("cx",vw/2)
                cir.setAttribute("cy",vh/2);
                cir.setAttribute("r",i*20);
                cir.setAttribute("class","circle");
                setTimeout(function(){
                    svg1.appendChild(cir);
                },i*40);
            };
        }

        else {
            var cirS = document.querySelectorAll('.circle');
            for (var i = 0;i < cirS.length;i++){
                (function(i){
                    setTimeout(function(){
                        cirS[i].setAttribute("class","circle fade1");
                        setTimeout(function(){
                            cirS[i].setAttribute("class","circle");
                        },i*30);
                    },i*15);
                }(i));
            }
        }
        return console.log(clickCount);
    });
}