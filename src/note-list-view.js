(function(exports){
  function NoteListView(noteList = new NoteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.notesToArray = function(){
    var array = this.noteList.showNotes().map(function(note) {
      return note.showContents();
    })
    return array
  };

  NoteListView.prototype.notesToString = function() {
    array = this.notesToArray()
    return "<ul><li><div>" + array.join( '</li></div><li><div>') + "</div></li></ul>";
    };

  NoteListView.prototype.notesToStringTwenty = function() {
    array = this.notesToArray()
    console.log(array)
    var array2 = array.map(function(string){
      return string.substring(0, 19);
    })
    console.log(array2)
    return "<ul><li><div>" + array2.join( '</li></div><li><div>') + "</div></li></ul>";
  };

  exports.NoteListView = NoteListView
})(this);
