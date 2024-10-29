import LightGallery from 'lightgallery/react';
import styled from 'styled-components';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import "lightgallery/css/lg-video.css";
import lgVideo from "lightgallery/plugins/video";


import { media } from '../../utils/media_urls';
import React, { useState, useRef, useCallback, useEffect} from 'react';
import VideoBackground from '../../components/VideoBackground';
import {BACKGROUNDS} from '../../utils/backgrounds'; 
import NavBar from '../../components/NavBar/Navbar';


import Lottie from "react-lottie";
import animationData from "../../utils/Transparent vivbing.json";

import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	// measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
const getMedia = () => {
  console.log(process.env.REACT_APP_STORAGE_BUCKET)
  initializeApp(firebaseConfig);
  // Reference to the storage folder
  const storage = getStorage();
  const storageRef = ref(storage, 'pecfest');
  // const childRef = storageRef.child('pecfest/');

  // List files in the folder
  listAll(storageRef)
    .then((res) => {
      const urls = [];

      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef)
          .then((url) => {
            urls.push(url);
          })
          .catch((error) => {
            console.error('Error getting download URL:', error);
          });
      });

      // Once all URLs are fetched, you can use the 'urls' 
      shuffleArray(urls);
      console.log(urls);
    })
    .catch((error) => {
      console.error('Error listing files:', error);
    });
}



const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

export function Gallery({isJamming,setIsJamming}) {
    // const onInit = () => {
    //     console.log('lightGallery has been initialized');
    // };
    const [items, setItems] = useState([
        {
          id: '1',
          size: '1400-933',
          src: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
          thumb:
            'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80',
          subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`,
        },
        {
          video: {
            source: [
              {
                src: 'https://www.lightgalleryjs.com//videos/video1.mp4',
                type: 'video/mp4',
              },
            ],
            attributes: { preload: false, controls: true },
          },
          thumb:
            'https://www.lightgalleryjs.com//images/demo/html5-video-poster.jpg',
          subHtml: `<div class="lightGallery-captions">
                          <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                          <p>Description of the slide 2</p>
                      </div>`,
        },
        {
          id: '2',
          size: '1400-933',
          src: 'https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
          thumb:
            'https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80',
          subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
                    <p>Published on September 14, 2016</p>
                </div>`,
        },
        {
          id: '3',
          size: '1400-932',
          src: 'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
          thumb:
            'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
          subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
        },
        {
          id: '4',
          size: '1400-932',
          src: 'https://www.lightgalleryjs.com/pdf/sample.pdf',
          iframe: true,
        },
        {
          id: '5',
          size: '1400-932',
          src: 'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
          thumb:
            'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
          subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
        },
      ]);
    const lightGallery = useRef(null);
    const openGallery = useCallback(() => {
        lightGallery.current.openGallery();
    }, []);
    const onInit = useCallback((detail) => {
        if (detail) {
          lightGallery.current = detail.instance;
        }
    }, []);

    useEffect(() => {
    
      getMedia()
    }, []);
    return (
        
        <StyledDiv className="App">
            <NavBar/>
            <VideoBackground url ={BACKGROUNDS.Gallery}  />
            <GalleryDiv>
              <LightGallery
                  // onInit={onInit}
                  // speed={500}
                  // dynamic={true}  
                  // plugins={[lgVideo,lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
                  plugins={[lgVideo]}
                  elementClassNames="custom-classname"
                  dynamic
                  dynamicEl={media}
                  onInit={onInit}

              >

                  {media.map((media, index) => {
                      return (
                          <button onClick={openGallery} key={index}>
                              {media.type === 'image' && <img alt={index} src={media.src} />}
                              {media.type === 'video' && <video alt={index} src={media.src} />}
                              
                              
                          </button>
                      )
                  })}


              </LightGallery>
            </GalleryDiv>
            
           
            <div
            style={{
              position: "absolute !important",
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
            
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
  ::-webkit-scrollbar {
	display: none !important; /* Hide scrollbar in Chrome, Safari, and Edge */
  }
  /* @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.3.0/css/lightgallery.css');
  @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.3.0/css/lg-zoom.css');
  @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.3.0/css/lg-video.css'); */

  @font-face {
      font-family: 'lg';
      src: url("../../utils/fonts/lg.ttf?22t19m") format("truetype"), url("../../utils/fonts/lg.woff?22t19m") format("woff"), url("../../utils/fonts/lg.svg?22t19m#lg") format("svg");
      font-weight: normal;
      font-style: normal;
      font-display: block;
    }

  .lg-icon{
    .nav a::after,button::after {
    content: '';
    position: relative !important;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255,0) !important;  
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .nav a:hover,button:hover {
    color: rgba(255, 255, 255, 0) !important;
  }

  }

  .lg-toolbar{
    .nav a::after,button::after {
    content: '';
    position: relative !important;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255,0) !important;  
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .nav a:hover,button:hover {
    color: rgba(255, 255, 255, 0) !important;
  }
  }

  .lg-react-element {
      column-count: 3;
      column-gap: 10px;
  }

  img {
      max-width: 100%;
      display: block;
      padding: 5px 0px;
      border-radius: 20px;
      transition: transform 0.2s;
  }

  img:hover {
      filter: opacity(.9);
      transform: scale(1.01);
  }


`

const GalleryDiv = styled.div`
  padding-top: 3vh;
  .nav a::after,button::after {
    content: '';
    position: relative !important;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255,0) !important;  
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .nav a:hover,button:hover {
    color: rgba(255, 255, 255, 0) !important;
  }
`