import React from 'react';

import uuid from 'uuid';

const notes = [
	{
		id: uuid.v4(), //calls on the uuid, a standard with a high probablility of uniqueness
		task: 'Learn React' //this is going to have to be changed to a class or function for dynamic ability
	},
	{
		id: uuid.v4(),
		task: 'Do Laundry'
	}
];

export default () => (
<ul> {notes.map(note =>
<li key={note.id}>{note.task}</li>

)}</ul>

)
