import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

function Registration() {
    const initialState = {
        name: "",
        email: "",
        phonenumber: "",
        password: ""
    };
    const [formData, setFormData] = useState(initialState);
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev, [name]: value
        }));
    };
    const navigate = useNavigate();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/user/usercreate', formData);
            alert("Data Was Posted");
            setFormData(initialState); 
            navigate("/verify-otp" , { state: { email: formData.email } });
        } catch (err) {
            console.log("Data didn't post", err.message);
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 bg-pink-100 p-5">
            <h2 className="text-lg font-semibold  text-pink-600 mb-5">Create New Account</h2>
            <form onSubmit={handleOnSubmit}>
                {Object.keys(initialState).map((key) => (
                    <div className="mb-4" key={key}>
                        <label className="block text-pink-600 text-sm font-bold mb-2" htmlFor={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3  text-pink-600 leading-tight focus:outline-none focus:shadow-outline"
                            id={key}
                            type={key === 'password' ? 'password' : 'text'}
                            placeholder={`Enter your ${key}`}
                            name={key}
                            value={formData[key]}
                            onChange={handleOnChange}
                        />
                    </div>
                ))}
                <button
                    className="bg-pink-500 hover:bg-pink-700 text-white ml-40 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Register
                </button>
            </form>
        </div>
    );
}

export default Registration;
