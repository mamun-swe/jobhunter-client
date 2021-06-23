import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/home/Index'
import Search from './pages/search/Index'
import JobSingle from './pages/jobSingle/Index'
import Contact from './pages/contact/Index'
import About from './pages/about/Index'
import Login from './pages/login/Index'
import Register from './pages/register/Index'
import SeekerMaster from './pages/account/seeker/Master'
import CompanyMaster from './pages/account/company/Master'

import FourOFour from './pages/fourOfour/Index'
import ScrollToTop from './components/scrollToTop/Index'
import RoleBasedRoute from './components/privateRoute/Index'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search-results" component={Search} />
            <Route exact path="/job/:id" component={JobSingle} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <RoleBasedRoute path="/seeker/" component={SeekerMaster} role={'seeker'} />
            <RoleBasedRoute path="/company/" component={CompanyMaster} role={'company'} />

            <Route path="*" component={FourOFour} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
