import './App.css'
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import Contador from './components/Contador';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting= "Bienvenidos a nuestro E-Commerce"/>
      <Contador/>
    </div>
  );
}

export default App;
