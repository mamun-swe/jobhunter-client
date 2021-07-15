import React, { useEffect, useState, useCallback } from 'react'
import Header from '../../components/header/Index'
import Footer from '../../components/footer/Index'
import Preloader from '../../components/preloader/Index'
import Requests from '../../utils/Requests/Index'
import { Images } from '../../utils/Images'
import { useParams } from 'react-router-dom'

const Index = () => {
    const { id } = useParams()
    const [isLoading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    // Fetch data
    const fetchData = useCallback(async () => {
        const response = await Requests.Website.Profile(id, header)
        if (response) setUser(response.data.user)
        setLoading(false)
    }, [id, header])

    useEffect(() => {
        fetchData()
    }, [id, header, fetchData])

    if (isLoading) return <Preloader />

    return (
        <div className="dashboard-container">
            <Header />
            <main>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                            <div className="card">
                                <div className="card-header bg-white border-0 p-4">

                                    {/* Image container */}
                                    <div className="image-container flex-center flex-column mb-4">
                                        <div className="image">
                                            <img src={Images.User} className="img-fluid" alt="User profile" />
                                        </div>
                                    </div>

                                    {/* Content container */}
                                    <div className="content-container text-center">
                                        <h6>{user ? user.name : null}</h6>
                                        <p>{user ? user.email : null}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <p>Name: {user ? user.name : "N/A"}</p>
                                    <p>Website: {user ? user.website : "N/A"}</p>
                                    <p><b>Description: </b></p>
                                    <p>{user ? user.description : "N/A"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Index;