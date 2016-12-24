
var fadeInTime = 1500;
var fadeOutTime = 500;

function main() {
    $("body").fadeIn(fadeInTime);

    $("#projects_td").click(function(eventHandler){
      redirect = "./pages/projects/projects.html";
      eventHandler.preventDefault();
      $('body').fadeOut(fadeOutTime, function(){
          document.location.href = redirect;
        });
    });

    $("#experience_td").click(function(eventHandler){
      redirect = "./pages/experience/experience.html";
      eventHandler.preventDefault();
      $('body').fadeOut(fadeOutTime, function(){
          document.location.href = redirect;
        });
    });

    $("#more_td").click(function(eventHandler){
      redirect = "./pages/more/more.html";
      eventHandler.preventDefault();
      $('body').fadeOut(fadeOutTime, function(){
          document.location.href = redirect;
        });
    });

};




$(document).ready(main);
