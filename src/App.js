import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AuthProvider from './context/AuthProvider';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Service from './Components/Service/Service';
import Register from './Components/Register&Login/Register';
import Login from './Components/Register&Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Appoinment from './Components/Appoinment/Appoinment';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route  path="/home">
              <Home></Home>

            </Route>
            <Route  path="/about">
             <About></About>

            </Route>
            <Route  path="/contact">
            <Contact></Contact>
            </Route>
            <PrivateRoute path="/service">
            <Service></Service>
            </PrivateRoute>
            <PrivateRoute path="/appoinment">
            <Appoinment></Appoinment>
            </PrivateRoute>
            <Route  path="/register">
            <Register></Register>
            </Route>
            <Route  path="/login">
            <Login></Login>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          
          <Footer></Footer>

        </Router>
       
      </AuthProvider>
    </div>
  );
}

export default App;
