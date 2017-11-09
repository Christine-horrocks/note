(function(exports) {
  function addSingleNoteAsParam() {
    var singleNoteView = new SingleNoteView();
    singleNoteView.addSingleNote("Hello");
    assert.isTrue(singleNoteView.note._text === "Hello");
  }
  addSingleNoteAsParam();

  function returnsStringOfHtmlOnCommand() {
    var singleNoteView = new SingleNoteView();
    singleNoteView.addSingleNote("Hello");
    assert.isTrue(singleNoteView.returnSingleNoteHtml() === "<ul><li><div>Hello</div></li></ul>");
  }
  returnsStringOfHtmlOnCommand();
})(this);
