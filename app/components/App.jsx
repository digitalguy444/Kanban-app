import React from 'react';

import uuid from 'uuid';
import Notes from './Notes';


export default class app extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      notes: [
        {
         id: uuid.v4(),
          task:'learn react'
        },
        {
          id: uuid.v4(),
          task: 'do laundry'
      }
    ]
  };
}
render(){
  const{notes}= this.state;

  return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>
      );
  }

  addNote = () => {
    this.setState({
       notes: this.state.notes.concat([{
         id: uuid.v4(),
         task: 'New task '
       }])
     });
   }

   deleteNote = (id, e) => {
  //   e.stopPropogation();
//this was added originally to stop the affects of deleteNote from causing issues elsewhere
     this.setState({
       notes: this.state.notes.filter(note => note.id !== id)

     });
   }

 }
