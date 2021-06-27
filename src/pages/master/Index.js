import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../home/Index'
import SearchResult from '../search/Index'
import JobSingle from '../jobSingle/Index'
import Contact from '../contact/Index'
import About from '../about/Index'

import AccountMaster from '../account/Master'
import RoleBasedRoute from '../../components/privateRoute/Index'

const Index = () => {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/home/" component={Home} />
                <Route exact path="/home/job/:id" component={JobSingle} />
                <Route exact path="/home/search-results" component={SearchResult} />
                <Route exact path="/home/about" component={About} />
                <Route exact path="/home/contact" component={Contact} />
                <RoleBasedRoute path="/home/account/" component={AccountMaster} role={'user'} />
            </Switch>
        </div>
    )
}

export default Index;

