import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Main from './Components/MenuItems/Main'
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main />
    </div>
  );
}

export default App;
