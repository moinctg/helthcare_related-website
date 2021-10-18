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
