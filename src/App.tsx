import React from 'react';

import Table from "./Components/Table/index";
import {usersArray} from "./data";
import Information from './Components/Information/index';

function App() {

 return (
   <div className="App">
     <Table users={usersArray} />
      <Information 
      text={'Hi all'}
      data={new Date()}
      />
   </div>
 );
}

export default App;