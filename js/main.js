$(document).ready(function() {
    // fullpage //
    $('#fullpage').fullpage({
        menu: true,
        controlArrows: false
    });
    
    var myObject = JSON.stringify(app.controller());
//    var nodeObject = util.inspect(app.controller);
    console.log(myObject)
    console.log(app.controller());
});