import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ProfileComponent from '../../../components/seekerProfile/Index'
import ProfileIndex from './profile/Index'
import ApplyIndex from './apply/Index'
import RecentJobs from './jobs/Recent'
import MatchedJobs from './jobs/Matched'
import ChangePassword from './changePassword/Index'

const Master = () => {
    return (
        <div className="account-master">
            <main>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-12 col-padding">
                            <div className="d-lg-flex">
                                <div className="profile-info-container mb-3 mb-lg-0">
                                    <ProfileComponent />
                                </div>
                                <div className="data-container flex-fill pl-lg-3">
                                    <Switch>
                                        <Route exact path="/seeker/" component={ProfileIndex} />
                                        <Route exact path="/seeker/apply-list" component={ApplyIndex} />
                                        <Route exact path="/seeker/recent-jobs" component={RecentJobs} />
                                        <Route exact path="/seeker/matched-jobs" component={MatchedJobs} />
                                        <Route exact path="/seeker/change-password" component={ChangePassword} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Master;