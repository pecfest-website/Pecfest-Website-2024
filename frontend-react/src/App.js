import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Gallery} from './pages/Gallery/Gallery';
import Homepage from './pages/HomePage/Homepage'
import Events from './pages/Events/Events';
import { AboutUs } from './pages/Aboutus/AboutUs';
import EventDetail from './pages/EventsDetail/EventDetail';
import Team from './pages/Team/Team';
import { Login } from './pages/Login/Login';
import { useState } from 'react';
import { Signup } from './pages/Signup/Signup';
import EventRegistrationForm from './pages/RegistrationForm/RegistrationForm';
import Sponsor from './pages/Sponsors/Sponsor';
import Competitions from './pages/Competitions/Competitions';
import Contact from './pages/Contact/Contact';
import Developers from './pages/Developers/Developers';
// import Loading from './compoments/Loading';
import Landing from './pages/Landing/Landing';
import { useGlobalContext } from './Context/globalContext';

import Schedule from './pages/Schedule/Schedule';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const music = new Audio(
    "https://firebasestorage.googleapis.com/v0/b/react-trial-cef8c.appspot.com/o/Heuse%20%26%20Zeus%20x%20Crona%20-%20Pill%20(feat.%20Emma%20Sameth)%20%5BNCS%20Release%5D.mp3?alt=media&token=6385b144-d0e9-4438-bf47-456c671265a0"
  );

function App() {
    const [isJamming, setJamming]=useState(false);
    const global = useGlobalContext()


    const setIsJamming =()=>{
    
            setJamming((prevState) => {
              if (prevState === false) {
                music.play();
              } else {
                console.log("ran");
                music.pause();
              }
              return !prevState;
            });

    }
    return (
        <div className="App" >
            <Router>
                <Routes>

                    <Route path="/" element={<Landing/> } />
                    {/* <Route path="/" element={<Homepage  isJamming={isJamming} setIsJamming={setIsJamming} /> } /> */}
                    <Route path="/gallery" element={<Gallery isJamming={isJamming} setIsJamming={setIsJamming} />} />
                    <Route path="/events" element={<Events isJamming={isJamming} setIsJamming={setIsJamming} />} />
                    <Route path="/events/:id" element={<EventDetail  isJamming={isJamming} setIsJamming={setIsJamming}/>} />
                    <Route path="/AboutUs" element={<AboutUs  isJamming={isJamming} setIsJamming={setIsJamming}/>} />
                    <Route path="/sponsor" element={<Sponsor  isJamming={isJamming} setIsJamming={setIsJamming}/>} />
                    <Route path="/team" element={<Team isJamming={isJamming} setIsJamming={setIsJamming} />} />
                    <Route path="/developers" element={<Developers isJamming={isJamming} setIsJamming={setIsJamming} />} />
                    <Route path="/login" element={<Login isJamming={isJamming} setIsJamming={setIsJamming} />} />
                    <Route path="/signup" element={<Signup isJamming={isJamming} setIsJamming={setIsJamming} />} />
                    <Route path="/events/register/:id" element={<EventRegistrationForm isJamming={isJamming} setIsJamming={setIsJamming} />} />
                    <Route path="/competitions" element={<Competitions isJamming={isJamming} setIsJamming={setIsJamming} />} />
                    <Route path="/contact" element={<Contact isJamming={isJamming} setIsJamming={setIsJamming}/>} />
                    <Route path="/schedule" element={<Schedule isJamming={isJamming} setIsJamming={setIsJamming} />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </Router>
            
        </div>
    );
}
export default App;
