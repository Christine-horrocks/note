(function(exports){

  function SingleNoteView(note = new Note) {
    this.note = note
  }

  SingleNoteView.prototype.addSingleNote = function(note) {
    this.note._text = note
  }

  SingleNoteView.prototype.returnSingleNoteHtml = function() {
    return "<ul><li><div>" + this.note._text + "</div></li></ul>"
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
