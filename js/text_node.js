/**
 * TextNode to handle plain text dialog
 *
 * @param id        The id of the text node
 * @param prev_id   The parent id
 * @param text      The text of the node
 * @param index     The global index // TODO: Remove this
 * @constructor
 */
function TextNode(id, prev_id, text, index) {
    // Initialise the object
    this.id = id;
    this.prev_id = prev_id;
    this.text = text;
    this.list_index = index;

    /**
     * Create some HTML to load into the main page
     */
    this.create = function () {
        var new_text_node = "" +
            "<div class='input-group spaced' id='text-node-" + this.id + "'>" +
            "   <span class='input-group-addon'>PREVIOUS: " + this.prev_id + "</span> " +
            "   <span class='input-group-addon'>T</span> " +
            "   <input type='text' class='form-control' placeholder='Text' aria-describedby='sizing-addon2'>" +
            "   <span id='text-node-buttons-'" + this.id + "' class='input-group-btn'>" +
            "       <button type='button' class='btn btn-secondary new-button-" + this.id + " +'>+Q</button>" +
            "       <button type='button' class='btn btn-secondary new-button-" + this.id + " +' onclick='new_text_node(" + this.list_index + ")'>+T</button>" +
            "   </span>" +
            "</div>";

        // Replace the new buttons with the new text
        $("#tree-outer-container").append(new_text_node);
    };

    /**
     * Update the TextNode variables
     */
    this.update = function () {
        // Update placeholder
    };

    /**
     * Text nodes only have one available answer so we need to disable the buttons
     */
    this.disable_buttons = function () {
        $(".new-button-" + this.id).prop("disabled", true);
    }


}