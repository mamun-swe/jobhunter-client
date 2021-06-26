import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../home/Index'
import JobSingle from '../jobSingle/Index'
import Contact from '../contact/Index'
import About from '../about/Index'

import SeekerMaster from '../account/seeker/Master'
import CompanyMaster from '../account/company/Master'
import RoleBasedRoute from '../../components/privateRoute/Index'

const Index = () => {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/home/" component={Home} />
                <Route exact path="/home/job/:id" component={JobSingle} />
                <Route exact path="/home/about" component={About} />
                <Route exact path="/home/contact" component={Contact} />
                <RoleBasedRoute path="/home/seeker/" component={SeekerMaster} role={'seeker'} />
                <RoleBasedRoute path="/home/company/" component={CompanyMaster} role={'company'} />
            </Switch>
        </div>
    )
}

export default Index;

