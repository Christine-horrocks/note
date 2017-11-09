(function(exports) {
  function NoteList() {
    this._notes = [];
  }

  NoteList.prototype.showNotes = function() {
      return this._notes
  };

  NoteList.prototype.addNote = function(text) {
      this._notes.push(new Note(text));
  };


  exports.NoteList = NoteList;
})(this);
