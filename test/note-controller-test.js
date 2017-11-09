(function(exports) {
  function htmlInserterChangesDiv() {
    noteController = new NoteController();
    noteController.htmlInserter();
    var element = document.getElementById('app');
    assert.isTrue( element.innerHTML  === "<ul><li><div>I like lemonade</div></li></ul>");
  }

  htmlInserterChangesDiv();
})(this);
