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
})(this);

    noteController = new NoteController();
    noteController.htmlInserter();


makeUrlChangeShowNoteForCurrentPage();

function makeUrlChangeShowNoteForCurrentPage(){
  window.addEventListener("hashchange", showNotesForCurrentPage);
}

function showNotesForCurrentPage(){
  showNote(getNoteFromUrl(window.location));
}

function getNoteFromUrl(location){
  return location.hash.split("#")[1];
}

function showNote(note) {
  document
    .getElementById("note")
    .innerHTML = note;
}
