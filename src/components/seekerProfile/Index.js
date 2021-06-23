
import Icon from "react-icons-kit"
import { NavLink, useHistory } from "react-router-dom"
import { home, grid, settings, clock, checkCircle, logOut, pieChart } from "react-icons-kit/feather"
import { Images } from "../../utils/Images"

const Index = () => {
    const history = useHistory()

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
                        <h6>abdullah al mamun <small>(Seeker)</small></h6>
                        <p>mamun.swe.277@gmail.com</p>
                    </div>
                </div>

                <div className="card-body px-0 pt-0">
                    <NavLink
                        exact
                        to="/"
                        activeClassName="isActive"
                        type="button"
                        className="btn shadow-none btn-block"
                    >
                        <Icon icon={home} size={18} />Home
                    </NavLink>
                    <NavLink
                        exact
                        to="/seeker/"
                        activeClassName="isActive"
                        type="button"
                        className="btn shadow-none btn-block"
                    >
                        <Icon icon={grid} size={18} />Profile
                    </NavLink>
                    <NavLink
                        exact
                        to="/seeker/apply-list"
                        activeClassName="isActive"
                        type="button"
                        className="btn shadow-none btn-block"
                    >
                        <Icon icon={pieChart} size={18} />Apply List
                    </NavLink>
                    <NavLink
                        exact
                        to="/seeker/recent-jobs"
                        activeClassName="isActive"
                        type="button"
                        className="btn shadow-none btn-block"
                    >
                        <Icon icon={clock} size={18} />Recent Jobs
                    </NavLink>
                    <NavLink
                        exact
                        to="/seeker/matched-jobs"
                        activeClassName="isActive"
                        type="button"
                        className="btn shadow-none btn-block"
                    >
                        <Icon icon={checkCircle} size={18} />Matched Jobs
                    </NavLink>
                    <NavLink
                        type="button"
                        exact
                        to="/seeker/change-password"
                        activeClassName="isActive"
                        className="btn shadow-none btn-block"
                    >
                        <Icon icon={settings} size={18} />Change Password
                    </NavLink>
                    <button
                        type="button"
                        className="btn shadow-none btn-block"
                        onClick={() => history.push('/')}
                    >
                        <Icon icon={logOut} size={18} />Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;