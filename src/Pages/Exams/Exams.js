import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import './Exams.css';

const Exams = () => {
    return (
        <div>
            <Navbar />
            <div class="container exam-room">
                <div className="exam-room-time">
                    <h3>Subject: Science</h3>
                    <h3>Lesson : All</h3>
                    <h3>Time : 10:11</h3>
                </div>
                {/* <div className="exam-room-head p-1">
                    <div><h4>Subject: Science</h4></div>
                    <div><h4>Class : A</h4></div>
                </div>
                <div className="exam-room-head p-1">
                    <div><h4>Lesson : All</h4></div>
                    <div><h4>Date : 12-03-2032</h4></div>
                </div>
                <hr /> */}
                <div class="row">
                    <form>
                        <div class="col-lg-12 col-md-12 p-2">
                            <div class="form-group">
                                <div className="question">
                                    <p>Q1.</p>
                                    <p>The Most Crucial Thing is to Prepare From NCERT Textbooks.</p>
                                </div>
                                <div className="question-body">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6 col-md-6 question-ans">
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">HTML</label><br />
                                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                            <label for="javascript">JavaScript</label>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-md-6 question-ans">
                                            <input type="radio" id="css" name="fav_language" value="CSS" />
                                            <label for="css">CSS</label><br />
                                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                            <label for="javascript">bootstartp</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 p-2">
                            <div class="form-group">
                                <div className="question">
                                    <p>Q2.</p>
                                    <p>The Most Crucial Thing is to Prepare From NCERT Textbooks.</p>
                                </div>
                                <div className="question-body">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6 col-md-6 question-ans">
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">HTML</label><br />
                                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                            <label for="javascript">JavaScript</label>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-md-6 question-ans">
                                            <input type="radio" id="css" name="fav_language" value="CSS" />
                                            <label for="css">CSS</label><br />
                                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                            <label for="javascript">bootstartp</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 p-2">
                            <div class="form-group">
                                <div className="question">
                                    <p>Q3.</p>
                                    <p>The Most Crucial Thing is to Prepare From NCERT Textbooks.</p>
                                </div>
                                <div className="question-body">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6 col-md-6 question-ans">
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">HTML</label><br />
                                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                            <label for="javascript">JavaScript</label>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-md-6 question-ans">
                                            <input type="radio" id="css" name="fav_language" value="CSS" />
                                            <label for="css">CSS</label><br />
                                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                            <label for="javascript">bootstartp</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 p-2">
                            <div class="form-group">
                                <div className="question">
                                    <p>Q4.</p>
                                    <p>The Most Crucial Thing is to Prepare From NCERT Textbooks.</p>
                                </div>
                                <div className="question-body">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6 col-md-6 question-ans">
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">HTML</label><br />
                                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                            <label for="javascript">JavaScript</label>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-md-6 question-ans">
                                            <input type="radio" id="css" name="fav_language" value="CSS" />
                                            <label for="css">CSS</label><br />
                                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                            <label for="javascript">bootstartp</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 p-2">
                            <div class="form-group">
                                <div className="question">
                                    <p>Q5.</p>
                                    <p>The Most Crucial Thing is to Prepare From NCERT Textbooks.The Most Crucial Thing is to Prepare From NCERT Textbooks.</p>
                                </div>
                                <div className="question-body">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6 col-md-6 question-ans">
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">HTML</label><br />
                                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                            <label for="javascript">JavaScript</label>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-md-6 question-ans">
                                            <input type="radio" id="css" name="fav_language" value="CSS" />
                                            <label for="css">CSS</label><br />
                                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                            <label for="javascript">bootstartp</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 p-2">
                            <div class="form-group">
                                <div className="question">
                                    <p>Q6.</p>
                                    <p>The Most Crucial Thing is to Prepare From NCERT Textbooks.The Most Crucial Thing is to Prepare From NCERT Textbooks.</p>
                                </div>
                                <div className="question-body">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6 col-md-6 question-ans">
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">HTML</label><br />
                                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                            <label for="javascript">JavaScript</label>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-md-6 question-ans">
                                            <input type="radio" id="css" name="fav_language" value="CSS" />
                                            <label for="css">CSS</label><br />
                                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                            <label for="javascript">bootstartp</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                                <button className='loginBtn'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Exams;