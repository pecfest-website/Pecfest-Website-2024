import { AboutUs } from "./pages/aboutus";

function App() {
  return (
    <div className="relative h-screen w-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/back.mp4" type="video/mp4" />
        {/* Add fallback text if needed */}
      </video>
      <AboutUs />
    </div>
  );
}

export default App;
