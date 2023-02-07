import { Link } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import contact from "../../Image/contact.png";
import Googlead from "../../Image/Googlead.jpeg";
import Image from "../../Image/ads.jpeg";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <Navbar />
            <section class="contact-info-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="contact-info-box">
                                <div class="back-icon">
                                    <i>
                                        <iconify-icon icon="material-symbols:location-on-rounded"></iconify-icon>
                                    </i>
                                </div>
                                <div class="icon">
                                    <i>
                                        <iconify-icon icon="material-symbols:location-on-rounded"></iconify-icon>
                                    </i>
                                </div>
                                <h3>Our Address</h3>
                                <p>
                                    5057, 21st Main Road, G Block, Anna Nagar, Chennai - 600040
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="contact-info-box">
                                <div class="back-icon">
                                    <i>
                                        <iconify-icon icon="ic:baseline-call"></iconify-icon>
                                    </i>
                                </div>
                                <div class="icon">
                                    <i>
                                        <iconify-icon icon="ic:baseline-call"></iconify-icon>
                                    </i>
                                </div>
                                <h3>Contact</h3>
                                <p>
                                    Toll free: <Link to="">****</Link>
                                </p>
                                <p>
                                    E-mail: <Link to="">support@theexammate.com</Link>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div class="contact-info-box">
                                <div class="back-icon">
                                    <i>
                                        <iconify-icon icon="mdi:hours-24"></iconify-icon>
                                    </i>
                                </div>
                                <div class="icon">
                                    <i>
                                        <iconify-icon icon="mdi:hours-24"></iconify-icon>
                                    </i>
                                </div>
                                <h3>Office Hours</h3>
                                <p>Monday - Friday: 09:00 - 20:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-1 container">
                    <div class="images-image">
                        <img src={Image} alt="image" />
                    </div>
                </div>
            </section>
            {/* <hr /> */}
            <section class="contact-area">
                <div class="container">
                    <div class="section-title">
                        <h2>Ready to Get Started?</h2>
                        <p>Your email address will not be published</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-12">
                            <div class="contact-image">
                                <img src={contact} alt="image" />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <div class="contact-form">
                                <form>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12">
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    class="form-control"
                                                    id="name"
                                                    required=""
                                                    placeholder="Your name"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6">
                                            <div class="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    class="form-control"
                                                    id="email"
                                                    required=""
                                                    placeholder="Your email address"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    name="phone_number"
                                                    class="form-control"
                                                    id="phone_number"
                                                    required=""
                                                    placeholder="Your phone number"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <div class="form-group">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    class="form-control"
                                                    cols="30"
                                                    rows="6"
                                                    required=""
                                                    placeholder="Write your message..."
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <button type="submit" class="default-btn">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <div class="google-image">
                                <img src={Googlead} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;