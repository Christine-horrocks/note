(function(exports) {

  function saveNote() {
    var note = new Note("My favourite language is Javascript.");
    assert.isTrue(note._text === "My favourite language is Javascript.");
  }
  saveNote();

  function printsNote() {
    var note = new Note("My favourite language is Javascript.");
    assert.isTrue(note.showContents() === "My favourite language is Javascript.");
  }
  printsNote();

})(this);
