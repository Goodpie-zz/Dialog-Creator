/**
 * Handles the nodes (text items) for the dialog tree
 *
 * @param id                The ID of the text node
 * @param prevNode          The ID of the previous node
 * @param type              The type of node the object represented by a single character
 * @constructor
 */
var Node = function (id, prevNode, type) {
    this.id                 = id;
    this.prevNode           = prevNode;
    this.nextNode           = null;
    this.type               = type;
    this.text               = "";


    this.parentContainer    = $("#tree-outer-container")
};

/**
 * Creates some basic HTML layout of the new text entries for the new node
 */
Node.prototype.create = function () {

    // Create a basic HTML layout for the new Node
    var newNode = "" +
        "<div class='input-group spaced' id='node-" + this.id + "'>" +
        "   <div class='input-group-btn'>" +
        "       <button type='button' class='btn btn-danger'> ID: " + this.id + "</button>" +
        "       <button type='button' class='btn btn-primary'> PREV: " + this.prevNode + "</button>" +
        "   </div>" +
        "   <span class='input-group-addon'>" + this.type + "</span> " +
        "   <input type='text' class='form-control' placeholder='Text' id='node-"+ this.id +"-text' aria-describedby='sizing-addon2'>" +
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
Node.prototype.update = function ()
{

};

/**
 * Disables the buttons associated with the Node layout
 */
Node.prototype.disableAddButtons = function ()
{
    $(".new-button-" + this.id).prop("disabled", true);
};

/**
 * Sets the text to that which is stored within the text input associated with the node
 */
Node.prototype.setTextFromForm = function ()
{
    var text = $("#node-" + this.id + "-text");
    this.text = text.val();
};

/**
 *
 * @param node The previous node
 */
Node.prototype.setPrevNode = function (node)
{
    this.PrevNode = node;
};

/**
 *
 * @param node The next node(s)
 */
Node.prototype.setNextNode = function (node)
{
    this.nextNode = node;
};

/**
 *
 * @param text The text of the question node
 */
Node.prototype.setText = function (text)
{
    this.text = text;
};

/**
 * ACCESSORS
 */

/**
 *
 * @returns {*} The ID of the node
 */
Node.prototype.getID = function()
{
    return this.id;
};


/**
 *
 * @returns {*} The type of node ('Q' or 'T')
 */
Node.prototype.getType = function()
{
    return this.type;
};

/**
 *
 * @returns {*} The previous parent node
 */
Node.prototype.getPrevNode = function ()
{
    return this.prevNode;
};

/**
 *
 * @returns {*|null} The next node
 */
Node.prototype.getNextNode = function ()
{
    return this.nextNode;
};

/**
 *
 * @returns {JQuery|any|*|string} The question associated with the node
 */
Node.prototype.getText = function ()
{
    return this.text;
};

