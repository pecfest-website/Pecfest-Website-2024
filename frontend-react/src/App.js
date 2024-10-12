import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';


function App() {
    return (
        <div className="App" >
            
            <Router>
                <Routes>
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </Router>
            
        </div>
    );
}
export default App;