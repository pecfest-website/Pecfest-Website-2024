export const AboutUs = () => {
    return (
      <div className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/back.mp4" type="video/mp4" />
        </video>
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
        <div className="flex flex-col justify-center items-center backdrop-blur-sm">
          {/* Blue Div */}
          <div className="absolute flex justify-center items-center z-10 h-[348.75px] w-[1302.126px] backdrop-blur-sm bg-black/40 top-[170px] border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">
            
          </div>
  
          {/* Yellow Div */}
          <div className="backdrop-blur-sm bg-black/40 absolute z-10 top-[132px] h-[40px] w-[800px] border-x-4 border-t-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4">
            
          </div>
  
          {/* About Section */}
          <div className="backdrop-blur-sm bg-black/30 absolute z-10 top-[198px] h-[290px] w-[800px] border-x-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)] p-4 flex flex-col items-center">
            <div className="text-[#FBFF00] text-justify text-[52px] font-normal leading-none shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-serif">
              About
            </div>
            <div className="text-gray-200 px-[60px] tracking-wide text-lg pt-4">
              Judson Elevating the spirit of innovation and artistic expression, PECFEST 2023 embraces cutting-edge technology. As the paramount annual extravaganza of North India, PECFEST is a dynamic convergence of creativity, intellect, and pure enjoyment. What truly sets us apart is our unwavering commitment to pushing boundaries.
            </div>
          </div>
  
          {/* Pink Div */}
          <div className="absolute z-10 top-[198px] h-[290px] w-[880px] border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)] p-4">
           
          </div>
  
          {/* Pink Circles */}
          <div className="absolute z-20">
            <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '250px', right: '480px', position: 'absolute' }} />
            <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '315px', right: '480px', position: 'absolute' }} />
            <div className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]" style={{ top: '380px', right: '480px', position: 'absolute' }} />
          </div>
  
          {/* Yellow Circles */}
          <div className="absolute z-20">
            <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '250px', right: '540px', position: 'absolute' }} />
            <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '315px', right: '540px', position: 'absolute' }} />
            <div className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]" style={{ top: '380px', right: '540px', position: 'absolute' }} />
          </div>
  
          {/* Large Yellow Circle */}
          <div className="absolute z-20 right-[155px] top-[275px] h-[150px] w-[150px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"></div>
        </div>
      </div>
    );
  };
  