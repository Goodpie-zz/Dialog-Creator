var DialogTree = function () {
    this.nodes = [];
};

/**
 * Creates the initial dialog tree UI
 */
DialogTree.prototype.create = function () {

    // Ensure the title isn't null before beginning
    var title = $("#new-dialog-name").val();
    if (title === "") {
        // Display error message
    }
    else {
        // Create the initial add buttons
        var add_buttons = "" +
            "<div id='initial-create-buttons' class='btn-group btn-group-sm spaced'>" +
            "   <button type='button' class='btn btn-primary' onclick='dialogTree.newNode(-1, \"T\")'>New Text</button>" +
            "   <button type='button' class='btn btn-primary' onclick='dialogTree.newNode(-1, \"Q\")'>New Question</button>" +
            "</div>";

        $("#tree-outer-container").html(add_buttons);
        $("#dialog-title").html(title);
    }
};

/**
 * Resets the current status of the dialog tree
 */
DialogTree.prototype.reset = function () {

    this.nodes = [];
    this.create();

};

/**
 * Creates a new Node
 *
 * @param prev  The parent node
 * @param type  The type of new node
 */
DialogTree.prototype.newNode = function (prev, type) {

    // Remove initial buttons if first
    if (this.nodes.length === 0) {
        $("#initial-create-buttons").html("");
    }
    else
    {
        // If previous node is a question, only one next node is available so disable the buttons
        var prevNode = this.nodes[prev];
        if (prevNode.getType() === "T")
        {
            prevNode.disableAddButtons();
        }
    }

    // Create a new Node and add it to the array
    var newNode = new Node(this.nodes.length, prev, type);
    newNode.create();
    this.nodes.push(newNode);

};


/**
 * Function to save all to JSON format
 */
DialogTree.prototype.saveAll = function () {

    // Loop through the tree and find all the "next" variables for better tracking
    for (var oi = 0; oi < this.nodes.length; oi ++) {
        var searchID = this.nodes[oi].getID();  // Target search ID
        var isQuestion = false;

        // Handle all possible answers in an array
        if (this.nodes[oi].getType() === "Q") {
            isQuestion = true;
            var allAnswers = [];
        }

        // TODO: add break
        for (var ii = 0; ii < this.nodes.length; ii ++) {
            if (this.nodes[ii].getPrevNode() === searchID) {
                if (isQuestion) {
                    allAnswers.push(this.nodes[ii].getID());
                }
                else
                {
                    this.nodes[oi].setNextNode(this.nodes[ii].getID());
                }
            }
        }

        // If the node is a question, we want to add all the answers
        if (isQuestion) {
            this.nodes[oi].setNextNode(allAnswers);
        }

        // Retrieve the text from the HTML form
        this.nodes[oi].setTextFromForm();

    }

    // Convert the final output to an object
    var finalOutput = {
        "title": this.title,
        "tree": this.nodes
    };

    console.log(finalOutput);   // For debugging

    // File I/O is illegal in Javascript so just have plain text in prompt
    // TODO: improve this method
    prompt("Save as a .json file", JSON.stringify(finalOutput));

};

dialogTree = new DialogTree();

