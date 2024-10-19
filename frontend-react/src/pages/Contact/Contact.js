import React from 'react'
import contact from '../../utils/svgs/contacts.svg'
import VideoBackground from "../../components/VideoBackground";
import { BACKGROUNDS } from "../../utils/backgrounds";
import NavBar from '../../components/NavBar/Navbar';
export default function Contact() {
    return (
        <div>
            <NavBar />
            <VideoBackground url={BACKGROUNDS.Contact} />
            <div
                style={{
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    marginTop: '-5vh'
                }}
            >
                <img
                    style={{
                        width: `calc(80vw)`,
                        height: `calc(70vh)`,
                        position: 'absolute' // This will position the image absolutely inside the flex container
                    }}
                    src={contact}
                />
            </div>

        </div>
    )
}
