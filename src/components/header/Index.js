import React, { useEffect, useState } from 'react'
import { Menu } from 'react-feather'
import { Link, useHistory } from 'react-router-dom'
import { Images } from '../../utils/Images'

const Index = () => {
    const history = useHistory()
    const [role, setRole] = useState(false)
    const [isMenu, setMenu] = useState(false)

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
                        <div className="row align-items-center py-3 py-lg-0">
                            <div className="col-3">
                                <div className="logo">
                                    <Link to="/home"><img src={Images.Logo} alt="" style={{ height: 30 }} /></Link>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="menu-wrapper">
                                    <div className="main-menu">
                                        <nav className="d-none d-lg-block">
                                            <ul id="navigation">
                                                <li><Link to="/home">Home</Link></li>
                                                <li><Link to="/home/about">About</Link></li>
                                                <li><Link to="/home/contact">Contact</Link></li>
                                                {role ? <li><Link to={`/home/account`}>Profile</Link></li> : null}
                                                <li><Link to="#" onClick={doLogout}>Logout</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                {/* Drawer menu button */}
                                <div className="text-right d-lg-none">
                                    <button
                                        type="button"
                                        className="btn p-2"
                                        onClick={() => setMenu(true)}
                                    >
                                        <Menu size={23} />
                                    </button>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className={isMenu ? "backdrop d-block d-lg-none is_open_backdrop" : "backdrop d-block d-lg-none"}
                                    onClick={() => setMenu(false)}
                                />
                                <div className={isMenu ? "mobile_menu shadow d-block d-lg-none p-3 is_open_mobile_menu" : "mobile_menu shadow d-block d-lg-none p-3"}>
                                    <Link className="d-block mb-1" to="/home">Home</Link>
                                    <Link className="d-block mb-1" to="/home/about">About</Link>
                                    <Link className="d-block mb-1" to="/home/contact">Contact</Link>
                                    {role ? <Link className="d-block mb-1" to={`/home/account`}>Profile</Link> : null}
                                    <Link className="d-block mb-1" to="#" onClick={doLogout}>Logout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Index;