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
    var arrayHTML = array.map(function(text, index) {
      return "<li id=" + index + "><div>" + text + "</div></li>";
    });
      var string = arrayHTML.join('');
      return ulString = "<ul>" + string + "</ul>";
    };

  NoteListView.prototype.notesToStringTwenty = function() {
    array = this.notesToArray();
    var array2 = array.map(function(string){
      return string.substring(0, 20);
    });
    var arrayHTML = array2.map(function(text, index) {
      return "<li id=" + index + "><div>" + text + "</div></li>";
    });
    var string = arrayHTML.join('');
    return ulString = "<ul>" + string + "</ul>";
  };

  NoteListView.prototype.urlStringTwenty = function() {
    array = this.notesToArray();
    var array2 = array.map(function(string){
      return string.substring(0, 20);
    });
    var arrayHTML = array2.map(function(text, index) {
      return "<a href=#" + index + ">" + text + "</a><br>";
    });
    var string = arrayHTML.join('');
    return  string;
  };

  exports.NoteListView = NoteListView;
})(this);
