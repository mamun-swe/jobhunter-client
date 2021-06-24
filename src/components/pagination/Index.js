import React from 'react'

const Index = ({ paginate }) => {
    return (
        <div>
            {paginate && paginate.totalPage ?
                <div className="pagination-area pb-115 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="single-wrap d-flex justify-content-center">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-start">
                                            {[...Array(paginate.totalPage)].map((item, i) =>
                                                <li className="page-item active" key={i}><button type="button" className="page-link">{i + 1}</button></li>
                                            )}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    )
}

export default Index;