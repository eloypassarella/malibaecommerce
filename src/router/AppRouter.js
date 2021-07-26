import React from 'react'
import NavBar from "../components/NavBar"
import Home from '../pages/Home'
import Productos from'../pages/Productos'
import Trabajos from'../pages/Trabajos'
import Contacto from'../pages/Contacto'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function AppRouter () {
return (
    <Router>
        <NavBar/>
        <Switch>
            <Route path exact="/" component= {Home}/>
            <Route path="/Productos" component={Productos}/>
            <Route path="/Trabajos"component={Trabajos}/>
            <Route path="/Contacto"component={Contacto}/>
        </Switch>
    </Router>
)
}

export default AppRouter


