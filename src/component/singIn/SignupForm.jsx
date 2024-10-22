import React, { useState } from 'react'

const SignupForm = () => {
    const [successMessage, setSuccessMessage] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage('ثبت نام با موفقیت انجام شد!');
    }
return (
    <div className="max-w-md mx-auto mt-10">
    {successMessage && (
        <div className="bg-green-500 text-white p-4 rounded mb-4">
            {successMessage}
            
        </div>

</div>
    )
}

export default SignupForm
