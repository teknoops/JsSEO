// Search form
$(function(){$('a[href="#searchla"]').on("click",function(e){e.preventDefault(),$("#searchla").addClass("open"),$('#searchla > form > input[type="search"]').focus()}),$("#searchla, #searchla button.close").on("click keyup",function(e){e.target!=this&&"close"!=e.target.className&&27!=e.keyCode||$(this).removeClass("open")})});
// nav menu
!function(n){n.fn.menumaker=function(s){var e=n(this),i=n.extend({format:"dropdown",sticky:!1},s);return this.each(function(){return n(this).find(".buttonx").on("click",function(){n(this).toggleClass("menu-opened");var s=n(this).next("ul");s.hasClass("open")?s.slideToggle().removeClass("open"):(s.slideToggle().addClass("open"),"dropdown"===i.format&&s.find("ul").show())}),e.find("li ul").parent().addClass("has-sub"),multiTg=function(){e.find(".has-sub").prepend('<span class="submenu-button"></span>'),e.find(".submenu-button").on("click",function(){n(this).toggleClass("submenu-opened"),n(this).siblings("ul").hasClass("open")?n(this).siblings("ul").removeClass("open").slideToggle():n(this).siblings("ul").addClass("open").slideToggle()})},"multitoggle"===i.format?multiTg():e.addClass("dropdown"),!0===i.sticky&&e.css("position","fixed"),resizeFix=function(){n(window).width()>1e3&&e.find("ul").show(),n(window).width()<=1e3&&e.find("ul").hide().removeClass("open")},resizeFix(),n(window).on("resize",resizeFix)})}}(jQuery),function(n){n(document).ready(function(){n("#csxmenus").menumaker({format:"multitoggle"})})}(jQuery);
// Night Mode
$("#modedark").click(function(){$("body").toggleClass("Night")}),$("body").toggleClass(localStorage.toggled),$("#modedark").click(function(){"Night"!=localStorage.toggled?($("body").toggleClass("Night",!0),localStorage.toggled="Night"):($("body").toggleClass("Night",!1),localStorage.toggled="")});
// Anti Inspek Elemen
!function t(){try{!function t(n){1===(""+n/n).length&&0!==n||function(){}.constructor("debugger")(),t(++n)}(0)}catch(n){setTimeout(t,5e3)}}();
// CTRL U
document.onkeydown = function (cc) {if(cc.which == 85){return false;}}
