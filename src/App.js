import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <label>

        Name
        <input type="text" />
      </label>
      <label htmlFor="age">Age</label>
      <input type="number" id="age"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p title="tooltip">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="link_any_thing"
        >
          Learn React
        </a>
        <button aria-pressed="true"></button>
      </header>
      <input type="text" value="Gaurav" onChange={(e) => console.log(e)}/>
      <input type="text" defaultValue="anything" onChange={(e) => console.log(e)} placeholder="Enter name"/>

    </div>
  );
}

export default App;
