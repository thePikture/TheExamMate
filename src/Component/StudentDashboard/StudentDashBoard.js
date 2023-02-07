import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './StudentDashBoard.css';
import { CanvasJSChart } from 'canvasjs-react-charts'

const StudentDashBoard = () => {
    const options = {
        title: {
            text: "Basic Column Chart"
        },
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                dataPoints: [
                    { label: "Sub 1", y: 10 },
                    { label: "Sub 2", y: 15 },
                    { label: "Sub 3", y: 25 },
                    { label: "Sub 4", y: 40 },
                    { label: "Sub 5", y: 28 }
                ]
            }
        ]
    }
    return (
        <div>
            <Navbar />
            <div class="container student-dashboard">
                <h3>Student Dashbaord</h3>
                <form>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="stats-card-box">
                                <div class="icon-box">
                                    <i> <iconify-icon icon="radix-icons:counter-clockwise-clock"></iconify-icon></i>
                                </div>
                                <span class="sub-title">No. Of Exam</span>
                                <h4>25</h4>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="stats-card-box">
                                <div class="icon-box">
                                    <i><iconify-icon icon="carbon:result-old"></iconify-icon></i>
                                </div>
                                <span class="sub-title">Result</span>
                                <h4>67%</h4>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="stats-card-box">
                                <div class="icon-box">
                                    <i><iconify-icon icon="mdi:account-question"></iconify-icon></i>
                                </div>
                                <span class="sub-title">No. Of Question</span>
                                <h4>29545</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row p-2" style={{ display: "flex", alignItems: "center" }}>
                        <div class="col-lg-6 col-md-12">
                            <div>
                                <CanvasJSChart options={options} />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div className="important-date">
                                <h5>Next Important Date:</h5>
                                <div className="annual-sec">
                                    <dv><h6>Annual Exam :</h6></dv>
                                    <dv><p>12-03-2023</p></dv>
                                </div>
                                <div className="neet-sec">
                                    <div><h6>NEET Exam :</h6></div>
                                    <div><p>12-03-2023</p></div>
                                </div>
                                <div className="iit-sec">
                                    <div><h6>IIT Exam :</h6></div>
                                    <div><p>12-03-2023</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default StudentDashBoard;