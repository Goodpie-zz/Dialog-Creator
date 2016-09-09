/**
 * Question node
 *
 * @param text      The title of the question
 * @param prev      The previous node
 * @param answers   All possible answers (just plane text nodes)
 */
var question_node = function (text, prev, answers) {

    // Construct the object
    this.text = text;
    this.prev = prev;
    this.answers = answers;

};