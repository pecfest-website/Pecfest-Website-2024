export const AboutUs = () => {
  return (
    <div className="relative w-full h-screen">
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

      {/* Content Section */}
      <div className="relative flex flex-col justify-center items-center h-full backdrop-blur-sm z-10 overflow-hidden">
        {/* Blue Div */}
        <div className="absolute flex justify-center items-center z-10 h-[50%] w-[90%] bg-black/40 top-[170px] border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">
          {/* Empty div for future content */}
        </div>

        {/* Yellow Div */}
        <div className="absolute z-10 top-[19%] h-[40px] w-[60%] border-x-4 border-t-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4 bg-black/40">
          {/* Empty div for future content */}
        </div>

        {/* About Section */}
        <div className="absolute z-10 top-[30%] h-[40%] w-[60%] bg-black/30 border-x-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4 flex flex-col items-center">
          <div className="text-[#FBFF00] text-justify text-[42px] md:text-[52px] font-normal leading-none shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-serif">
            About
          </div>
          <div className="text-gray-200 px-[60px] tracking-wide text-lg pt-4">
            Judson Elevating the spirit of innovation and artistic expression, PECFEST 2023 embraces cutting-edge technology. As the paramount annual extravaganza of North India, PECFEST is a dynamic convergence of creativity, intellect, and pure enjoyment. What truly sets us apart is our unwavering commitment to pushing boundaries.
          </div>
        </div>

        {/* Pink Div */}
        <div className="absolute z-10 top-[30%] h-[40%] w-[65%] border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)] p-4 bg-transparent">
          {/* Empty div for future content */}
        </div>

        {/* Pink Circles */}
        <div className="absolute z-20 top-[20%] left-[11%] h-[60%]">
          <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '32%', right: '35%', position: 'absolute' }} />
          <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '47%', right: '35%', position: 'absolute' }} />
          <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '62%', right: '35%', position: 'absolute' }} />
        </div>

        {/* Yellow Circles */}
        <div className="absolute z-20 top-[20%] left-[15%] h-[60%]">
          <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '32%', right: '32%', position: 'absolute' }} />
          <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '47%', right: '32%', position: 'absolute' }} />
          <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '62%', right: '32%', position: 'absolute' }} />
        </div>

        {/* Large Yellow Circle */}
        <div className="absolute z-20 right-[6.5%] top-[40%] h-[150px] w-[150px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] "></div>
      </div>
    </div>
  );
};
