

import Lightbox from 'yet-another-react-lightbox';
import  'yet-another-react-lightbox/styles.css';
import { RowsPhotoAlbum } from 'react-photo-album';
import { media } from '../../utils/media_urls';
import React, { useState } from 'react';
import VideoBackground from '../../components/VideoBackground';
import {BACKGROUNDS} from '../../utils/backgrounds'; 
import NavBar from '../../components/NavBar/Navbar';
import GalleryComponent from '../../components/Gallery/GalleryComponent';
import HexagonCard from '../../components/Cards/ImageVideoCard';


import Lottie from "react-lottie";
import animationData from "../../utils/Transparent vivbing.json";
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
const Gallery = ({isJamming,setIsJamming}) => {
	const [index, setIndex] = React.useState(-1);
	const [items]= useState(media)
  	
  	return (
      <>	
	  	<NavBar/>
	 	<VideoBackground url ={BACKGROUNDS.Gallery}  />
		
		<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
			<GalleryComponent/>
    </div>
	<div
        style={{
          position: "absolute",
          zIndex: 1,
          left: 0,
          bottom: 0,
          cursor: "pointer",
        }}
        onClick={() => setIsJamming((prev) => !prev)} 
      >
        {isJamming ? (
          <Lottie
            options={defaultOptions}
            height={200}
            width={200}
            // Wrap in an arrow function
          />
        ) : (
          <h2
            style={{
              color: "#fbff00",
              position: "absolute",
              bottom: "50px",
              left: "50px",
              fontFamily: "Cyber Chunk Font",
              fontSize: "1.2rem",
            }}
      // Wrap in an arrow function
          >
            Jam?
          </h2>
        )}
      </div>
        </>);
};

export default Gallery;