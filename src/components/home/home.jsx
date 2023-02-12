import { Button } from "@mui/material";
import logo from '.../../../logo.svg';
import './home.css';

export const Home = () => {
  return (
    <div className="home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained">Click me</Button>
      </header>
    </div>
  );
}