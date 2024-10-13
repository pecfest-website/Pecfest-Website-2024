import React from 'react'
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaTag } from 'react-icons/fa';
import { PiTagSimple } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

function EventCard({ name, committee, photo, tags,id}) {
    const navigate = useNavigate();
    return (
        <div
        style={{
            width: 322,
            height: 322,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'inline-flex',
            cursor: 'pointer',
        }}
        onClick={() => navigate(`/events/${id}`)}
    >
            <div style={{ width: 322, height: 322, position: 'relative' }}>

                <div style={{ width: 121.51, height: 24.30, left: 100.25, top: 221.75, position: 'absolute', opacity: 0.50, mixBlendMode: 'multiply', background: 'radial-gradient(100.14% 100.13% at -64007.74% -79284.44%, black 0%, #242424 6%, #575757 16%, #848484 26%, #AAAAAA 37%, #C9C9C9 48%, #E0E0E0 59%, #F1F1F1 71%, #FBFBFB 84%, white 100%)' }}></div>
                <div style={{ width: 121.51, height: 24.30, left: 100.25, top: 75.94, position: 'absolute', opacity: 0.50, mixBlendMode: 'multiply', background: 'radial-gradient(100.14% 100.13% at -64571.84% -2065682.73%, black 0%, #242424 6%, #575757 16%, #848484 26%, #AAAAAA 37%, #C9C9C9 48%, #E0E0E0 59%, #F1F1F1 71%, #FBFBFB 84%, white 100%)' }}></div>
                <div style={{ width: 24.30, height: 121.51, left: 221.75, top: 100.25, position: 'absolute', opacity: 0.50, mixBlendMode: 'multiply', background: 'radial-gradient(100.14% 100.13% at -66423.33% -4883.62%, black 0%, #242424 6%, #575757 16%, #848484 26%, #AAAAAA 37%, #C9C9C9 48%, #E0E0E0 59%, #F1F1F1 71%, #FBFBFB 84%, white 100%)' }}></div>
                <div style={{ width: 24.30, height: 121.51, left: 75.94, top: 100.25, position: 'absolute', opacity: 0.50, mixBlendMode: 'multiply', background: 'radial-gradient(100.14% 100.13% at -66982.46% -4883.62%, black 0%, #242424 6%, #575757 16%, #848484 26%, #AAAAAA 37%, #C9C9C9 48%, #E0E0E0 59%, #F1F1F1 71%, #FBFBFB 84%, white 100%)' }}></div>
                <div style={{ width: 48.60, height: 3.04, left: 136.70, top: 230.87, position: 'absolute', background: '#0080FF' }}></div>
                <div style={{ width: 48.60, height: 3.04, left: 136.70, top: 88.09, position: 'absolute', background: '#0080FF' }}></div>


                {/* Black square with cut corners */}
                <div style={{
                    width: 291.62,
                    height: 291.62,
                    left: 15.19,
                    top: 15.19,
                    position: 'absolute',
                    background: 'black',
                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)'
                }}>
                </div>

                <style>
                    {`
.image-container {
position: relative;
overflow: hidden;
}

.custom-overlay {
position: absolute;
bottom: -50%; /* Start off-screen */
left: 0;
width: 100%;
height: 50%; /* Covers half the image */
background-color: rgba(0, 0, 0, 0.9); /* Darker black background */
color: white;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
text-align: left;
font-size: 1rem;
transition: bottom 0.5s ease; /* Smooth transition */
border-top-left-radius: 50px; /* Large rounded top-left corner */
/* Slight rounded top-right corner */
}

.image-container:hover .custom-overlay {
bottom: 0; /* Slide the overlay up when hovered */
}

.image-container img {
width: 100%;
height: 100%;
object-fit: cover;
}

.profile-img {
width: 50px;
height: 50px;
border-radius: 50%;
margin-right: 10px;
object-fit: cover;
background-color: grey; /* Placeholder color for the image */
}

.social-icons {
margin-top: 10px;
display: flex;
gap: 15px;
}

.social-icons i {
font-size: 1.5rem;
color: white;
transition: color 0.3s;
}

.social-icons i:hover {
color: #0080FF; /* Color change on hover */
}

.name-text {
font-family: 'Chalkduster', cursive; /* Font style to match the image */
font-size: 1.2rem;
margin-left: 10px;
}
`}
                </style>

                <div className="image-container" style={{
                    width: 230.62,
                    height: 230.62,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    transition: 'all 0.5s ease' // Added transition for smooth hover effect
                }}>
                    <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                    {/* Name overlay div */}
                    <div className="custom-overlay" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',  // Vertically center
                        alignItems: 'center',      // Horizontally center
                        // Full height of the container
                    }}>
                        <div style={{
                            display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',  // Vertically center
                            alignItems: 'center',
                        }}>

                            <span className="name-text" style={{ fontWeight: 'bold', marginTop: '10px' }}>{name}</span> {/* Name */}
                            <span className="committee-text" style={{ fontSize: '0.8rem', marginBottom: '10px' }}>{committee}</span> {/* Committee */}
                        </div>
                        <div className="social-icons" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            {tags.map((tag)=><><FaTag/>{tag}</>)}
                        </div>
                    </div>
                </div>
                {/* First Rectangle (Top) */}
                <div className="animate-on-hover" style={{
                    width: 145.81,
                    height: 18.15,
                    left: 82.09,
                    top: 3,
                    position: 'absolute',
                    backgroundColor: 'white',
                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
                    transition: 'all 0.5s ease' // Added transition for smooth hover effect
                }}></div>

                {/* Second Rectangle (Right) */}
                <div className="animate-on-hover" style={{
                    width: 18.15,
                    height: 145.81,
                    left: 302.77,
                    top: 82.09,
                    position: 'absolute',
                    backgroundColor: 'white',
                    clipPath: 'polygon(50% 0%, 100% 10%, 100% 90%, 50% 100%, 0% 90%, 0% 10%)',
                    transition: 'all 0.5s ease' // Added transition for smooth hover effect
                }}></div>

                {/* Third Rectangle (Bottom) */}
                <div className="animate-on-hover" style={{
                    width: 145.81,
                    height: 18.15,
                    left: 82.09,
                    top: 300.77,
                    position: 'absolute',
                    backgroundColor: 'white',
                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
                    transition: 'all 0.5s ease' // Added transition for smooth hover effect
                }}></div>

                {/* Fourth Rectangle (Left) */}
                <div className="animate-on-hover" style={{
                    width: 18.15,
                    height: 145.81,
                    left: 1.08,
                    top: 82.09,
                    position: 'absolute',
                    backgroundColor: 'white',
                    clipPath: 'polygon(50% 0%, 100% 10%, 100% 90%, 50% 100%, 0% 90%, 0% 10%)',
                    transition: 'all 0.5s ease' // Added transition for smooth hover effect
                }}></div>

                {/* Add hover effects using CSS */}
                <style>
                    {`
    .image-container:hover ~ .animate-on-hover {
        transform: scale(1.1); /* Increase size slightly */
    }
    .image-container:hover {
        transform: scale(1.05) translate(-50%, -50%); /* Slight zoom on hover */
    }
    `}
                </style>

                <style>
                    {`
.image-container:hover ~ .animate2-on-hover {
transform: translateX(10px); /* Move 10px right on the x-axis */
transition: transform 0.5s ease; /* Smooth transition */
}
.image-container:hover ~ .animate22-on-hover {
transform: translateX(-10px); /* Move 10px right on the x-axis */
transition: transform 0.5s ease; /* Smooth transition */
}
.image-container:hover {
transform: scale(1.05) translate(-50%, -50%); /* Slight zoom on hover for image */
}
`}
                </style>

                {/* First black rectangle (Bottom) */}
                <div className="animate2-on-hover" style={{
                    width: 97.21,
                    height: 12.15,
                    left: 112.40,
                    top: 309.85,
                    position: 'absolute',
                    background: 'black',
                    transition: 'transform 0.5s ease' // Added transition for smooth hover effect
                }}></div>

                {/* Second black rectangle (Top) */}
                <div className="animate22-on-hover" style={{
                    width: 97.21,
                    height: 12.15,
                    left: 112.40,
                    top: 0,
                    position: 'absolute',
                    background: 'black',
                    transition: 'transform 0.5s ease' // Added transition for smooth hover effect
                }}></div>


                <div style={{
                    width: 15.19,
                    height: 194.41,
                    left: 12.15,
                    top: 63.79,
                    position: 'absolute',
                    background: 'linear-gradient(90deg, #00A0FF 0%, #0080FF 100%)',
                    clipPath: 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)' // Tapered on the right side
                }}></div>

                <div style={{
                    width: 15.19,
                    height: 194.41,
                    left: 294.66,
                    top: 63.79,
                    position: 'absolute',
                    background: 'linear-gradient(90deg, #0080FF 0%, #00A0FF 100%)',
                    clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 90%)' // Tapered on the left side
                }}></div>

                <div style={{
                    width: 194.41,
                    height: 15.19,
                    left: 63.79,
                    top: 294.66,
                    position: 'absolute',
                    background: 'linear-gradient(0deg, #00A0FF 0%, #0080FF 100%)',
                    clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0 100%)' // Tapered on the top side
                }}></div>

                <div style={{
                    width: 194.41,
                    height: 15.19,
                    left: 63.79,
                    top: 12.15,
                    position: 'absolute',
                    background: 'linear-gradient(0deg, #0080FF 0%, #00A0FF 100%)',
                    clipPath: 'polygon(10% 100%, 90% 100%, 100% 0, 0 0)' // Tapered on the bottom side
                }}></div>

