import NoteStore from '../../stores/NoteStore';

export default alt => {
  alt.addStore('notestore', NoteStore);
}
