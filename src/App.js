import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Profile from './Component/Profile/Profile';
import StudentDashBoard from './Component/StudentDashboard/StudentDashBoard';
import Exams from './Pages/Exams/Exams';
import ExamRoom from './Pages/ExamRoom/ExamRoom';
import Pages404 from './Pages/404Page/Pages404';
import Contact from './Pages/Contact/Contact';
import { useEffect } from 'react';
import axios from 'axios';
import EducationalInformation from './Component/EducationalInformation/EducationalInformatoin';
import ProfileRegister from './Component/ProfileRegister/ProfileRegister';
import ExamResult from './Pages/ExameResult/ExamResult';
import SubjectResult from './Pages/SubjectWiseResult/SubjectResult';
import AwardWinning from './Pages/AwardWinnings/AwardWinning';

function App() {

  useEffect(() => {
    console.log(process.env.REACT_APP_DOMAIN_NAME)

  }, [])


  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile-register' element={<ProfileRegister />} />
          <Route path='/student-dashboard' element={<StudentDashBoard />} />
          <Route path='/educational-information' element={<EducationalInformation />} />
          <Route path='/exams' element={<Exams />} />
          <Route path='/exam-room' element={<ExamRoom />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/exam-result' element={<ExamResult />} />
          <Route path='/subject-result' element={<SubjectResult />} />
          <Route path='/award-winning' element={<AwardWinning />} />
          <Route path='*' element={<Pages404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
