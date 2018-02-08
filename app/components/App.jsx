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
    <Notes notes={notes} />
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

 }
