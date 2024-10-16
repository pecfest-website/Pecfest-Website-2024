import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <div className="relative w-full h-screen overflow-hidden">
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
            <div className="w-full bg-black relative z-10 h-[70px] md:h-[9%] border-dashed border-y-4 border-white flex justify-center items-center">
                <div className="text-yellow-400 text-lg font-semibold">Deep dive into PECFEST</div>
            </div>

            {/* Main Section */}
            <div className="relative flex flex-col justify-center items-center h-full backdrop-blur-sm z-10 overflow-hidden">
                {/* First larger Yellow Div */}
                <div className="absolute top-[30%] w-[80%] md:w-[60%] lg:w-[60%] h-[40%] bg-black/40 border-x-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"></div>

                {/* Second Yellow Div */}
                <div className="absolute z-20 top-[19%] w-[80%] md:w-[60%] lg:w-[60%] h-[40px] bg-black/40 border-x-4 border-t-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"></div>

                {/* Blue Div */}
                <div className="relative z-20 flex justify-center items-center h-[50%] w-[90%] md:w-[90%] lg:w-[90%] bg-black/40 border-4 border-sky-200 shadow-[0_0_20px_5px_rgba(135,206,235,0.7)] p-4 rounded-[50px]">
                    {/* Login Form */}
                    <div className="relative z-20 w-full flex flex-col items-center">
                        <div className="text-[#FBFF00] text-[36px] md:text-[42px] lg:text-[52px] font-normal leading-none shadow-sm">
                            LOGIN
                        </div>
                        <div className="w-full max-w-[400px] mt-4">
                            <input
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                className="w-full h-[40px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div>
                        <div className="w-full max-w-[400px] mt-4">
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full h-[40px] p-4 text-black bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"
                            />
                        </div>
                        <div className="mt-4">
                            <button
                                className="w-[200px] h-[40px] hover:scale-110 text-gray-600 bg-gray-400 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                onClick={async () => {
                                    try {
                                        const response = await axios.post("backendLink", {
                                            username,
                                            password,
                                        });

                                        if (response.data.success) {
                                            const data = response.data.data;
                                            localStorage.setItem("token", data.token);
                                            navigate("/dashboard");
                                        } else {
                                            alert("Invalid credentials. Please try again.");
                                        }
                                    } catch (error) {
                                        console.error("Login failed:", error);
                                        alert("An error occurred. Please try again later.");
                                    }
                                }}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pink Rectangle */}
                <div className="absolute z-10 top-[30%] w-[60%] md:w-[60%] lg:w-[65%] h-[40%] border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)] bg-transparent"></div>

                {/* Small Pink Circles */}
                <div className="absolute z-20 top-[20%] left-[11%] h-[60%]">
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]"
                        style={{ top: '32%', right: '35%', position: 'absolute' }}
                    />
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]"
                        style={{ top: '47%', right: '35%', position: 'absolute' }}
                    />
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-pink-300 shadow-[0_0_20px_5px_rgba(300,105,180,0.7)]"
                        style={{ top: '62%', right: '35%', position: 'absolute' }}
                    />
                </div>

                {/* Small Yellow Circles */}
                <div className="absolute z-20 top-[20%] left-[15%] h-[60%]">
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                        style={{ top: '32%', right: '32%', position: 'absolute' }}
                    />
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                        style={{ top: '47%', right: '32%', position: 'absolute' }}
                    />
                    <div
                        className="h-[35px] w-[35px] rounded-full border-4 border-yellow-200 shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                        style={{ top: '62%', right: '32%', position: 'absolute' }}
                    />
                </div>

                {/* small circles svg */}
                <svg width="152" height="17" viewBox="0 0 152 17" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="absolute z-20 top-[35%] left-[23%]">
          <path id="Vector" d="M143.888 16.1868C139.858 16.1868 136.596 12.6077 136.596 8.21501C136.596 3.82236 139.87 0.243164 143.888 0.243164C147.906 0.243164 151.18 3.82236 151.18 8.21501C151.18 12.6077 147.906 16.1868 143.888 16.1868ZM143.888 4.31043C141.916 4.31043 140.317 6.05936 140.317 8.21501C140.317 10.3707 141.916 12.1195 143.888 12.1195C145.86 12.1195 147.459 10.3707 147.459 8.21501C147.459 6.05936 145.86 4.31043 143.888 4.31043ZM109.923 16.1868C105.905 16.1868 102.631 12.6077 102.631 8.21501C102.631 3.82236 105.905 0.243164 109.923 0.243164C113.94 0.243164 117.214 3.82236 117.214 8.21501C117.214 12.6077 113.94 16.1868 109.923 16.1868ZM109.923 4.31043C107.951 4.31043 106.351 6.05936 106.351 8.21501C106.351 10.3707 107.951 12.1195 109.923 12.1195C111.894 12.1195 113.494 10.3707 113.494 8.21501C113.494 6.05936 111.894 4.31043 109.923 4.31043ZM75.9573 16.1868C71.927 16.1868 68.6657 12.6077 68.6657 8.21501C68.6657 3.82236 71.9394 0.243164 75.9573 0.243164C79.9751 0.243164 83.2488 3.82236 83.2488 8.21501C83.2488 12.6077 79.9751 16.1868 75.9573 16.1868ZM75.9573 4.31043C73.9855 4.31043 72.3859 6.05936 72.3859 8.21501C72.3859 10.3707 73.9855 12.1195 75.9573 12.1195C77.929 12.1195 79.5286 10.3707 79.5286 8.21501C79.5286 6.05936 77.929 4.31043 75.9573 4.31043ZM41.9919 16.1868C37.9616 16.1868 34.7003 12.6077 34.7003 8.21501C34.7003 3.82236 37.974 0.243164 41.9919 0.243164C46.0097 0.243164 49.2834 3.82236 49.2834 8.21501C49.2834 12.6077 46.0097 16.1868 41.9919 16.1868ZM41.9919 4.31043C40.0201 4.31043 38.4205 6.05936 38.4205 8.21501C38.4205 10.3707 40.0201 12.1195 41.9919 12.1195C43.9636 12.1195 45.5632 10.3707 45.5632 8.21501C45.5632 6.05936 43.9636 4.31043 41.9919 4.31043ZM8.02645 16.1868C4.00864 16.1868 0.734863 12.6077 0.734863 8.21501C0.734863 3.82236 4.00864 0.243164 8.02645 0.243164C12.0443 0.243164 15.318 3.82236 15.318 8.21501C15.318 12.6077 12.0443 16.1868 8.02645 16.1868ZM8.02645 4.31043C6.05475 4.31043 4.45506 6.05936 4.45506 8.21501C4.45506 10.3707 6.05475 12.1195 8.02645 12.1195C9.99816 12.1195 11.5978 10.3707 11.5978 8.21501C11.5978 6.05936 9.99816 4.31043 8.02645 4.31043Z" fill="white" />
        </svg>
        <svg width="152" height="17" viewBox="0 0 152 17" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="absolute z-20 top-[62%] right-[23%]">
          <path id="Vector" d="M143.888 16.1868C139.858 16.1868 136.596 12.6077 136.596 8.21501C136.596 3.82236 139.87 0.243164 143.888 0.243164C147.906 0.243164 151.18 3.82236 151.18 8.21501C151.18 12.6077 147.906 16.1868 143.888 16.1868ZM143.888 4.31043C141.916 4.31043 140.317 6.05936 140.317 8.21501C140.317 10.3707 141.916 12.1195 143.888 12.1195C145.86 12.1195 147.459 10.3707 147.459 8.21501C147.459 6.05936 145.86 4.31043 143.888 4.31043ZM109.923 16.1868C105.905 16.1868 102.631 12.6077 102.631 8.21501C102.631 3.82236 105.905 0.243164 109.923 0.243164C113.94 0.243164 117.214 3.82236 117.214 8.21501C117.214 12.6077 113.94 16.1868 109.923 16.1868ZM109.923 4.31043C107.951 4.31043 106.351 6.05936 106.351 8.21501C106.351 10.3707 107.951 12.1195 109.923 12.1195C111.894 12.1195 113.494 10.3707 113.494 8.21501C113.494 6.05936 111.894 4.31043 109.923 4.31043ZM75.9573 16.1868C71.927 16.1868 68.6657 12.6077 68.6657 8.21501C68.6657 3.82236 71.9394 0.243164 75.9573 0.243164C79.9751 0.243164 83.2488 3.82236 83.2488 8.21501C83.2488 12.6077 79.9751 16.1868 75.9573 16.1868ZM75.9573 4.31043C73.9855 4.31043 72.3859 6.05936 72.3859 8.21501C72.3859 10.3707 73.9855 12.1195 75.9573 12.1195C77.929 12.1195 79.5286 10.3707 79.5286 8.21501C79.5286 6.05936 77.929 4.31043 75.9573 4.31043ZM41.9919 16.1868C37.9616 16.1868 34.7003 12.6077 34.7003 8.21501C34.7003 3.82236 37.974 0.243164 41.9919 0.243164C46.0097 0.243164 49.2834 3.82236 49.2834 8.21501C49.2834 12.6077 46.0097 16.1868 41.9919 16.1868ZM41.9919 4.31043C40.0201 4.31043 38.4205 6.05936 38.4205 8.21501C38.4205 10.3707 40.0201 12.1195 41.9919 12.1195C43.9636 12.1195 45.5632 10.3707 45.5632 8.21501C45.5632 6.05936 43.9636 4.31043 41.9919 4.31043ZM8.02645 16.1868C4.00864 16.1868 0.734863 12.6077 0.734863 8.21501C0.734863 3.82236 4.00864 0.243164 8.02645 0.243164C12.0443 0.243164 15.318 3.82236 15.318 8.21501C15.318 12.6077 12.0443 16.1868 8.02645 16.1868ZM8.02645 4.31043C6.05475 4.31043 4.45506 6.05936 4.45506 8.21501C4.45506 10.3707 6.05475 12.1195 8.02645 12.1195C9.99816 12.1195 11.5978 10.3707 11.5978 8.21501C11.5978 6.05936 9.99816 4.31043 8.02645 4.31043Z" fill="white" />
        </svg> 

