

import Lightbox from 'yet-another-react-lightbox';
import  'yet-another-react-lightbox/styles.css';
import { RowsPhotoAlbum } from 'react-photo-album';
import { media } from '../../utils/media_urls';
import React from 'react';
import VideoBackground from '../../components/VideoBackground';
import {BACKGROUNDS} from '../../utils/backgrounds'; 
import NavBar from '../../components/NavBar/Navbar';
import GalleryComponent from '../../components/Gallery/GalleryComponent';
const Gallery = () => {
	const [index, setIndex] = React.useState(-1);
  
  	
  	return (
      <>	
	  	<NavBar/>
	 	<VideoBackground url ={BACKGROUNDS.Gallery}  />
		<GalleryComponent/>
      	
        </>);
};

export default Gallery;