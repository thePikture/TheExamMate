import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './EducationalInformatoin.css';

const EducationalInformation = () => {

    const [allSchool, setAllSchool] = useState([])
    const [allBoard, setAllBoard] = useState([])
    const [allMedium, setALlMedium] = useState([])
    const [allGrade, setAllGrade] = useState([])
    const [allSubjectGroup, setAllSubjectGroup] = useState([])
    const [token, setToken] = useState("")

    // const [school, setSchool] = useState("")

    useEffect(() => {
        const token = sessionStorage.getItem("token")
        const user_Id = sessionStorage.getItem("userId")
        if (token != null && user_Id != null) {
            setToken(token)
            getStudentInfo(token, user_Id)
        }
    }, [])

    const getStudentInfo = async (token, id) => {
        const h = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json',
        }
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/student/get-student-info/${id}`, { headers: h })
            console.log(data)
            getSchool(token, data.talukId)
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeSchool = (e) => {
        // setSchool(e.target.value)
        // getAllBoard(e.target.value)
    }

    const getSchool = async (token, id) => {
        const h = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json',
        }
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/school/get-School-byTalukId/${id}`, { headers: h })
            console.log(data)
            setAllSchool(data)
            getAllBoard(token)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllBoard = async (token) => {
        const h = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json',
        }
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/edu/get-Board-all`, { headers: h })
            console.log(data)
            setAllBoard(data)
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeBoard = (e) => {
        getAllMedium(e.target.value)
    }

    const getAllMedium = async (id) => {
        const h = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json',
        }
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/edu/get-Medium-byboardId/${id}`, { headers: h })
            console.log(data)
            setALlMedium(data)
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeMedium = (e) => {
        getAllGrade(e.target.value)
    }

    const getAllGrade = async (id) => {
        const h = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json',
        }
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/edu/get-SubjectGroup-bygradeId/${id}`, { headers: h })
            console.log(data)
            setAllGrade(data)
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeGrade = async (e) => {
        getAllSubjectGroup(e.target.value)
    }

    const getAllSubjectGroup = async (id) => {
        const h = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json',
        }
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_DOMAIN_NAME}/edu/get-Subject-bySubjectGroupId/${id}`, { headers: h })
            console.log(data)
            setAllSubjectGroup(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar />
            <div className="container add-listings-box educational">
                <h3>Educational Information</h3>

                {/* <h3>Valid From to End</h3> */}
                <div className="valid">
                    <h4>Valid From : 12/02/2023 - Valid To : 12/02/2024</h4>
                </div>

                <form>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 ">
                            <div className="form-group">
                                <h4>School:</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <select className="dashbaord-category-select"
                                    onChange={onChangeSchool}
                                >
                                    <option>Select Category</option>
                                    {allSchool.map((school) => {
                                        return (
                                            <option key={school.id} value={school.id}>{school.schoolName}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 educational">
                            <div className="form-group">
                                <h4>Admin No:</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="admin no"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 educational">
                            <div className="form-group">
                                <h4>Board:</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <select className="dashbaord-category-select"
                                    onChange={onChangeBoard}
                                >
                                    <option>Select Category</option>
                                    {allBoard.map((board) => {
                                        return (
                                            <option key={board.id} value={board.id}>{board.boardName}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 educational">
                            <div className="form-group">
                                <h4>Medium:</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <select className="dashbaord-category-select"
                                    onChange={onChangeMedium}
                                >
                                    <option>Select Category</option>
                                    {allMedium.map((medium) => {
                                        return (
                                            <option key={medium.id} value={medium.id}>{medium.mediumName}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 educational">
                            <div className="form-group">
                                <h4>Grade:</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <select className="dashbaord-category-select"
                                    onChange={onChangeGrade}
                                >
                                    <option>Select Category</option>
                                    {allGrade.map((grade) => {
                                        return (
                                            <option key={grade.id} value={grade.id}>{grade.grade}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 educational">
                            <div className="form-group">
                                <h4>Subject Group:</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <select className="dashbaord-category-select">
                                    <option>Select Category</option>
                                    {allSubjectGroup.map((sub) => {
                                        return (
                                            <option key={sub.id} value={sub.id}>{sub.subjectGroup}</option>
                                        )
                                    })}
                                </select>
                            </div>
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

export default EducationalInformation;