{/* yellow circle svg  */}
       <svg  viewBox="0 0 167 172" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="absolute z-20 right-[8%] md:right-[4%] xl:right-[6%] top-[40%] xl:top-[37%] h-[120px] w-[100px] xl:h-[172px] lg:w-[167px]">
 
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g id="Group" filter="url(#glow)">
            <path id="Vector" d="M83.6058 171.623C37.7696 171.623 0.468262 133.128 0.468262 85.8225C0.468262 38.5166 37.7579 0.0214844 83.6058 0.0214844C129.454 0.0214844 166.743 38.5166 166.743 85.8225C166.743 133.128 129.454 171.623 83.6058 171.623ZM83.6058 3.66226C39.7094 3.66226 3.99503 40.5191 3.99503 85.8225C3.99503 131.126 39.7094 167.983 83.6058 167.983C127.502 167.983 163.217 131.126 163.217 85.8225C163.217 40.5191 127.502 3.66226 83.6058 3.66226Z" fill="yellow" />
            <path id="Vector_2" d="M83.6058 150.179C73.5427 150.179 65.349 141.733 65.349 131.332V104.657H39.5096C29.4466 104.657 21.2527 96.2108 21.2527 85.8103C21.2527 75.4099 29.4466 66.9633 39.5096 66.9633H65.349V40.2885C65.349 29.9001 73.5427 21.4414 83.6058 21.4414C93.6688 21.4414 101.863 29.9001 101.863 40.2885V66.9633H127.702C137.765 66.9633 145.959 75.4099 145.959 85.8103C145.959 96.2108 137.765 104.657 127.702 104.657H101.863V131.332C101.863 141.721 93.6688 150.179 83.6058 150.179ZM39.5096 70.6162C31.3863 70.6162 24.7794 77.4366 24.7794 85.8225C24.7794 94.2084 31.3863 101.029 39.5096 101.029H67.1124C68.0881 101.029 68.8758 101.842 68.8758 102.849V131.344C68.8758 139.73 75.4825 146.551 83.6058 146.551C91.7291 146.551 98.3359 139.73 98.3359 131.344V102.849C98.3359 101.842 99.1236 101.029 100.099 101.029H127.702C135.825 101.029 142.432 94.2084 142.432 85.8225C142.432 77.4366 135.825 70.6162 127.702 70.6162H100.099C99.1236 70.6162 98.3359 69.8031 98.3359 68.7958V40.3006C98.3359 31.9147 91.7291 25.0943 83.6058 25.0943C75.4825 25.0943 68.8758 31.9147 68.8758 40.3006V68.7958C68.8758 69.8031 68.0881 70.6162 67.1124 70.6162H39.5096Z" fill="#bae6fd" />
          </g>
        </svg>




