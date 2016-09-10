var DialogTree = function () {
    this.nodes = [];
};

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

DialogTree.prototype.newNode = function (prev, type) {

    // Remove initial buttons if first
    if (this.nodes.length === 0) {
        $("#initial-create-buttons").html("");
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
    for (var outterNode in this.nodes) {
        var searchID = outterNode.id;
        var isQuestion = false;

        // Handle all possible answers in an array
        if (outterNode.type === "Q") {
            isQuestion = true;
            var allAnswers = [];
        }

        var found = false;

        for (var innerNode in this.nodes) {
            if (innerNode.prevNode === searchID) {
                found = true;
                if (isQuestion) {
                    allAnswers.push(innerNode.id);
                }
                else {
                    outterNode.setNextNode(innerNode.id);
                }
            }
        }

        if (isQuestion) {
            outterNode.setNextNode(allAnswers);
        }

    }

    var finalOutput = {
        "title": this.title,
        "tree": this.nodes
    };

    console.log(JSON.stringify(finalOutput));

};

dialogTree = new DialogTree();

