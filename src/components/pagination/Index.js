import React from 'react'
import { Icon } from 'react-icons-kit'
import { chevronRight } from 'react-icons-kit/feather'

const Index = () => {
    return (
        <div>
            <div className="pagination-area pb-115 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="single-wrap d-flex justify-content-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item active"><button type="button" className="page-link">01</button></li>
                                        <li className="page-item"><button type="button" className="page-link">02</button></li>
                                        <li className="page-item"><button type="button" className="page-link">03</button></li>
                                        <li className="page-item">
                                            <button type="button" className="page-link">
                                                <Icon icon={chevronRight} size={15} />
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;