{/* star svg */}
<svg width="55" height="57" viewBox="0 0 55 57" fill="#572649" xmlns="http://www.w3.org/2000/svg"
  className="absolute z-20 top-[35%] right-[22%]">
  
  <defs>
    <filter id="pink-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <path id="Vector" d="M27.6694 56.202C26.6482 56.202 25.8239 55.355 25.8239 54.3058C25.8239 36.8482 19.205 30.0472 2.21481 30.0472C1.19367 30.0472 0.369385 29.2003 0.369385 28.1511C0.369385 27.1018 1.19367 26.2549 2.21481 26.2549C19.205 26.2549 25.8239 19.4539 25.8239 1.99629C25.8239 0.947062 26.6482 0.100098 27.6694 0.100098C28.6905 0.100098 29.5148 0.947062 29.5148 1.99629C29.5148 19.4539 36.1337 26.2549 53.1239 26.2549C54.145 26.2549 54.9693 27.1018 54.9693 28.1511C54.9693 29.2003 54.145 30.0472 53.1239 30.0472C36.1337 30.0472 29.5148 36.8482 29.5148 54.3058C29.5148 55.355 28.6905 56.202 27.6694 56.202ZM15.3788 28.1384C21.5425 30.3127 25.541 34.4338 27.6694 40.767C29.7854 34.4338 33.7962 30.3254 39.9599 28.1384C33.7962 25.9641 29.7977 21.8431 27.6694 15.5098C25.541 21.8431 21.5425 25.9515 15.3788 28.1384Z" fill="white" filter="url(#pink-glow)" />
</svg>

{/* star svg */}
<svg width="55" height="57" viewBox="0 0 55 57" fill="#572649" xmlns="http://www.w3.org/2000/svg"
  className="absolute z-20 top-[58%] left-[22%]">
  
  <defs>
    <filter id="pink-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <path id="Vector" d="M27.6694 56.202C26.6482 56.202 25.8239 55.355 25.8239 54.3058C25.8239 36.8482 19.205 30.0472 2.21481 30.0472C1.19367 30.0472 0.369385 29.2003 0.369385 28.1511C0.369385 27.1018 1.19367 26.2549 2.21481 26.2549C19.205 26.2549 25.8239 19.4539 25.8239 1.99629C25.8239 0.947062 26.6482 0.100098 27.6694 0.100098C28.6905 0.100098 29.5148 0.947062 29.5148 1.99629C29.5148 19.4539 36.1337 26.2549 53.1239 26.2549C54.145 26.2549 54.9693 27.1018 54.9693 28.1511C54.9693 29.2003 54.145 30.0472 53.1239 30.0472C36.1337 30.0472 29.5148 36.8482 29.5148 54.3058C29.5148 55.355 28.6905 56.202 27.6694 56.202ZM15.3788 28.1384C21.5425 30.3127 25.541 34.4338 27.6694 40.767C29.7854 34.4338 33.7962 30.3254 39.9599 28.1384C33.7962 25.9641 29.7977 21.8431 27.6694 15.5098C25.541 21.8431 21.5425 25.9515 15.3788 28.1384Z" fill="white" filter="url(#pink-glow)" />
</svg>



            </div>
        </div>
    );
};
