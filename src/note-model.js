(function(exports){
  function Note(contents) {
    this._text = contents;
  };

  Note.prototype.showContents = function(){
    return this._text;
  };

  exports.Note = Note
})(this);
