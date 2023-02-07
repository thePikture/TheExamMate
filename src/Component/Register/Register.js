import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Register.css';

const Register = () => {
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [mobile, setMobile] = useState("")
    const [mobileError, setMobileError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [allfield, setAllField] = useState("")

    const navigate = useNavigate()

    const onChangeName = (e) => {
        const name = e.target.value;
        const nameCap = name.charAt(0).toUpperCase() + name.slice(1);
        setName(nameCap)
        if (!name.trim()) {
            setNameError("This field is required")
        } else {
            setNameError("")
        }
    }

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email)
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!email.trim()) {
            setEmailError("This field is required")
        } else if (!pattern.test(email)) {
            setEmailError("Invalid email")
        } else {
            setEmailError("")
        }
    }
    const onChangeMobile = (e) => {
        const mobile = e.target.value;
        setMobile(mobile)
        const pattern = /^[0]?[6789]\d{9}$/
        if (!mobile.trim()) {
            setMobileError("This field is required")
        } else if (!pattern.test(mobile)) {
            setMobileError("Please enter 10 digit mobile number starting with 6,7,8 or 9 only")
        } else {
            setMobileError("")
        }
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password)
        const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        if (!password.trim()) {
            setPasswordError("Password is requird")
        }
        else if (password.length < 8) {
            setPasswordError("Password mininum length 8")
        }
        else if (!regexPassword.test(password)) {
            setPasswordError("Password should have 1 uppercase 1 lowercase 1 capital 1 spl character min 8 ")
        } else {
            setPasswordError("")
        }
    }

    const registerForm = async (e) => {
        e.preventDefault()
        const d = {
            Name: name,
            EmailId: email,
            MobileNo: mobile,
            Password: password
        }
        console.log(d)
        if (name == "" || email == "" || mobile == "" || password == "") {
            setAllField("Please fill all required fields")
        } else {
            try {
                const { data } = await axios.post(`${process.env.REACT_APP_DOMAIN_NAME}/auth/register-student`, d)
                setAllField(data.errorMsgs)
                if (data.token != null) {
                    sessionStorage.setItem("token", data.token)
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
                                            <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">Sign up</p>
                                            <form className="mx-1 mx-md-4" onSubmit={registerForm}>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" for="form3Example1c">Your Name</label>
                                                        <input type="text" value={name} id="form3Example1c" className="form-control"
                                                            onChange={onChangeName}
                                                        />
                                                        {nameError.length > 0 && (<span>{nameError}</span>)}
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                        <input type="email" id="form3Example3c" className="form-control"
                                                            onChange={onChangeEmail}
                                                        />
                                                        {emailError.length > 0 && (<span>{emailError}</span>)}
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" for="form3Example3c">Your Mobile</label>
                                                        <input type="text" maxLength={10} id="form3Example3c" className="form-control"
                                                            onChange={onChangeMobile}
                                                        />
                                                        {mobileError.length > 0 && (<span>{mobileError}</span>)}
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" for="form3Example4c">Password</label>
                                                        <input type="password" id="form3Example4c" className="form-control"
                                                            onChange={onChangePassword}
                                                        />
                                                        {passwordError.length > 0 && (<span>{passwordError}</span>)}
                                                    </div>
                                                </div>
                                                <div className="form-outline flex-fill mb-0">{allfield.length > 0 && (<span>{allfield}</span>)}</div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn loginBtn btn-lg">Register</button>
                                                </div>
                                                <div className="d-flex flex-row justify-content-end mb-4">
                                                    <Link to="/login">Do you have an account Sign in</Link>
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
        </div >
    );
}

export default Register;