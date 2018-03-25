import uuid from 'uuid';

export default class NoteStore {
  constructor(){
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
}
