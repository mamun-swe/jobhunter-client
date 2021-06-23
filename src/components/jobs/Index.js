import React from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../../utils/Images'

const Index = (props) => {
    return (
        <div>
            {props.items && props.items.map((item, i) =>
                <div className="single-job-items mb-30" key={i}>
                    <div className="job-items">
                        <div className="company-img">
                            <Link to={`/job/${item}`}><img src={Images.Job1} className="img-fluid" alt="" /></Link>
                        </div>
                        <div className="job-tittle job-tittle2">
                            <Link to={`/job/${item}`}>
                                <h4>Digital Marketer</h4>
                            </Link>
                            <ul>
                                <li>Creative Agency</li>
                                <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                <li>$3500 - $4000</li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-link items-link2 f-right">
                        <Link to={`/job/${item}`}>Full Time</Link>
                        <span>7 hours ago</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Index;