/*
 * Fixes https://github.com/tinymce/tinymce/issues/6103
 */
(function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');
  function init(editor) {
    editor.on('keydown', function (event) {
      if (event.key !== 'Backspace') return;
      if (event.metaKey || event.shiftKey || event.altKey || event.ctrlKey) return;
      var currentNode = editor.selection.getNode();

      // Assert the user is within a blockquote
      var blockquoteNode = editor.dom.getParent(currentNode, 'blockquote');
      if (!blockquoteNode) return;
      var currentSelection = editor.selection.getRng();
      // Return if user has highlighted text
      if (currentSelection.startOffset !== currentSelection.endOffset) return;
      var isSelectionAtStart = currentSelection.startOffset === 0;
      // Assert the cursor is at the start of a line within the blockquote
      if (!isSelectionAtStart) return;

      // Exit the blockquote if a delete happens on an empty line
      var lineText = currentNode.innerText;

      // Don't split the blockquote if there's a previous node and the current line has text
      var prevNode = editor.dom.getPrev(currentNode, '*');
      if (prevNode && lineText !== '\n') return;

      // Create a new paragraph containing the current line text
      var newParagraph = editor.dom.create('p', {}, lineText === '\n' ? '<br/>' : lineText);
      editor.undoManager.transact(() =>
      // Split the blockquote and insert the new paragraph
      editor.dom.split(blockquoteNode, currentNode, newParagraph));

      // Move the users cursor to the start of the new paragraph
      editor.selection.setCursorLocation(newParagraph, 0);
      event.preventDefault();
    });
  }
  function Plugin() {
    global.add('blockquotepatch', function (editor) {
      init(editor);
      return {};
    });
  }
  Plugin();
})();