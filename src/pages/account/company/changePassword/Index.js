import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Requests from '../../../../utils/Requests/Index';
import PasswordChangeForm from '../../../../components/form/PasswordChange'

const Index = () => {
    const [isLoading, setLoading] = useState(false)
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    const handleSubmit = async (data) => {
        try {
            setLoading(true)
            const response = await Requests.Company.PasswordUpdate(data, header)
            if (response.status === 201) {
                toast.success(response.data.message)
            }
            setLoading(false)
        } catch (error) {
            if (error) setLoading(false)
        }
    }

    return (
        <div className="card border-0 shadow-sm password-change-card">
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