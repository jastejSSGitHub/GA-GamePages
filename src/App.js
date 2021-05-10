import './App.css';
import Banner from './Banner';
import Description from './Description';
import descriptionText from './descriptionTextFortnite';
import Navbar from './Navbar';
import Promo from './Promo';
import TournamentsSection from './TournamentsSection';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NHL from './NHL';
import FIFA from './FIFA';
import FreeFire from './FreeFire';
import COD from './COD';
import Fortnite from './Fortnite';

function App() {
  

  
  return (
    <div className="app">
      
      <Router>
      <div>
        <h1 className="demo">
          Banner Pages Demo
        </h1>
        <div className="options">
          <Link to="/">
            <img src="https://i.ibb.co/jTmM9ng/fortnite-1.png" alt=""/>
          </Link>
          <Link to="/NHL">
            <img src="https://i.ibb.co/XYQJWLS/NHL21.png" alt=""/>
          </Link>
          <Link to="/FreeFire">
            <img src="https://i.ibb.co/GHRmb8p/freefire.png" alt=""/>
          </Link>
          <Link to="/COD">
            <img src="https://i.ibb.co/sQdX48k/cod.png" alt=""/>
          </Link>
          <Link to="/FIFA">
            <img src="https://i.ibb.co/4pF6sww/fifa21.png" alt=""/>
          </Link>
        </div>
      </div>
      
      <Navbar/>

      <Switch>
          <Route path="/NHL">
            <NHL />
          </Route>
          <Route path="/FIFA">
            <FIFA />
          </Route>
          <Route path="/FreeFire">
            <FreeFire />
          </Route>
          <Route path="/Cod">
            <COD />
          </Route>
          <Route path="/">
            <Fortnite/>
          </Route>
          
      </Switch>
      <div className="endLine">
                <h1>Ready To Play?</h1>
      </div>
      
      </Router>
    </div>
    
  );
}

export default App;
