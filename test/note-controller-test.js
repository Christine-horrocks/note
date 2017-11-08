(function(exports){
  function createNoteController(){
    var noteController = new NoteController();
    assert.isTrue(noteController = new NoteController());
  }
  createNoteController();

  function htmlInserterChangesDiv(){
    noteController = new NoteController();
    noteController.htmlInserter();
    // console.log(document.getElementById('app'))
    var element = document.getElementById('app');
    assert.isTrue( element.innerHTML  === "<ul><li><div>I like lemonade</div></li></ul>");
  }
  htmlInserterChangesDiv();

})(this);
