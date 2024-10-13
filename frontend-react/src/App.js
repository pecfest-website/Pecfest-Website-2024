import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs } from './pages/aboutus';
import { Login } from './pages/login';
import ProtectedRoute from './components/ProtectedRoute';  // Import the protected route component
import { Signup } from './pages/signup';

function App() {
  return (
    <Router>
      <div className="relative h-screen w-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/back.mp4" type="video/mp4" />
        </video>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />

          {/* Protected Route */}
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
