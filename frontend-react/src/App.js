import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery/Gallery';
import Events from './pages/Events/Events';


function App() {
    return (
        <div className="App" >
            
            <Router>
                <Routes>
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/events" element={<Events />} />
                </Routes>
            </Router>
            
        </div>
    );
}
export default App;