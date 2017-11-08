(function(exports){
  function createNoteController(){
    var noteController = new NoteController();
    assert.isTrue(noteController = new NoteController());
  }

  function htmlInserterChangesDiv(){
    noteController = new NoteController();
    noteController.htmlInserter()
    assert.isTrue(document.getElementById('app') === "<ul><li><div>I like lemonade</div></li></ul>");
  }

})(this);
