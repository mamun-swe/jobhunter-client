import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Login from './pages/login/Index'
import Register from './pages/register/Index'
import HomeMaster from './pages/master/Index'

import FourOFour from './pages/fourOfour/Index'
import ScrollToTop from './components/scrollToTop/Index'
import PrivateRoute from './components/privateRoute/Index'


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute path="/home/" role="user" component={HomeMaster} />
            <Route path="*" component={FourOFour} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
