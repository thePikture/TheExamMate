import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Login.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [allfield, setAllField] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const loginPasswordVisibilityClick = () => {
        setShowPassword(!showPassword)
    }

    const loginForm = async (e) => {
        e.preventDefault()
        const d = {
            username: userName,
            password: password
        }
        if (userName == "" || password == "") {
            setAllField("Please fill all required fields")
        } else {
            try {
                const { data } = await axios.post(`${process.env.REACT_APP_DOMAIN_NAME}/auth/connect`, d);
                setAllField(data.errorMsgs)
                if (data.token != null) {
                    sessionStorage.setItem("token", data.token)
                    sessionStorage.setItem("userId", data.userId)
                    navigate("/profile")
                }
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div>
            <Navbar />
            <section className="mt-5" style={{ backgroundColor: "#fff5f1" }} >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-1">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">Sign In</p>
                                            <form className="mx-1 mx-md-4" onSubmit={loginForm}>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" for="form3Example1c">Your Mobile</label>
                                                        <input type="text" id="form3Example1c" className="form-control"
                                                            onChange={(e) => setUserName(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline password-Eyes flex-fill mb-0">
                                                        <label className="form-label" for="form3Example4c">Password</label>
                                                        <input type={showPassword ? "text" : "password"} id="form3Example4c" className="form-control"
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                        {showPassword ? (<VisibilityIcon
                                                            className="password-icon"
                                                            onClick={loginPasswordVisibilityClick} />)
                                                            : (<VisibilityOffIcon fill="grey"
                                                                className="password-icon"
                                                                onClick={loginPasswordVisibilityClick}
                                                            />)}
                                                    </div>
                                                </div>
                                                <div className="form-outline flex-fill mb-0">{allfield.length > 0 && (<span>{allfield}</span>)}</div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn loginBtn btn-lg">Login</button>
                                                </div>
                                                <div className="d-flex flex-row justify-content-end mb-4">
                                                    <Link to="/register">Don't have an account yet?  Sign Up</Link>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Login;