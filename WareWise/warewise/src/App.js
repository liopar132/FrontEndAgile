import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './Pages/Home.js';
import Inventory from './Pages/Inventory.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Createorder from './Pages/CreateOrder.js';
import LoginRegister from './Pages/LoginRegister.js'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Inventory" component={Inventory} />
          <Route path="/CreateOrder" component={Createorder} />
          <Route path="/LoginRegister" component={LoginRegister} /> 
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
