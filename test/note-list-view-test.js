(function(exports) {
  function returnsStringOfHTML() {
    var noteListView = new NoteListView();
    noteListView.noteList.addNote("Favourite food: pesto");
    noteListView.noteList.addNote("Favourite drink: Sloe Gin");
    assert.isTrue(noteListView.notesToString() === "<ul><li id=0><div>Favourite food: pesto</div></li><li id=1><div>Favourite drink: Sloe Gin</div></li></ul>");
  }

  returnsStringOfHTML();

  function returnsStringOfHTMLMaxTwenty() {
    var noteListView = new NoteListView();
    noteListView.noteList.addNote("Favourite food: pesto");
    noteListView.noteList.addNote("Favourite drink: Sloe Gin");
    assert.isTrue(noteListView.notesToStringTwenty() === "<ul><li id=0><div>Favourite food: pest</div></li><li id=1><div>Favourite drink: Slo</div></li></ul>");
  }

  returnsStringOfHTMLMaxTwenty();

  function returnsUrlStringOfTwenty() {
    var noteListView = new NoteListView();
    noteListView.noteList.addNote("Favourite food: pesto");
    noteListView.noteList.addNote("Favourite drink: Sloe Gin");
    assert.isTrue(noteListView.urlStringTwenty() === "<a href=#0>Favourite food: pest</a><br><a href=#1>Favourite drink: Slo</a><br>");
  }

  returnsUrlStringOfTwenty();
})(this);
