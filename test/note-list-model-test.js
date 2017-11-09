(function(exports) {
  function noteList() {
    var noteList = new NoteList();
    assert.isTrue(noteList = new NoteList());
  }

  noteList();

  function testNoteListInstantiation() {
    var noteList = new NoteList();
    assert.isTrue(Array.isArray(noteList.showNotes()));
  }

  testNoteListInstantiation();

  function showsAllNotes() {
    var noteList = new NoteList();
    noteList.addNote("My favourite language is Javascript.");
    assert.isTrue(noteList.showNotes().pop().showContents() === "My favourite language is Javascript.");
  }

  showsAllNotes();
})(this);
