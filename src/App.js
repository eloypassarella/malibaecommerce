import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting= "Bienvenidos a nuestro E-Commerce"/>
    </div>
  );
}

export default App;
