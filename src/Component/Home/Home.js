import Banner from "../Banner/Banner";
import Faq from "../Fag/Faq";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import WhyExamMate from "../WhyExamMate/WhyExamMate";

const Home = () => {


    return (
        <div>
            <Navbar />
            <Banner />
            <WhyExamMate />
            <Features />
            <Faq />
            <Footer />
        </div>
    );
}

export default Home;