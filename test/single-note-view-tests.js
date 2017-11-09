(function(exports) {
  function addSingleNoteAddNote() {
    var singleNoteView = new SingleNoteView();
    singleNoteView.addSingleNote("Hello");
    assert.isTrue(singleNoteView.note._text === "Hello");
  }
  addSingleNoteAddNote();

  function returnsStringOfHtmlOnCommand() {
    var singleNoteView = new SingleNoteView();
    singleNoteView.addSingleNote("Hello");
    assert.isTrue(singleNoteView.returnSingleNoteHtml() === "<ul><li><div>Hello</div></li></ul>");
  }
  returnsStringOfHtmlOnCommand();
})(this);
