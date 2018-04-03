import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';

export default class NoteStore {
  constructor(){

    this.bindActions(NoteActions);

    this.notes = [
      {
       id: uuid.v4(),
        task:'learn react'
      },
      {
        id: uuid.v4(),
        task: 'do laundry'
      }
    ];
  }
  create(note){
    console.log( note),
    this.setState({
      notes: this.notes.concat(note)
    })
  }
  update(updatedNote) {
    console.log('update note', updatedNote);
  }
  delete(id){
    console.log('delete note', id)
  }
}
