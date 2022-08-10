import { useReducer, useState } from 'react';
import './App.css';
import { Users } from './users';
import BasicSearch from './BasicSearch'
import TableSearch from './TableSearch';
import APISearch from './APISearch';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([])

  const keys = ["first_name", "last_name", "email",];

  //console.log(Users[0]["first_name"])

  //fetching data locally
  //and search for the query
  const search = (data) => {
    return data.filter((user) => (
      keys.some(key => user[key].toLowerCase().includes(query))
    ));
  };

  //fetching the data from the api
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      console.log(res.data);
      setData(res.data);
    }
    if(query.length === 0 || query.length > 2){
      fetchUsers();
    }
  }, [query]);

  return (
    <div className="App">
      <input type="text"
        placeholder='search...'
        className='search'
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <BasicSearch data={Users} /> */}
      {/* <TableSearch data={search(Users)} /> */}

      <APISearch data={data} />
    </div>
  );
}

export default App;
