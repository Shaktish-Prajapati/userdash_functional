import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Components
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard}  />
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
