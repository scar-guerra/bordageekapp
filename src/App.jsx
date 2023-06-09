import Navbar from './Components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer saludo={'Bienvenid@ a Bordageek'}/>
      </header>
    </div>
  );
}

export default App;
