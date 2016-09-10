/**
 * Handles the nodes (text items) for the dialog tree
 *
 * @param id                The ID of the text node
 * @param prevNode          The ID of the previous node
 * @param type              The type of node the object represented by a single character
 * @constructor
 */
var Node = function (id, prevNode, type) {
    this.id = id;
    this.prevNode = prevNode;
    this.type = type;
    this.text = "";
    this.nextNode = null;

    this.parentContainer = $("#tree-outer-container")
};

/**
 * Creates some basic HTML layout of the new text entries for the new node
 */
Node.prototype.create = function () {

    // Create a basic HTML layout for the new Node
    var newNode = "" +
        "<div class='input-group spaced' id='node-" + this.id + "'>" +
        "   <span class='input-group-addon'>" + this.prevNode + "</span> " +
        "   <span class='input-group-addon'>" + this.id + "</span> " +
        "   <span class='input-group-addon'>" + this.type + "</span> " +
        "   <input type='text' class='form-control' placeholder='Text' aria-describedby='sizing-addon2'>" +
        "   <span class='input-group-btn'>" +
        "       <button type='button' class='btn btn-secondary new-button-" + this.id + " +' onclick='dialogTree.newNode(" + this.id + ", \"Q\")'>+Q</button>" +
        "       <button type='button' class='btn btn-secondary new-button-" + this.id + " +' onclick='dialogTree.newNode(" + this.id + ", \"T\")'>+T</button>" +
        "   </span>" +
        "</div>";

    this.parentContainer.append(newNode); // Append the new node to the container

};

/**
 * Handles the updating of the nodes
 */
Node.prototype.update = function () {

};

/**
 * Disables the buttons associated with the Node layout
 */
Node.prototype.disableAddButtons = function () {
    $(".new-button-" + this.id).prop("disabled", true);
};

Node.prototype.setNextNode = function (value) {
    this.nextNode = value;
};