<style>
                    {`
.image-container:hover ~ .left-black-rect {
 transform: translateY(-20px); /* Move up */
 transition: transform 0.5s ease;
}
.image-container:hover ~ .right-black-rect {
 transform: translateY(20px); /* Move up */
 transition: transform 0.5s ease;
}
`}
</style>
                <div className='left-black-rect'  style={{ width: 12.15, height: 97.21, left: 0, top: 112.40, position: 'absolute', background: 'black', transition: 'all 0.5s ease' }}></div>
                <div className='right-black-rect' style={{ width: 12.15, height: 97.21, left: 309.85, top: 112.40, position: 'absolute', background: 'black',  transition: 'all 0.5s ease' }}></div>
                <div style={{ width: 6.08, height: 6.08, left: 69.87, top: 12.15, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.17, top: 3.67, position: 'absolute', transform: 'rotate(-80.75deg)', transformOrigin: '0 0', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 246.06, top: 12.15, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.28, top: 2.28, position: 'absolute', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 294.66, top: 78.98, position: 'absolute' }}> 
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.28, top: 2.28, position: 'absolute', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 303.77, top: 69.87, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.28, top: 2.28, position: 'absolute', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 303.77, top: 246.06, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.28, top: 2.28, position: 'absolute', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 236.94, top: 294.66, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.28, top: 2.28, position: 'absolute', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 246.06, top: 303.77, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.28, top: 2.28, position: 'absolute', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 78.98, top: 294.66, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.28, top: 2.28, position: 'absolute', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 21.26, top: 236.94, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.28, top: 2.28, position: 'absolute', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 12.15, top: 246.06, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.28, top: 2.28, position: 'absolute', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 21.26, top: 78.98, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.28, top: 2.28, position: 'absolute', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 12.15, top: 69.87, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.28, top: 2.28, position: 'absolute', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 69.87, top: 303.77, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.17, top: 3.68, position: 'absolute', transform: 'rotate(-80.75deg)', transformOrigin: '0 0', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 294.66, top: 236.94, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.28, top: 2.28, position: 'absolute', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 78.98, top: 21.26, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.28, top: 2.28, position: 'absolute', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 236.94, top: 21.26, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 1.52, height: 1.52, left: 2.28, top: 2.28, position: 'absolute', background: 'black' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute', border: '0.54px white solid' }}></div>
                </div>
                <div style={{ width: 36.45, height: 6.08, left: 142.77, top: 3.04, position: 'absolute', opacity: 0.25 }}>
                    <div style={{ width: 0, height: 6.08, left: 0, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.08, left: 3.04, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.08, left: 6.08, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.08, left: 9.11, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.08, left: 12.15, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.08, left: 15.19, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.08, left: 18.23, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.08, left: 21.26, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.08, left: 24.30, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.08, left: 27.34, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.08, left: 30.38, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.08, left: 33.41, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.08, left: 36.45, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                </div>
                <div style={{ width: 36.45, height: 6.07, left: 142.77, top: 312.89, position: 'absolute', opacity: 0.25 }}>
                    <div style={{ width: 0, height: 6.07, left: 0, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.07, left: 3.04, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.07, left: 6.08, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.07, left: 9.11, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.07, left: 12.15, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.07, left: 15.19, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.07, left: 18.23, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.07, left: 21.26, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.07, left: 24.30, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.07, left: 27.34, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.07, left: 30.38, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.07, left: 33.41, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                    <div style={{ width: 0, height: 6.07, left: 36.45, top: 0, position: 'absolute', border: '4.35px white solid' }}></div>
                </div>
                <div style={{ width: 6.07, height: 0, left: 312.89, top: 191.38, position: 'absolute', border: '2.17px white solid' }}></div>
                <div style={{ width: 6.07, height: 0, left: 312.89, top: 188.34, position: 'absolute', border: '2.17px white solid' }}></div>
                <div style={{ width: 0, height: 12.15, left: 19.74, top: 112.40, position: 'absolute', border: '4.35px black solid' }}></div>
                <div style={{ width: 6.07, height: 6.08, left: 218.72, top: 97.21, position: 'absolute' }}>
                    <div style={{ width: 6.07, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute' }}>
                        <div style={{ width: 3.04, height: 0, left: 0, top: 1.52, position: 'absolute', border: '2.17px white solid' }}></div>
                        <div style={{ width: 0, height: 3.04, left: 1.52, top: 0, position: 'absolute', border: '2.17px white solid' }}></div>
                    </div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 97.21, top: 97.21, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute' }}>
                        <div style={{ width: 3.04, height: 0, left: 0, top: 1.52, position: 'absolute', border: '2.17px white solid' }}></div>
                        <div style={{ width: 0, height: 3.04, left: 1.52, top: 0, position: 'absolute', border: '2.17px white solid' }}></div>
                    </div>
                </div>
                <div style={{ width: 6.07, height: 6.07, left: 218.72, top: 218.72, position: 'absolute' }}>
                    <div style={{ width: 6.07, height: 6.07, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute' }}>
                        <div style={{ width: 3.04, height: 0, left: 0, top: 1.52, position: 'absolute', border: '2.17px white solid' }}></div>
                        <div style={{ width: 0, height: 3.04, left: 1.52, top: 0, position: 'absolute', border: '2.17px white solid' }}></div>
                    </div>
                </div>
                <div style={{ width: 6.08, height: 6.07, left: 97.21, top: 218.72, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.07, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute' }}>
                        <div style={{ width: 3.04, height: 0, left: 0, top: 1.52, position: 'absolute', border: '2.17px white solid' }}></div>
                        <div style={{ width: 0, height: 3.04, left: 1.52, top: 0, position: 'absolute', border: '2.17px white solid' }}></div>
                    </div>
                </div>

                <div style={{ width: 6.08, height: 6.08, left: 12.15, top: 12.15, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute' }}>
                        <div style={{ width: 3.04, height: 0, left: -0, top: 1.52, position: 'absolute', border: '2.17px white solid' }}></div>
                        <div style={{ width: 0, height: 3.04, left: 1.52, top: -0, position: 'absolute', border: '2.17px white solid' }}></div>
                    </div>
                </div>
                <div style={{ width: 6.08, height: 6.08, left: 303.77, top: 303.77, position: 'absolute' }}>
                    <div style={{ width: 6.08, height: 6.08, left: 0, top: 0, position: 'absolute' }}></div>
                    <div style={{ width: 3.04, height: 3.04, left: 1.52, top: 1.52, position: 'absolute' }}>
                        <div style={{ width: 3.04, height: 0, left: -0, top: 1.52, position: 'absolute', border: '2.17px white solid' }}></div>
                        <div style={{ width: 0, height: 3.04, left: 1.52, top: -0, position: 'absolute', border: '2.17px white solid' }}></div>
                    </div>
                </div>
                <div style={{ width: 9.11, height: 9.11, left: 297.70, top: 156.44, position: 'absolute', background: 'black' }}></div>
                <div style={{ width: 15.19, height: 97.21, left: 294.66, top: 63.79, position: 'absolute', opacity: 0.50, mixBlendMode: 'screen', background: 'linear-gradient(180deg, white 0%, #DADADA 6%, #A7A7A7 16%, #7A7A7A 26%, #545454 37%, #353535 48%, #1E1E1E 59%, #0D0D0D 71%, #030303 84%, black 100%)' }}></div>
                <div style={{ width: 15.19, height: 97.21, left: 12.15, top: 63.79, position: 'absolute', opacity: 0.50, mixBlendMode: 'screen', background: 'linear-gradient(180deg, white 0%, #DADADA 6%, #A7A7A7 16%, #7A7A7A 26%, #545454 37%, #353535 48%, #1E1E1E 59%, #0D0D0D 71%, #030303 84%, black 100%)' }}></div>
                <div style={{ width: 24.30, height: 9.11, left: 209.60, top: 15.19, position: 'absolute', opacity: 0.50 }}>
                    <div style={{ width: 0.54, height: 0.54, left: 0, top: 0, position: 'absolute', background: 'white' }}></div>
                    <div style={{ width: 3.58, height: 3.58, left: 0, top: 0, position: 'absolute', background: 'white' }}></div>
                    <div style={{ width: 6.61, height: 6.61, left: 0, top: 0, position: 'absolute', background: 'white' }}></div>
                    <div style={{ width: 9.65, height: 9.11, left: 0, top: 0, position: 'absolute', background: 'white' }}></div>
                    <div style={{ width: 10.19, height: 9.11, left: 2.50, top: -0, position: 'absolute', background: 'white' }}></div>
                    <div style={{ width: 10.19, height: 9.11, left: 5.54, top: -0, position: 'absolute', background: 'white' }}></div>
                    <div style={{ width: 10.19, height: 9.11, left: 8.57, top: -0, position: 'absolute', background: 'white' }}></div>
                    <div style={{ width: 10.19, height: 9.11, left: 11.61, top: -0, position: 'absolute', background: 'white' }}></div>
                    <div style={{ width: 9.66, height: 9.11, left: 14.65, top: -0, position: 'absolute', background: 'white' }}></div>
                    <div style={{ width: 6.62, height: 6.62, left: 17.69, top: 2.50, position: 'absolute', background: 'white' }}></div>
                    <div style={{ width: 3.58, height: 3.58, left: 20.73, top: 5.54, position: 'absolute', background: 'white' }}></div>
                    <div style={{ width: 0.54, height: 0.54, left: 23.76, top: 8.57, position: 'absolute', background: 'white' }}></div>
                </div>
            </div>

        </div>
    )
}

export default EventCard