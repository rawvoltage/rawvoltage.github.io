$(document).ready(function () {

    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();

    //    var listener = new window.keypress.Listener();
    //    
    //    listener.simple_combo("shift s", function(e) {
    //        e.preventDefault();
    ////        $('.test')is(":focus");
    //        alert('test');
    //    });

    $('.todo, .edit-area').click(function () {
        var value_of_todo = $(this).text();
        //        alert(value_of_todo);
        $(this).html('<textarea class="edit-area">' + value_of_todo + '</textarea>');
        $('.edit-area').focus();
        //        value_of_todo = 0;

        $('.todo, .edit-area').blur(function () {
            var edited_todo = $(this).val();
            //            alert(edited_todo);
            //            $(this).remove();
            $('.todo-footer').html('<li>' + edited_todo + '</li>');
            //            edited_todo = null;

        });
        //        alert(value_of_todo);
    });

    $('.submit-button').click(function (e) {
        var current_todo = $('.new-todo-field').val();
        alert(current_todo);
        $('.todo-footer').prepend('<li>' + current_todo + '</li>');
        $('.new-todo-field').val('');
        return false;
    });

    console.log('test');
    //    for (name in app.controller);
    //        if(app.controller.hasOwnProperty(name)) {
    //            var value = data[key];
    //            console.log(value);
    //        };
    //    var myObject = JSON.parse(app.controller());
    //    var nodeObject = util.inspect(app.controller);
    //    console.log(myObject);
    //    console.log(app.controller());
});

// click li
// get value
// place value in var
//