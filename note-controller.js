(function(exports) {

  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);

    noteList.addNote("I like lemonade");
    noteList.addNote("I like ducks");

  }

    NoteController.prototype.htmlInserter = function() {
      var ulString = this.noteListView.urlStringTwenty();
      var app = document.getElementById('app');
      app.innerHTML = ulString;

    };

    exports.NoteController = NoteController;

    noteController = new NoteController();

    noteController.htmlInserter();

})(this);
