(function(exports) {
  function NoteListView(noteList = new NoteList()) {
    this.noteList = noteList;
  }

  NoteListView.prototype.notesToArray = function() {
    var array = this.noteList.showNotes().map(function(note) {
      return note.showContents();
    });
    return array;
  };

  NoteListView.prototype.notesToString = function() {
    array = this.notesToArray();
    var ul = document.createElement("ul");
    var arrayHTML = array.map(function(text, index) {
      return "<li id=" + index + "><div>" + text + "</div></li>";
    });
     ul.innerHTML = arrayHTML.join('');
     return ul
    };

  NoteListView.prototype.notesToStringTwenty = function() {
    array = this.notesToArray();
    var array2 = array.map(function(string){
      return string.substring(0, 20);
    });
    return "<ul><li><div>" + array2.join( '</li></div><li><div>') + "</div></li></ul>";
  };

  exports.NoteListView = NoteListView;
})(this);
