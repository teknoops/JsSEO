// Night Mode
$("#modedark").click(function(){$("body").toggleClass("Night")}),$("body").toggleClass(localStorage.toggled),$("#modedark").click(function(){"Night"!=localStorage.toggled?($("body").toggleClass("Night",!0),localStorage.toggled="Night"):($("body").toggleClass("Night",!1),localStorage.toggled="")});
// Anti Inspek Elemen
!function t(){try{!function t(n){1===(""+n/n).length&&0!==n||function(){}.constructor("debugger")(),t(++n)}(0)}catch(n){setTimeout(t,5e3)}}();
// CTRL U
document.onkeydown = function (cc) {if(cc.which == 85){return false;}}
