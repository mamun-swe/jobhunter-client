import React from 'react'
import './style.scss'
import { Icon } from 'react-icons-kit'
import { star } from 'react-icons-kit/fa'

export const RatingView = (props) => {

    const myColor = i => {
        let colorCode
        if (i === 5) colorCode = "#8fce51"
        else if (i === 4) colorCode = "#98e80b"
        else if (i === 3) colorCode = "#fbe500"
        else if (i === 2) colorCode = "#ffb709"
        else if (i === 1) colorCode = "#ff8350"
        else colorCode = "#8fce51"

        return colorCode
    }

    return (
        <div className="ratings-container pt-3">
            <p className="mb-1">Ratings</p>
            <ul>
                {props.items && props.items.length ?
                    props.items.map((item, i) =>
                        <li className="mb-2" key={i}>
                            <div className="d-flex">
                                <div><Icon icon={star} className="text-muted" size={14} /></div>
                                <div className="ml-1"><small className="text-muted mb-0">{item.rating}</small></div>
                                <div className="flex-fill pl-2">
                                    <div className="color-container px-1" style={{ background: myColor(i), width: item.rating * 20 + "%" }}>
                                        <small className="text-dark">{item.total}</small>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ) : null}
            </ul>
        </div>
    )
}