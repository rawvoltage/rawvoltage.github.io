$(document).ready(function() {
    var sound;
    
    $("#burger").click(function(e) {
        e.preventDefault();
        $("#options").toggleClass("open");
        $("#dim").toggleClass("open");
        $(this).toggleClass("animated shake");
        // on click get window height
        // set menu to window height
        sound.play();
    });
 
    function setup() 
    {
      createCanvas(200, 200);

      // initialize sounds
      soundFormats('mp3', 'ogg');
      sound = loadSound('Woosh-Mark_DiAngelo-4778593.mp3');

      // display instructions
      textAlign(CENTER);
      fill(100);
      noStroke();
      text("Click to play sound", width/2, height/2);
    }

    function draw()
    {

    }

    function mousePressed() 
    {
      // trigger sound
      sound.play();

      // change background color
      background(random(255), random(255), random(255));

}
    $("#dim").click(function() {
        $(this).removeClass("open");
        $("#options").removeClass("open");
        $("#burger").removeClass("animated shake");
    });
    
    $("#userMenu").click(function() {
        $("#settings").toggle("slide", {direction:'up'});
    });
    
    $('a').click(function(){ // animate the scrolling of a links
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

    $(".latestWork1Caption").click(function() {
        $(".latestWork1Caption p").toggle("slide", {direction:'down'});
    });
// jquery // 
    
    // progress bar | jquery UI //
//    $( "#progressbar" ).progressbar({
//        value: 37
//    });
    // progress bar | jquery UI //
    
    // skrollr // 
//    var s = skrollr.init();
    // skrollr //
    
    // fullpage //
    $('#fullpage').fullpage({
        menu: true,
        controlArrows: false
    });
    // fullpage //
    // snapsvg //
//    var ss = Snap();
//    var bigCircle = ss.circle(100, 100, 50);
    // snapsvg //
    
    // p5 //
//    function setup() {
//
//    };
//
//    function draw() {
//      ellipse(50, 50, 80, 80);
//    };
    //
    
    var userID = BasicProfile.getId();
    console.log(userID);
});
//        $("#clickme").click(function()
//            {
//            $("#clickme").animate
//                ({
//                    opacity: 0.25,
//                    left: "+=50",
//                    height: "toggle"
//                }, 5000,
//                 function()
//                {
//                    // Animation complete.
//                });
//            });