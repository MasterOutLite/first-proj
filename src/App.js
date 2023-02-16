import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Перший проект на React</p>
        <button className="react-btn">Button</button>
      </header>
    </div>
  );
}

export default App;
