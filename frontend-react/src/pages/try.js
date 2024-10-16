import { Navbar } from "../components/navbar";

export const TryPage = () => {
    return (
        <div className="relative w-dvw h-dvh overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/back.mp4" type="video/mp4" />
            </video>

            <Navbar />
            <div className="z-10 h-full w-full bg-white"></div>
            
            
        </div>
    );
};
