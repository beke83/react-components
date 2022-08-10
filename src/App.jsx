import { useReducer, useState } from 'react';
import './App.css';
import { Users } from './users';
import BasicSearch from './BasicSearch'
import TableSearch from './TableSearch';

function App() {
  const [query, setQuery] = useState("");
  
  const keys = ["first_name", "last_name", "email",];

  //console.log(Users[0]["first_name"])

  const search = (data) => {
   return data.filter((user) => (
     keys.some(key => user[key].toLowerCase().includes(query))
   ));
  };

  return (
    <div className="App">
      <input type="text"
        placeholder='search'
        className='search'
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <BasicSearch data={Users} /> */}
      <TableSearch data={search(Users)} />
    </div>
  );
}

export default App;
