import logo from './logo.svg';
import './App.css';
import React from 'react';
import FilmsScheduler from './components/FilmsScheduler';
import Films from 'components/Films';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,  
  useLocation
} from "react-router-dom";
import moment from 'moment'
import faker from  'faker';

function App() {
  return (

<Router>
    <div>
        <nav>
          <ul className="Menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
            <li>
              <Link to="/timetable">Scheduler of films</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="App">
         
        <section> 
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            
            <Route path="/timetable/:id">
              <FilmsScheduler />
            </Route>

            <Route path="/timetable">
              <Redirect to={`/timetable/${moment().format('YYYY-MM-DD')}`} />
            </Route>

            <Route path="/films">
              <Films/>
            </Route>
            
            <Route path="/">
              <h1>Home</h1>
              Welcome to our service! We specialize in disseminating information about upcoming events in the world of <Link to="/films">cinema</Link> and <Link to="/performances">performances</Link>.
              <br/>
              Also, our service informs about the hottest <Link to="/concerts">concerts</Link> in your city!
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
            
          </Switch>
          

        </section>
      </div>
    </div>
    </Router>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function About() {
  let location = useLocation();

  return (
    <div>
      <h2>
        About us
      </h2>
      <p>Here is the description of the service and necessary terms.</p>
      <p>Creators:</p>
      <p><Link to="https://vk.com/shydleek">Matthew Shydlovsky</Link></p>
      <p><Link to="https://vk.com/smelayya">Antonova Milana</Link></p>
      <p><Link to="https://vk.com/posy9">Postnik Daniil</Link></p>
      <p><Link to="https://vk.com/vladikooopps">Vladislav Kovganov</Link></p>
    </div>
  );
}
 
export default App;