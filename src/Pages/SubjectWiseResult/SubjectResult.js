import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import './SubjectResult.css';

const SubjectResult = () => {
    const data = [{ name: 'F 1', uv: 100, pv: 2400, amt: 2400 },
    { name: 'F 2', uv: 200, pv: 3400, amt: 2100 },
    { name: 'F 3', uv: 300, pv: 3400, amt: 2100 },
    { name: 'F 4', uv: 900, pv: 3400, amt: 100 },
    { name: 'F 5', uv: 300, pv: 3400, amt: 200 },
    ]

    return (
        <div>
            <Navbar />
            <div class="container student-dashboard">
                <h3>Subject  Wise Result</h3>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12">
                        <LineChart width={900} height={350} data={data}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </LineChart>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SubjectResult;