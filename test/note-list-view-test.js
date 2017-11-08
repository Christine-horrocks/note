(function(exports){
  function createNoteListView(){
    var noteListView = new NoteListView();
    assert.isTrue(noteListView = new NoteListView());
  }

  createNoteListView();

  function takesNoteListOnInstantiation(){
    var noteListView = new NoteListView();
    assert.isTrue(noteListView.noteList = new NoteList());
  }

  takesNoteListOnInstantiation();

  function returnsStringOfHTML(){
    var noteListView = new NoteListView();
    noteListView.noteList.addNote("Favourite food: pesto");
    noteListView.noteList.addNote("Favourite drink: Sloe Gin");
    assert.isTrue(noteListView.notesToString() === "<ul><li><div>Favourite food: pesto</li></div><li><div>Favourite drink: Sloe Gin</div></li></ul>");
  }

  returnsStringOfHTML();
})(this);
