import {useState,useEffect} from "react";

function App() {
  const [ users, setUsers ] = useState([]);

  useEffect(() =>{

    // ACÁ ES CONECTA CON EL BACKEND
    fetch("http://localhost:3001/api")
    .then(response => response.json())
    .then(data => setUsers(data));
  },[]);
  return (
    <div className="App">
      <h1>Usuarios</h1>
      {
        users.map(user =>{
        
          return <div key={user.id}> 
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.gender}</p>
          <p>{user.equipo}</p>
          </div>
        })
      }
    </div>
  );
}

export default App;
