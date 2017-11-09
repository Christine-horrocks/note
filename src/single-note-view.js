(function(exports){

function SingleNoteView(note = new Note) {
  this.note = note
}

SingleNoteView.prototype.addSingleNote = function(note) {
  this.note = note
}

exports.SingleNoteView = SingleNoteView;

})(this);
