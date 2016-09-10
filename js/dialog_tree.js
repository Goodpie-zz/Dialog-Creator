var question_nodes = [];
var text_nodes = [];
var text_node_count = 0;

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
            "   <button type='button' class='btn btn-primary' onclick='new_text_node(null)'>New Text</button>" +
            "   <button type='button' class='btn btn-primary'>New Question</button>" +
            "</div>";

        //Replace the add_buttons
        $("#tree-outer-container").html(add_buttons);

        // Set the title
        $("#dialog-title").html(title);
        $("#new-dialog-name").html(""); // TODO: Fix issue where html isn't being replaced

    }
};


/**
 * Creates a new text node
 *
 * @param prev_index
 */
var new_text_node = function (prev_index) {

    // Increment the total number of text_nodes
    text_node_count += 1;

    // Check if first node or not
    var prev_id = 0;
    if (prev_index != null) {
        // Not first node so collect previous node information
        var prev_node = text_nodes[prev_index];
        prev_id = prev_node.id;

        // Disable the new buttons on the previous node
        prev_node.disable_buttons();
    }

    // Push the new node to the global array
    var new_node = new TextNode(text_node_count, prev_id, "", text_nodes.length);
    text_nodes.push(new_node);

    // Call the create function to add the HTML
    new_node.create();

};