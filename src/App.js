import logo from './logo.svg';
import './App.css';
import Authentication from './components/Authentication/Authentication';
import Chat from './components/Chat/Chat';
import FindUser from './components/FindUser/FindUser';

function App() {
  return (
    <div className="App">
      <Authentication />
      <Chat />
      <FindUser />
    </div>
  );
}

export default App;
