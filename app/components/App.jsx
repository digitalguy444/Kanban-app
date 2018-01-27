import React from 'react';
import Notes from './Notes';

{/*export default () => <Notes />;*/}

export default () => (
<div>
  <button onClick={() => console.log('add note')}>+
  </button>
  <Notes />
</div>

);
