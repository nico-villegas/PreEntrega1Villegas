//import logo from './logo.svg';
//import './App.css';
import Itemlistcontainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar navbarLogo={"Beto's"}/>
        <Itemlistcontainer greeting={'Esta va a se una e-commerce de mates'} />
      </header>
    </div>
  );
}

export default App;
