import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="#/room"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rooms Page with Ajax
        </a>
      </header>
    </div>
  );
}

export default App;
