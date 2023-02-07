import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import award1 from '../../Image/award1.png';
import award2 from '../../Image/award2.png';
import award3 from '../../Image/award3.png';
import './AwardWinning.css';

const AwardWinning = () => {
    return (
        <div>
            <Navbar />
            <div class="container student-dashboard">
                <h3>Award Winning</h3>
                <div className="row award-head">
                    <div className="col-lg-4 col-md-6 text-center">
                        <img src={award1} alt="award" width={200} />
                        <p>Silver</p>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center">
                        <img src={award2} alt="award" width={200} />
                        <p>Gold</p>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center">
                        <img src={award3} alt="award" width={200} />
                        <p>Platinum</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AwardWinning;