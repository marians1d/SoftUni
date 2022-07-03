import logo from '../logo.svg';
import './App.css';
import BookList from './BookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BookList />
        <h1>Hello world!!!</h1>
      </header>
    </div>
  );
}

export default App;
