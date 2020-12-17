import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

function Room() {
  /*
    Doc :
      https://fr.reactjs.org/docs/hooks-intro.html
      https://fr.reactjs.org/docs/hooks-overview.html 
  */
  //react Hook useState
  let [rooms, setRooms] = useState([])
  //react Hook useEffect
  useEffect(() => {
    axios.get('http://hotel-live-ynov.com/api/rooms')
    .then(response => {
        console.log(response.data); 
        setRooms(response.data);
      }
    )
    .catch((error) => { console.log(error)})
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ici les Rooms</h1>
        <a
          className="App-link"
          href="#/"
          target="_blank"
          rel="noopener noreferrer">
            Back Home
        </a>
        <table className="Room">
          <thead>
            <tr>
              <td>Id</td>
              <td>Nom</td>
              <td>Number</td>
              <td>Prix</td>
            </tr>
          </thead>
          <tbody>
            {rooms.map(room => (
              //L'attribut key est obligatoire pour le dataBinding
              <tr key={room.id}>
                <td>{room.id}</td>
                <td>{room.name}</td>
                <td>{room.number}</td>
                <td>{room.price.toLocaleString()}</td>
              </tr>
              )
            )}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default Room;
