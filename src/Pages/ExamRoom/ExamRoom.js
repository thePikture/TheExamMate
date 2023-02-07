import { useState } from "react";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import './ExamRoom.css';
const ExamRoom = () => {
    return (
        <div>
            <Navbar />
            <div class="container add-listings-box">
                <h3>Student Test books</h3>
                <form>
                    <div class="row">
                        <div className="col-lg-4 col-md-6 col-sm-6"></div>
                        <div class="col-lg-2 col-sm-6 col-md-4">
                            <div class="form-group">
                                <h4>Subject :</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="form-group">
                                <select class="dashbaord-category-select">
                                    <option>Select </option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6"></div>
                        <div className="col-lg-4 col-md-6 col-sm-6"></div>
                        <div class="col-lg-2 col-sm-6 col-md-4">
                            <div class="form-group">
                                <h4>Lesson :</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="form-group">
                                <select class="dashbaord-category-select">
                                    <option>Select </option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6"></div>
                        <div className="col-lg-4 col-md-6 col-sm-6"></div>
                        <div class="col-lg-2 col-sm-6 col-md-4">
                            <div class="form-group">
                                <h4>No.of Question :</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="form-group">
                                <select class="dashbaord-category-select">
                                    <option>Select </option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <div class="form-group" style={{ display: "flex", justifyContent: "center" }}>
                                <button className='loginBtn'>Create a Exam Room</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default ExamRoom;