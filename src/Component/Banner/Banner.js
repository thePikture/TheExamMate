import axios from 'axios';
import { useEffect } from 'react';
import banner1 from '../../Image/banner1.png'
import './Banner.css'
const Banner = () => {

    return (
        <div>
            <section class="banner">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="banner-content">
                                <h1>One Destination for
                                    Complete Exam Preparation</h1>
                                {/* <span><strong>Check video presentation to find out more about us.</strong></span> */}

                                <p className='pt-5 pb-2'>Start your preparation for selections. For Free!</p>
                                <button className='loginBtn'>Contact Us</button>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="banner-image">
                                <img src={banner1} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="funfacts-area pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
                            <div class="single-funfacts">
                                <i>
                                    <iconify-icon style={{ fontSize: "25px", background: "#00833f", color: "#ffffff", borderRadius: "6px", padding: "10px" }} icon="codicon:workspace-trusted"></iconify-icon>
                                </i>
                                <p>Trusted by</p>
                                <h3 class="odometer">3.5 Crore+ Students</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
                            <div class="single-funfacts">
                                <i>
                                    <iconify-icon style={{ fontSize: "25px", background: "#524fd5", color: "#ffffff", borderRadius: "6px", padding: "10px" }} icon="ph:student"></iconify-icon>
                                </i>
                                <p>Student Selections</p>
                                <h3 class="odometer">50k+</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
                            <div class="single-funfacts">
                                <i>
                                    <iconify-icon style={{ fontSize: "25px", background: "red", color: "#ffffff", borderRadius: "6px", padding: "10px" }} icon="carbon:rule-test"></iconify-icon>
                                </i>
                                <p>Tests Attempted</p>
                                <h3>242 Crore+</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
                            <div class="single-funfacts">
                                <i>
                                    <iconify-icon style={{ fontSize: "25px", background: "#f8b01d", color: "#ffffff", borderRadius: "6px", padding: "10px" }} icon="healthicons:i-training-class-outline"></iconify-icon>
                                </i>
                                <p>Classes Attended</p>
                                <h3>5.5 Crore+</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Banner;