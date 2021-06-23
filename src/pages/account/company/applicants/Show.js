import React, { useState } from 'react'

const Index = () => {
    const [items] = useState([1, 2, 3, 4, 5, 6])
    return (
        <div>
            <div className="card border-0 shadow">
                <div className="card-header p-4 bg-white border-0">
                    <h5 className="mb-0">201 Applicants in Marketing job</h5>
                </div>

                <div className="card-body px-0">

                    {items && items.map((items, i) =>
                        <div className="applicant-container d-flex border-bottom px-3 mb-3" key={i}>
                            <div className="pr-3"><h6>{i + 1}.</h6></div>
                            <div className="flex-fill">
                                <h6 className="text-capitalize mb-3">applicant name</h6>
                                <p className="mb-0">E-mail: example@gmail.com</p>
                                <p className="mb-0">Institute : ABC Institute</p>
                                <p>Comment : some comment</p>
                            </div>
                            <div
                                style={{ width: 100 }}
                                className="ml-auto text-center">
                                <button type="button" className="btn genric-btn px-2 px-lg-3">Approve</button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Index;