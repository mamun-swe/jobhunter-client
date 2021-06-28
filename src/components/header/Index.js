import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Images } from '../../utils/Images'

const Index = () => {
    const history = useHistory()
    const [role, setRole] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) setRole(true)
    }, [])

    const doLogout = () => {
        localStorage.clear()
        history.push("/")
    }

    return (
        <header>
            <div className="header-area header-transparrent shadow-sm">
                <div className="headder-top header-sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-2">
                                <div className="logo">
                                    <Link to="/home"><img src={Images.Logo} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                                <div className="menu-wrapper">
                                    <div className="main-menu">
                                        <nav className="d-none d-lg-block">
                                            <ul id="navigation">
                                                <li><Link to="/home">Home</Link></li>
                                                <li><Link to="/home/about">About</Link></li>
                                                <li><Link to="/home/contact">Contact</Link></li>
                                                {role ? <li><Link to={`/home/account`}>Profile</Link></li> : null}
                                                <li>
                                                    <Link
                                                        to="#"
                                                        onClick={doLogout}
                                                    >Logout</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Index;