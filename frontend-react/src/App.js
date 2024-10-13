import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery/Gallery';
import Events from './pages/Events/Events';
import { AboutUs } from './pages/Aboutus/AboutUs';
import Sponsors from './pages/Sponsors/Sponsors';
import { Login } from './pages/Login/Login';


function App() {
    return (
        <div className="App" >
            
            <Router>
                <Routes>
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
            
        </div>
    );
}
export default App;