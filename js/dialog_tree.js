var question_nodes = [];
var text_nodes = [];


// Enable popover affect from Bootstrap
$(function () {
    $('[data-toggle="popover"]').popover()
});

/**
 * Initialization function. Will get the name of the dialog tree and start the creation process
 */
var create = function () {

    // Check for valid title
    var title = $("#new-dialog-name").val();
    if (title === "") {
        // Null title, show error
        $("#new-button").popover('show'); // Show error message to the user
    }
    else {
        // First replace the dialog header with a static text info display
        // Create the buttons to add text or questions
        var add_buttons = "" +
            "<div class='btn-group btn-group-sm spaced'>" +
            "   <button type='button' class='btn btn-primary' onclick='create_text_node(\"\")'>New Text</button>" +
            "   <button type='button' class='btn btn-primary'>New Question</button>" +
            "</div>";

        $("#tree-outer-container").html(add_buttons);

        // Set the title
        $("#dialog-title").html(title);
        $("#new-dialog-name").html(""); // TODO: Fix issue where html isn't being replaced

    }
};

var create_text_node = function (prev) {
    // Create a new text input that has information about the previous and current
    // TODO: Add more information and a unique ID for the user to reference
    var new_text_node = "" +
        "<div class='input-group spaced'>" +
        "   <span class='input-group-addon'>T</span> " +
        "   <input type='text' class='form-control' placeholder='Text' aria-describedby='sizing-addon2'>" +
        "   <span class='input-group-btn'>" +
        "       <button type='button' class='btn btn-secondary'>+Q</button>" +
        "       <button type='button' class='btn btn-secondary'>+T</button>" +
        "   </span>" +
        "</div>";

    // Replace the new buttons with the new text
    $("#tree-outer-container").html(new_text_node);
};


