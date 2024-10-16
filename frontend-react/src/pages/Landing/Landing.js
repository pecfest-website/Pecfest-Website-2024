import { useEffect, useState, useRef } from "react";
import vid1 from "../../utils/vid/land1.mp4";
import vid2 from "../../utils/vid/land2.mp4";
import styled from 'styled-components';

//replace with links in backgrounds.landing1 2
// const videoIntro = "https://www.w3schools.com/tags/movie.mp4";
// const videoLoop ="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
import styles from '../../components/VideoBackground.module.css';
import { NavLink as BaseNavLink } from "react-router-dom";
import button_img_1 from "../../utils/images/button1.png"

const Landing = () => {
  const [vidIndex, setVidIndex] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (vidIndex === 0 && ref.current) {
      ref.current.play();
    }
  }, [ref, vidIndex]);
  // BACKGROUNDS.Landing add later
  return (
    <>
      <div className={styles['video-background']}>
      <video
        style={{ display: vidIndex === 1 ? "none" : "block" }}
        src={vid1}
        autoPlay
        muted
        onEnded={() => setVidIndex((idx) => idx + 1)}
      />
      <video
        style={{ display: vidIndex === 0 ? "none" : "block" }}
        src={vid2}
        muted
        loop
        ref={ref}
      />
      </div>
      <div 
        className={styles['video-overlay']} 
        onClick={(e) => e.preventDefault()} // Prevent click actions
      ></div>
      {/* <NavBar />*/}
      {vidIndex === 1 &&
        <Container>
          <InnerContainer></InnerContainer>
          <InnerContainer2>
            <ButtonContainer>
              <ImageDiv>
                <NavLink to="/AboutUs">
                <ImgStyled src={button_img_1}></ImgStyled>
              </NavLink></ImageDiv>
              
            </ButtonContainer>
            <ButtonContainer2>
              <ImageOuterDiv>
              <ImageDiv>
                <NavLink to="/AboutUs">
                <ImgStyled src={button_img_1}></ImgStyled>
              </NavLink></ImageDiv>
              </ImageOuterDiv>
              <ImageOuterDiv>
              <ImageDiv>
                <NavLink to="/AboutUs">
                <ImgStyled src={button_img_1}></ImgStyled>
              </NavLink></ImageDiv>
              </ImageOuterDiv>
            </ButtonContainer2>
            <ButtonContainer2>
            <ImageOuterDiv>
              <ImageDiv>
                <NavLink to="/AboutUs">
                <ImgStyled src={button_img_1}></ImgStyled>
              </NavLink></ImageDiv>
              </ImageOuterDiv>
              <ImageOuterDiv>
              <ImageDiv>
                <NavLink to="/AboutUs">
                <ImgStyled src={button_img_1}></ImgStyled>
              </NavLink></ImageDiv>
              </ImageOuterDiv>
            </ButtonContainer2>
            <ButtonContainer>
              <ImageDiv>

                  <NavLink to="/AboutUs">
                  <ImgStyled src={button_img_1}></ImgStyled>
                </NavLink></ImageDiv>
            </ButtonContainer>

          </InnerContainer2>
        </Container>
      }
      
    </>
  );
};



const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  animation: fade-in 10s forwards;
  transition: all 0.4s ease-in-out;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 23vh;
  width: 100%;
  background-color:'transparent';
  
`;

const InnerContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color:rgba(255,0,0,0);
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color:rgba(0,255,0,0 );

`
const ButtonContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
`
const ImageOuterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
`
const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:30%;
  min-width: 400px;
  height: 50%;
  background-color:'transparent';
  &:hover{
    height: 55%;
  }
  cursor:pointer;
  transition: all 0.4s ease-in-out;

` 
const ImageDiv2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height: 5px;
  background-color:'transparent';
` 
const NavLink = styled(BaseNavLink)`
  outline: none;
  border: none;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
  background:'transparent';
  padding: 0.2vh;
  color: red;
`;

const ImgStyled = styled.img`
  flex-shrink: 0;
  min-height: 100%
`

export default Landing;
