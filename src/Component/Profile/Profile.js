import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Profile.css';

const Profile = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [parentName, setParentName] = useState("")
    const [pincode, setPincode] = useState("")
    const [state, setState] = useState("")
    const [district, setDistrict] = useState("")
    const [taluk, setTaluk] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [token, setToken] = useState("")
    const [allState, setAllState] = useState([])
    const [allDistrict, setAllDistrict] = useState([])
    const [allTaluk, setAllTaluk] = useState([])
    const [userId, setUserId] = useState("")
    const [error, setError] = useState("")
    const [run, setRun] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem("token")
        const user_Id = sessionStorage.getItem("userId")
        if (token != null && user_Id != null) {
            getStudentInfo(token, user_Id)
        }
        if (user_Id != null) {
            setUserId(user_Id)
        }
        if (token != null) {
            setToken(token)
            getAllState(token)
        }
    }, [])

    const onChangeState = (e) => {
        setState(e.target.value)
        getAllDistrict(e.target.value)
    }

    const onChangeDistrict = (e) => {
        setDistrict(e.target.value)
        getAllTaluk(e.target.value)
    }

    const getAllState = async (token) => {
        const h = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json',
        }
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/Geo/get-State-all`, { headers: h })
            setAllState(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllDistrict = async (id) => {
        const h = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json',
        }
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/Geo/get-District-bystateId/${id}`, { headers: h })
            console.log(data)
            setAllDistrict(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllTaluk = async (id) => {
        const h = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json',
        }
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/Geo/get-taluk-bydistrictId/${id}`, { headers: h })
            console.log(data)
            setAllTaluk(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getStudentInfo = async (token, id) => {
        const h = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json',
        }
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/student/get-student-info/${id}`, { headers: h })
            console.log(data)
            setMobile(data.mobileNo)
            setEmail(data.email)
            setName(data.stName)
            setParentName(data.fatherName)
            setPincode(data.pinCode)
            setState(data.stateId)
            getAllDistrict(data.stateId)
            setDistrict(data.districtId)
            getAllTaluk(data.districtId)
            setTaluk(data.talukId)
            setCity(data.city)
            setAddress(data.address)
        } catch (error) {
            console.log(error)
        }
    }

    const profileSubmitForm = async (e) => {
        e.preventDefault();
        const h = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json',
        }
        const d = {
            Id: userId,
            StName: name,
            FatherName: parentName,
            Email: email,
            PinCode: pincode,
            StateId: state,
            DistrictId: district,
            TalukId: taluk,
            City: city,
            Address: address,
        }
        if (parentName == "" || state == "" || district == "" || taluk == "" || address == "") {
            setError("Please fill all required fields")
        } else {
            setError("")
            try {
                const { data } = await axios.post(`${process.env.REACT_APP_DOMAIN_NAME}/student/update-student`, d, { headers: h })
                console.log(data.result)
                setError(data.errorMsgs)
                if (data.result == "Success") {
                    navigate('/')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div>
            <Navbar />
            <div className="container add-listings-box">
                <h3>Student Personal Information</h3>
                <form onSubmit={profileSubmitForm}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>Your Name:</label>
                                <input type="text" className="form-control" placeholder="Name" value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>Your Email:</label>
                                <input type="email" className="form-control" placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)} value={email}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>Your Mobile:</label>
                                <input type="text" className="form-control" placeholder="Mobile" value={mobile} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>Parent Name:<span style={{ color: "red" }}>*</span></label>
                                <input type="text" className="form-control" placeholder="Parent name"
                                    onChange={(e) => setParentName(e.target.value)} value={parentName}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>Pincode:</label>
                                <input type="text" className="form-control" placeholder="pincode"
                                    onChange={(e) => setPincode(e.target.value)} value={pincode}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group"><label>State:<span style={{ color: "red" }}>*</span></label>
                                <select className="dashbaord-category-select"
                                    onChange={onChangeState} value={state}
                                >
                                    <option>Select Category</option>
                                    {allState.map((state) => {
                                        return (
                                            <option key={state.id} value={state.id}>{state.stateName}</option>
                                        )
                                    })}
                                </select>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group"><label>District:<span style={{ color: "red" }}>*</span></label>
                                <select className="dashbaord-category-select"
                                    onChange={onChangeDistrict} value={district}
                                >
                                    <option>Select Category</option>
                                    {allDistrict.map((dis) => {
                                        return (
                                            <option key={dis.id} value={dis.id}>{dis.districtName}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group"><label>Taluk:<span style={{ color: "red" }}>*</span></label>
                                <select className="dashbaord-category-select"
                                    onChange={(e) => setTaluk(e.target.value)} value={taluk}
                                >
                                    <option>Select Category</option>
                                    {allTaluk.map((ta) => {
                                        return (
                                            <option key={ta.id} value={ta.id}>{ta.blockName}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>City:</label>
                                <input type="text" className="form-control" placeholder="city"
                                    onChange={(e) => setCity(e.target.value)} value={city}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>Address:<span style={{ color: "red" }}>*</span></label>
                                <input type="text" className="form-control" placeholder="address"
                                    onChange={(e) => setAddress(e.target.value)} value={address}
                                />
                            </div>
                        </div>
                        <div className="form-outline">
                            {error.length > 0 && (<span>{error}</span>)}
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group" style={{ display: "flex", justifyContent: "end" }}>
                                <button type="submit" className='loginBtn'>Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;