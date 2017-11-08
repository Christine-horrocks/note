(function(exports) {


// function singleNoteInstantiatedCorrectly() {
//   var singleNoteView = new SingleNoteView();
//
// }
// singleNoteInstantiatedCorrectly();

function takesNoteAsParameter() {
  var singleNoteView = new SingleNoteView();
  console.log(singleNoteView.note)
  assert.isTrue(singleNoteView.note.includes(''));
}
takesNoteAsParameter()




})(this);
