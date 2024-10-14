import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/Navbar";
import VideoBackground from "../../components/VideoBackground";
import { BACKGROUNDS } from "../../utils/backgrounds";
import SponsorCard from "../../components/sponsorCard/SponsorCard";


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
export default function Sponsors({ isJamming, setIsJamming }) {
  const [data, setData] = useState([]);

  const fetchSponsors = async () => {
    try {
      const response = await fetch("https://api.pecfest.org/sponser/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      const result = await response.json();
      if (result?.statusCode === 200) {
        setData(result.data);
        console.log(data);
      } else {
        console.error("Error fetching sponsors list", result);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchSponsors();
  }, []);
  return (
    <>
      <NavBar />
      <VideoBackground
        url={BACKGROUNDS.Sponsors}
        style={{
          objectFit: "cover",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: "-1",
        }}
      />

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
        overflow: "hidden"
      }}>

        <div className="hidden xl:block" style={{
          marginTop: "15vh",
          width: "25vw",
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(10px)",
          border: "2px solid white",
          borderRadius: "15px",
          padding: "20px",
        }}>
          <div
            style={{
              color: "#fbff00",
              fontSize: 50,
              fontFamily: `"Cyber Chunk Font", "Silkscreen", sans-serif`,
              fontWeight: "700",
              wordWrap: "break-word",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Sponsors
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              textAlign: "justify",
              color: "white",
              fontSize: "2vw",
              fontFamily: "Judson",
              fontWeight: "700",
              wordWrap: "break-word",
              marginTop: "20px",
            }}
          >
            Over the past years, PECFEST has had the privilege to have hosted a
            number of sponsors which provided a very entertaining experience to
            our visitors as well as the brand. The crowd engagement, media
            exposure, sampling, and brand-building opportunities offered at
            PECFEST are unparalleled.
          </div>
        </div>


        <div style={{
          marginTop: "15vh",
          height: "80vh",
          background: "transparent",
          overflow: "auto",
        }}>
          {Array.isArray(data?.sponsers) && data.sponsers.length > 0 ? (
            data.sponsers.map((category, index) => (
              <SponsorCard key={index} category={category} />
            ))
          ) : (
            <p>No sponsors available.</p>
          )}
        </div>

      </div>
      <div
        style={{
          position: "fixed",
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
              position: "fixed",
              bottom: "50px",
              left: "50px",
              fontFamily: "Cyber Chunk Font",
              fontSize: "1.2rem",
            }}
          // Wrap in an arrow function
          >
          </h2>
        )}
      </div>
    </>
  );
}
