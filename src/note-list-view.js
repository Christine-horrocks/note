(function(exports){
  function NoteListView(noteList = new NoteList){
    this.noteList = noteList;
  }

  NoteListView.prototype.notesToString = function(){
    var array = this.noteList.showNotes().map(function(note){
      return note.showContents();
    })
    return "<ul><li><div>" + array.join( '</li></div><li><div>') + "</div></li></ul>";
    };

  exports.NoteListView = NoteListView
})(this);
