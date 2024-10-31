import LightGallery from 'lightgallery/react';
import styled from 'styled-components';
// import styles

import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

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
import React, { useState, useRef, useCallback, useEffect, useMemo} from 'react';
import VideoBackground from '../../components/VideoBackground';
import {BACKGROUNDS} from '../../utils/backgrounds'; 
import NavBar from '../../components/NavBar/Navbar';


import Lottie from "react-lottie";
import animationData from "../../utils/Transparent vivbing.json";

import styles from '../../components/VideoBackground.module.css';
import load from "../../utils/vid/load.mp4";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
    for(let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
export function Gallery({isJamming,setIsJamming}) {
    const [vidIndex, setVidIndex] = useState(0);
    const [urls, setUrls] = useState([]);
    const [gallery_urls, setGalleryUrls] = useState([]);

    useMemo(async() => {
        initializeApp(firebaseConfig);
        const storage = getStorage();
        const storageRef = ref(storage, 'pecfest');
        const ref1 = await listAll(storageRef
          
        );
        const temp = [];
        ref1.items.forEach((item)=>{
          temp.push(getDownloadURL(item));
        })
        let temp2 = await Promise.all(temp);
        const temp3 = [];
        const temp4 = await Promise.all(shuffleArray(temp2));
        console.log(temp4);
        await Promise.all(temp4.map(async(url)=>{
          if(url.toLowerCase().includes(".mp4")){
            temp3.push({
              video: {
                source: [
                  {
                    src: url,
                    type: 'video/mp4',
                  },
                ],
                attributes: { preload: false, controls: true },
              },
            });
          }
          else{
            temp3.push({
              "type": "image",
              "src": url
            });
          }
        }));
        // console.log(temp3);
        // setUrls(temp2);
        // await listAll(storageRef)
        //   .then((res) => {
        //     const urls1 = [];
        //     res.items.forEach(async (itemRef) => {
        //       await getDownloadURL(itemRef)
        //         .then((url) => {
        //           if(url.toLowerCase().includes(".mp4")){
        //             urls1.push({
        //               video: {
        //                 source: [
        //                   {
        //                     src: url,
        //                     type: 'video/mp4',
        //                   },
        //                 ],
        //                 attributes: { preload: false, controls: true },
        //               },
        //             });
        //           }
        //           else{
        //             urls1.push({
        //               "type": "image",
        //               "src": url
        //             });
        //           }
                  
        //         })
        //         .catch((error) => {
        //           console.error('Error getting download URL:', error);
        //         });
        //     });
        //     console.log(urls1);
        //     setUrls(urls1);
        //     // shuffleArray(urls1);
        //     // Once all URLs are fetched, you can use the 'gallery_urls' 
        //   })
        //   .catch((error) => {
        //     console.error('Error listing files:', error);
        //   });
      // getMedia();
      // console.log(1);
      setUrls(temp3);  
    }, []);
    useMemo(() => {
      setGalleryUrls(urls);
      // console.log(2);
      // if(urls!=[]) {console.log(50);}
      // console.log(urls.length);
    },[urls]);
    // useMemo(()=>{
    //   console.log(3);
    //   console.log(urls.length);
    // }, [urls,gallery_urls]);

    const lightGallery = useRef(null);
    const openGallery = useCallback((inx) => {
        lightGallery.current.openGallery(inx);
    }, []);
    const onInit = useCallback((detail) => {
        if (detail) {
          lightGallery.current = detail.instance;
        }
    }, []);

    
    
    // useEffect(() => {
    //   console.log(urls);
    //   setMediaUrls(urls);
    // }, [urls]);
    return (
        
        <StyledDiv className="App">
            {/* {console.log("return")} */}
            <NavBar/>
            <VideoBackground url ={BACKGROUNDS.Gallery}  />
            <div className={styles['video-background']}>
              {(vidIndex===0) && <video
                style={{ display: vidIndex === 1? "none" : "block",
                  
                 }}
                {...console.log(vidIndex)}
                src={load}
                autoPlay
                muted
                onEnded={() => setVidIndex((idx) => idx + 1)}
              />}
            </div>
            <GalleryDiv>
              {(urls!=[] && vidIndex ===1) &&
              <LightGallery
                  // onInit={onInit}
                  // speed={500}
                  // dynamic={true}  
                  // plugins={[lgVideo,lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
                  plugins={[lgVideo]}
                  elementClassNames="custom-classname"
                  dynamic
                  dynamicEl={gallery_urls}
                  onInit={onInit}

              >
                  {/* {console.log("render")} */}

                  {/* {console.log(gallery_urls)} */}
                  {gallery_urls.map((media, index) => {
                      return (
                          
                          <button onClick={() => openGallery(index)} key={index}>
                            {/* {!media.hasOwnProperty("type") && console.log(media.video.source[0].src)} */}
                            {!media.hasOwnProperty("type") && <video alt={index} src={media.video.source[0].src} />}
                            {media.hasOwnProperty("type") && <img alt={index} src={media.src} />}
                            {/* {console.log(media)} */}
                              
                              
                          </button>
                      )
                  })}


              </LightGallery>
            }
            </GalleryDiv>
            
           
            <div
            style={{
              position: "fixed !important",
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
                style={{
                  position: "fixed",
                  bottom: "0",
                  left: "0"
                }}
              />
            ) : (
              <h2
                style={{
                  color: "#fbff00",
                  position: "fixed",
                  bottom: "50px",
                  left: "50px",
                  fontFamily: "Cyber Chunk Font",
                  fontSize: "1.2rem",
                }}
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
  scrollbar-width: none !important;
  /* @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.3.0/css/lightgallery.css');
  @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.3.0/css/lg-zoom.css');
  @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.3.0/css/lg-video.css'); */

  /* @font-face {
      font-family: 'lg';
      src: url("../../utils/fonts/lg.ttf?22t19m") format("truetype"), url("../../utils/fonts/lg.woff?22t19m") format("woff"), url("../../utils/fonts/lg.svg?22t19m#lg") format("svg");
      font-weight: normal;
      font-style: normal;
      font-display: block;
    } */

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

  video {
      max-width: 100%;
      display: block;
      padding: 5px 0px;
      border-radius: 20px;
      transition: transform 0.2s;
  }

  video:hover {
      filter: opacity(.9);
      transform: scale(1.01);
  }

  .nav a:hover,button:hover {
    color: rgba(255, 255, 255, 0) !important;
  }
`