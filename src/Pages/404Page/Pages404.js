import { Link } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import './Pages404.css';
import error from '../../Image/error.png';

const Pages404 = () => {
    return (
        <div>
            <Navbar />
            <section class="error-area">
                <div class="container"><div class="error-content">
                    <img src={error} alt="image" />
                    <h3>Error 404 : Page Not Found</h3>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <Link class="default-btn" to='/'>Back to Homepage</Link>
                </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Pages404;