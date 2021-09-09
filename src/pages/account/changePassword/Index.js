import React, { useState } from 'react'
import Requests from '../../../utils/Requests/Index';
import PasswordChangeForm from '../../../components/form/PasswordChange'

const Index = () => {
    const [isLoading, setLoading] = useState(false)
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    const handleSubmit = async (data) => {
        try {
            setLoading(true)
            await Requests.Account.PasswordUpdate(data, header)
            setLoading(false)
        } catch (error) {
            if (error) setLoading(false)
        }
    }

    return (
        <div className="card password-change-card">
            <div className="card-header bg-white p-4">
                <h6 className="mb-0">Change Password</h6>
            </div>
            <div className="card-body p-4">
                <PasswordChangeForm
                    submit={handleSubmit}
                    loading={isLoading}
                />
            </div>
        </div>
    );
};

export default Index;