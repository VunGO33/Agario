// ==UserScript==
// @name         VunGO 0.03 beta
// @namespace    http://tampermonkey.net/
// @version      0.03 beta
// @description  a Test extention for youtubers
// @author       VunGO YouTube
// @match        http://agar.io/
// @require      http://pastebin.com/raw/d5EaRc7y
// @run-at       document-start
// @grant        none
// ==/UserScript==
 
//waits for the page to load

    
window.onload = function() {
    

    window.agar.minScale = -30;
     
    $("#nick").val(" VunGO YouTube "); // SET YOUR NAME HERE- / MAIS TON NOM ICI / ???? ???? ???  
    
(function() {
    var amount = 6;
    var duration = 50; //ms

    var overwriting = function(evt) {
        if (evt.keyCode === 69) { // KEY_E
            for (var i = 0; i < amount; ++i) {
                setTimeout(function() {
                    window.onkeydown({keyCode: 87}); // KEY_W
                    window.onkeyup({keyCode: 87});
                }, i * duration);
            }
        }
    };

    window.addEventListener('keydown', overwriting);
})();
    
    $(
    function() {
        var feeddown = $.Event("keydown", { keyCode: 32}); //w button
        var feedup = $.Event("keyup", { keyCode: 32}); //w button
        var splitdown = $.Event("keydown", { keyCode: 87}); //space button
        var splitup = $.Event("keyup", { keyCode: 87}); //space button
        $(document).bind('mousedown', function(e) {
            if( (e.which == 3) ){
                $("body").trigger(feeddown);
                $("body").trigger(feedup);
                //console.log("feed");
            }
            else if( (e.which == 1) ){
                $("body").trigger(splitdown);
                $("body").trigger(splitup);
                //console.log("split");
            }
        }).bind('contextmenu', function(e){
            e.preventDefault();
        });
        //alert("mouse enabled");
    }
)();
    
  

}

  // Userscript code, please do not touch unless you know what you're doing.
// Add custom css function

function addStyleSheet(style){
  var getHead = document.getElementsByTagName("HEAD")[0];
  var cssNode = window.document.createElement( 'style' );
  var elementStyle= getHead.appendChild(cssNode)
  elementStyle.innerHTML = style;
  return elementStyle;
}

// Import Bootstrap Paper and Fontawesome using custom css function

addStyleSheet('@import "http://bootswatch.com/paper/bootstrap.css"; @import "http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"; html * { font-family: Raleway, sans-serif; }'); 

// At first time opening agar.io with this userscript, alert user.

        var alerted = localStorage.getItem('alerted') || '';
        if (alerted != 'yes') {
         alert("Make sure you have the Charts & Stats userscript installed for ingame statistics! Check the description on Greasyfork for more info.");
         localStorage.setItem('alerted','yes');
        }

// Connect to IP & Reconnect
$(document).ready(function() {
    var region = $("#region");
    if (region.length) {
        $("<br/><div class=\"input-group\"><div class=\"form-group\"><input id=\"serverInput\" class=\"form-control\" placeholder=\"255.255.255.255:443\" maxlength=\"20\"><span class=\"input-group-btn\"> &<button id=\"connectBtn\" class=\"btn-needs-server btn btn-warning\" style=\"width: 80px\" onclick=\"connect('ws://' + $('#serverInput').val());\" type=\"button\">Join</button><button id=\"connectBtn\" class=\"btn-needs-server btn btn-info\" style=\"width: 80px\" onclick=\"connect('ws://' + $('#serverInput').val());\" type=\"button\"><span class=\"fa fa-lg fa-refresh\"></span></button>  </input></div>").insertAfter("#helloDialog > form > div:nth-child(3)");
    }
});

// Remove instructions text 

var elmDeleted = document.getElementById("instructions");
	elmDeleted.parentNode.removeChild(elmDeleted);


// Import Raleway font from Google Fonts

 WebFontConfig = {
    google: { families: [ 'Raleway::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 

// ------------------------------------------------------
// End of userscript
// ------------------------------------------------------