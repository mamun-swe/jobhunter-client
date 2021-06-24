import React from 'react'
import { Icon } from 'react-icons-kit'
import { Link } from 'react-router-dom'
import { mapPin } from 'react-icons-kit/feather'
import { Images } from '../../utils/Images'
import Moment from "moment"

const Index = (props) => {
    return (
        <div>
            {props.items && props.items.map((item, i) =>
                <div className="single-job-items mb-30" key={i}>
                    <div className="job-items">
                        <div className="company-img">
                            <Link to={`/job/${item._id}`}><img src={Images.Job1} className="img-fluid" alt="" /></Link>
                        </div>
                        <div className="job-tittle job-tittle2">
                            <Link to={`/job/${item._id}`}>
                                <h4>{item.title}</h4>
                            </Link>
                            <ul>
                                <li>{item.company.name}</li>
                                <li><Icon icon={mapPin} size={18} />{item.location}</li>
                                <li>{item.startSalary} TK - {item.endSalary} TK</li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-link items-link2 f-right text-capitalize">
                        <Link to={`/job/${item._id}`}>{item.jobType}</Link>
                        <span>{Moment().endOf(item.createdAt).fromNow()}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Index;