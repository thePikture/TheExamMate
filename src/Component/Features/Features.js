import './Features.css';
import featureicon1 from '../../Image/featureicon1.png';
import featureicon2 from '../../Image/featureicon2.png';
import featureicon3 from '../../Image/featureicon3.png';

const Features = () => {
    return (
        <div className='features pt-5 pb-5' style={{ backgroundColor: "white" }}>
            <h3 className='pt-3 pb-3'>Features</h3>
            <div className="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-features-box">
                            <div class="icon">
                                <img src={featureicon1} alt="icon" width={60} />
                            </div>
                            <h3>Testing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-features-box">
                            <div class="icon">
                                <img src={featureicon2} alt="icon" width={60} />
                            </div>
                            <h3>Testing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-features-box">
                            <div class="icon">
                                <img src={featureicon3} alt="icon" width={60} />
                            </div>
                            <h3>Testing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;