import React from 'react';

import uuid from 'uuid';
import Notes from './Notes';

const notes =[  //this is an array of notes as a frame for when real notes get in here
{
 id: uuid.v4(),
  task:'learn react'
},
{
  id: uuid.v4(),
  task: 'do laundry'
}

];


export default () => (
<div>
  <button onClick={() => console.log('add note')}>+
  </button>
  <Notes notes= {notes}/>
</div>

);
