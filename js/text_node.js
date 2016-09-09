/**
 * Handles text dialogues which have only one possible outcome
 *
 * @param name  Name of the owner of the dialog
 * @param text  The actual dialog
 * @param prev  The previous node (just for reference sake)
 * @param next  The next node
 */
var text_node = function (name, text, prev, next) {

    // Construct the object
    this.name = name;
    this.text = text;
    this.previous = prev;
    this.next = next;
    this.type = "text";

};