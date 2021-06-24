
import Icon from "react-icons-kit"
import { NavLink, useHistory } from "react-router-dom"
import { grid, settings, clock, checkCircle, logOut, pieChart } from "react-icons-kit/feather"
import { Images } from "../../utils/Images"

const Index = () => {
    const history = useHistory()

    const doLogout = () => {
        localStorage.clear()
        history.push("/")
    }

    return (
        <div className="profile-card-container">
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-0 p-4">

                    {/* Image container */}
                    <div className="image-container flex-center flex-column">
                        <div className="image">
                            <img src={Images.User} className="img-fluid" alt="User profile" />
                        </div>
                    </div>

                    {/* Content container */}
                    <div className="content-container">
                        <h6>ABC Inc. <small>(Company)</small></h6>
                        <p>abcinc@gmail.com</p>
                    </div>
                </div>

                <div className="card-body px-0 pt-0">
                    <NavLink
                        exact
                        to="/company/"
                        activeClassName="isActive"
                        type="button"
                        className="btn shadow-none btn-block"
                    >
                        <Icon icon={grid} size={18} />Profile
                    </NavLink>
                    <NavLink
                        exact
                        to="/company/applicants"
                        activeClassName="isActive"
                        type="button"
                        className="btn shadow-none btn-block"
                    >
                        <Icon icon={pieChart} size={18} />Applicants
                    </NavLink>
                    <NavLink
                        exact
                        to="/company/opened-jobs"
                        activeClassName="isActive"
                        type="button"
                        className="btn shadow-none btn-block"
                    >
                        <Icon icon={clock} size={18} />Opened Jobs
                    </NavLink>
                    <NavLink
                        exact
                        to="/company/new-job"
                        activeClassName="isActive"
                        type="button"
                        className="btn shadow-none btn-block"
                    >
                        <Icon icon={checkCircle} size={18} />Open New Job
                    </NavLink>
                    <NavLink
                        type="button"
                        exact
                        to="/company/change-password"
                        activeClassName="isActive"
                        className="btn shadow-none btn-block"
                    >
                        <Icon icon={settings} size={18} />Change Password
                    </NavLink>
                    <button
                        type="button"
                        className="btn shadow-none btn-block"
                        onClick={doLogout}
                    >
                        <Icon icon={logOut} size={18} />Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;