export const Navbar = () => {
    return <>
        {/* Navbar */}
        <div className="w-full bg-black relative z-10 h-[70px] border-dashed border-y-4 border-white flex justify-center items-center space-x-4">
            <div className="text-yellow-400 text-lg font-semibold flex flex-col justify-center items-center px-4 md:px-8">
                <a href="">About</a>
            </div>
            <div className="text-white text-lg font-semibold flex flex-col justify-center items-center px-4 md:px-8">
                <a href="">Competitions</a>
            </div>
            <div className="text-white text-lg font-semibold flex flex-col justify-center items-center px-4 md:px-8">
                <a href="">Events</a>
            </div>
            <div className="text-white text-lg font-semibold flex flex-col justify-center items-center px-4 md:px-8">
                <a href="">Sponsors</a>
            </div>
            <div className="text-white text-lg font-semibold flex flex-col justify-center items-center px-4 md:px-8">
                <a href="">Team</a>
            </div>
            <div className="text-white text-lg font-semibold flex flex-col justify-center items-center px-4 md:px-8">
                <a href="">Gallery</a>
            </div>
            <div className="text-white text-lg font-semibold flex flex-col justify-center items-center px-4 md:px-8">
                <a href="">Brochure</a>
            </div>
            <div className="text-white text-lg font-semibold flex flex-col justify-center items-center px-4 md:px-8">
                <a href="">Contact</a>
            </div>
            <div className="text-yellow-400 text-lg font-semibold flex flex-col justify-center items-center px-4 md:px-8">
                <a href="">Login in</a>
            </div>
        </div>
    </>
}