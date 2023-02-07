import './Footer.css';
import logo from '../../Image/logo.png'
const Footer = () => {
    return (
        <div className="container-fluid">
            <footer>
                <div class="footer-wrap">

                    <div class="second_class">
                        <div class="container second_class_bdr">
                            <div class="row">
                                <div class="col-md-4 col-sm-6">
                                    <div class="footer-logo"><img src={logo} alt="logo" width={180} />
                                    </div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic delectus excepturi ipsam
                                        reprehenderit iusto rem, quam, repellendus accusantium culpa reiciendis sit dolorum aut aperiam a
                                        architecto. Fuga, sit.</p>
                                </div>
                                <div class="col-md-2 col-sm-6">
                                    <h3>Company</h3>
                                    <ul class="footer-links">
                                        <li><a href="#">About Us</a>
                                        </li>
                                        <li><a href="#">Careers</a>
                                        </li>
                                        <li><a href="#">Media</a>
                                        </li>
                                        <li><a href="#">Site Map</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms & Condition</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <h3>Exams</h3>
                                    <ul class="footer-category">
                                        <li><a href="#">10th Maths</a>
                                        </li>
                                        <li><a href="#">11th Maths </a>
                                        </li>
                                        <li><a href="#">12th Maths</a>
                                        </li>
                                    </ul>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <h3>Contact</h3>
                                    <ul class="socialmedia d-flex " style={{ marginBottom: "0px" }}>
                                        <li><a href="#"><iconify-icon icon="ic:round-facebook"></iconify-icon></a>
                                        </li>
                                        <li><a href="#"><iconify-icon icon="mdi:instagram"></iconify-icon></a>
                                        </li>
                                        <li><a href="#"><iconify-icon icon="mdi:twitter"></iconify-icon></a>
                                        </li>
                                        <li><a href="#"><iconify-icon icon="mdi:linkedin"></iconify-icon></a>
                                        </li>
                                        {/* <li><a href="#">Jobs &AMP; Internship Fair 2019</a>
                                        </li> */}
                                    </ul>
                                    <ul className='social-address' style={{ marginBottom: "0px" }}>
                                        <li><iconify-icon style={{ marginRight: "15px", marginBottom: "22px" }} icon="material-symbols:location-on-rounded"></iconify-icon>
                                            <p >5057, 21st Main Road, G Block, Anna Nagar, Chennai - 600040</p>
                                        </li>
                                        <li><iconify-icon style={{ marginRight: "15px" }} icon="mdi:email"></iconify-icon>
                                            <p style={{ margin: "0px" }}>support@theexammate.com</p>
                                        </li>
                                        <li><iconify-icon style={{ marginRight: "15px" }} icon="ic:baseline-call"></iconify-icon>
                                            <p>************</p>
                                        </li>
                                        <li><iconify-icon style={{ marginRight: "15px" }} icon="mdi:hours-24"></iconify-icon>
                                            <p style={{ margin: "0px" }}>Office Hours : </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="row">

                        <div class="container-fluid">
                            <div class="copyright"> Copyright 2023 | All Rights Reserved by .....</div>
                        </div>

                    </div>
                </div>

            </footer>
        </div>
    );
}

export default Footer;