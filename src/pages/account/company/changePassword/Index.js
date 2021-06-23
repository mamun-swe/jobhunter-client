import React, { useState } from 'react'
import PasswordChangeForm from '../../../../components/form/PasswordChange'

const Index = () => {
    const [isLoading, setLoading] = useState(false)

    const handleSubmit = async (data) => {
        try {
            setLoading(true)
            console.log(data)

            setTimeout(() => {
                setLoading(false)
            }, 1000)

        } catch (error) {
            if (error) console.log(error)
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