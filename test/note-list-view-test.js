(function(exports) {
  function returnsStringOfHTML() {
    var noteListView = new NoteListView();
    noteListView.noteList.addNote("Favourite food: pesto");
    noteListView.noteList.addNote("Favourite drink: Sloe Gin");
    console.log(noteListView.notesToString())
    assert.isTrue(noteListView.notesToString() === '<li id="0"><div>Favourite food: pesto</div></li><li id="1"><div>Favourite drink: Sloe Gin</div></li>');
  }

  returnsStringOfHTML();

  function returnsStringOfHTMLMaxTwenty() {
    var noteListView = new NoteListView();
    noteListView.noteList.addNote("Favourite food: pesto");
    noteListView.noteList.addNote("Favourite drink: Sloe Gin");
    assert.isTrue(noteListView.notesToStringTwenty() === "<ul><li><div>Favourite food: pest</li></div><li><div>Favourite drink: Slo</div></li></ul>");
  }

  returnsStringOfHTMLMaxTwenty();
})(this);
