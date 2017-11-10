(function(exports) {
  function htmlInserterChangesDiv() {
    noteController = new NoteController();
    noteController.htmlInserter();
    var element = document.getElementById('app').textContent;
    assert.isTrue( element  === "I like lemonade");
  }

  htmlInserterChangesDiv();
})(this);
