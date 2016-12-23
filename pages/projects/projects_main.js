
var fadeInTime = 500;
var fadeOutTime = 500;

function main() {
    $("body").fadeIn(fadeInTime);


    $("#dat_boi_td").click(function(eventHandler){
        redirect = "./dat_boi/dodge_meme.html";
        eventHandler.preventDefault();
        $('body').fadeOut(fadeOutTime, function(){
            document.location.href = redirect;
          });
    });

    $("#nerd_purity_td").click(function(eventHandler){
        redirect = "./NerdPurity/nerd_purity.html";
        eventHandler.preventDefault();
        $('body').fadeOut(fadeOutTime, function(){
            document.location.href = redirect;
          });
    });

    $("#twitch_bot_td").click(function(eventHandler){
        eventHandler.preventDefault();
        $('body').fadeOut(fadeOutTime, function(){
            window.location = "https://github.com/jtjanecek/TwitchBot";
          });
    });

    $("#bling_td").click(function(eventHandler){
        eventHandler.preventDefault();
        $('body').fadeOut(fadeOutTime, function(){
            window.location = "https://github.com/jtjanecek/Bling";
          });
    });

    $("#odds_td").click(function(eventHandler){
        eventHandler.preventDefault();
        $('body').fadeOut(fadeOutTime, function(){
            window.location = "https://play.google.com/store/apps/details?id=com.fourbolt.odds";
          });
    });

};




$(document).ready(main);
