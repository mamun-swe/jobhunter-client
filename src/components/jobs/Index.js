import React from 'react'
import { Icon } from 'react-icons-kit'
import { Link } from 'react-router-dom'
import { mapPin } from 'react-icons-kit/feather'
import { formatDateWithAMPM } from '../../utils/_helpers'

const Index = (props) => {
    return (
        <div>
            {props.items && props.items.map((item, i) =>
                <div className="single-job-items mb-30" key={i}>
                    <div className="job-items">
                        <div className="job-tittle job-tittle2">
                            <Link to={`/home/job/${item._id}`}>
                                <h4>{item.title}</h4>
                            </Link>
                            <ul>
                                <li>{item.createdBy.name}</li>
                                <li><Icon icon={mapPin} size={18} />{item.location}</li>
                                <li>{item.startSalary} TK - {item.endSalary} TK</li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-link items-link2 f-right text-capitalize">
                        <Link to={`/home/job/${item._id}`}>{item.jobType}</Link>
                        <span>{formatDateWithAMPM(item.createdAt)}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Index;