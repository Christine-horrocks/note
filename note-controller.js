(function(exports) {

  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);

    noteList.addNote("I like lemonade");

  }

    NoteController.prototype.htmlInserter = function() {
      var htmlString = this.noteListView.notesToString();
      var element = document.getElementById('app');
      element.innerHTML = htmlString;

    };

    exports.NoteController = NoteController;

    noteController = new NoteController();

    noteController.htmlInserter();

})(this);
