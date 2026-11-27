import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();
    const location = useLocation();

    const [logindata, setFormdata] = useState({
        username: "",
        password: ""
    })

    function handleChange(e) {
        setFormdata({
            ...logindata,
            [e.target.name]: e.target.value
        })
    }

    const handlesubmit = (event) => {
        event.preventDefault()

        const registerdata = location.state

        if (
            registerdata &&
            logindata.username === registerdata.name &&
            logindata.password === registerdata.password
        ) {
            alert("Login Success!")
            navigate("/dashboard", {
                state: logindata
            })
        } else {
            alert("Invalid Credentials")
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-purple-100">

            <form
                onSubmit={handlesubmit}
                className="bg-white p-6 rounded-lg shadow-lg w-96"
            >

                <h1 className="text-2xl font-bold text-center text-purple-800 mb-5">
                    Login Page
                </h1>

                <label className="text-purple-900 font-semibold">Username</label>

                <input
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    onChange={handleChange}
                    className="w-full p-2 border border-purple-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />

                <label className="text-purple-900 font-semibold">Password</label>

                <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChange}
                    className="w-full p-2 border border-purple-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-purple-700 text-white p-2 rounded hover:bg-purple-900"
                >
                    Login
                </button>

            </form>
        </div>
    )
}

export default Login
