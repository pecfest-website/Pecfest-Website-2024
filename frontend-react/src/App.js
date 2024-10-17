import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery/Gallery';
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

const music = new Audio(
    "https://firebasestorage.googleapis.com/v0/b/react-trial-cef8c.appspot.com/o/Heuse%20%26%20Zeus%20x%20Crona%20-%20Pill%20(feat.%20Emma%20Sameth)%20%5BNCS%20Release%5D.mp3?alt=media&token=6385b144-d0e9-4438-bf47-456c671265a0"
  );

function App() {
    const [isJamming, setJamming]=useState(false);

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
            {/* <div className="video-background">
                <video autoPlay loop muted>
                    <source src="https://res.cloudinary.com/deecew6ga/video/upload/v1728732370/-1ced-4d69-b61e-4609c6ac87a6_ygzqc4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}
            <Router>
                <Routes>

                    <Route path="/" element={<Homepage  isJamming={isJamming} setIsJamming={setIsJamming} /> } />
                    {/* <Route path="/gallery" element={<Gallery isJamming={isJamming} setIsJamming={setIsJamming} />} /> */}
                    <Route path="/events" element={<Events isJamming={isJamming} setIsJamming={setIsJamming} />} />
                    <Route path="/events/:id" element={<EventDetail  isJamming={isJamming} setIsJamming={setIsJamming}/>} />
                    <Route path="/AboutUs" element={<AboutUs  isJamming={isJamming} setIsJamming={setIsJamming}/>} />
                    <Route path="/sponsor" element={<Sponsor  isJamming={isJamming} setIsJamming={setIsJamming}/>} />
                    <Route path="/team" element={<Team isJamming={isJamming} setIsJamming={setIsJamming} />} />
                    <Route path="/login" element={<Login isJamming={isJamming} setIsJamming={setIsJamming} />} />
                    <Route path="/signup" element={<Signup isJamming={isJamming} setIsJamming={setIsJamming} />} />
                    <Route path="/events/register/:id" element={<EventRegistrationForm isJamming={isJamming} setIsJamming={setIsJamming} />} />
                    
                    
                </Routes>
            </Router>
            
        </div>
    );
}
export default App;