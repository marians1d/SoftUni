import './App.css';
import { UserList } from './components/users-section/UsersList';
import { Footer } from './Footer';
import { Header } from './Header';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <UserList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
