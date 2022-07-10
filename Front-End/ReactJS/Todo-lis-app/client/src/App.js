import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoSections/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <TodoList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
