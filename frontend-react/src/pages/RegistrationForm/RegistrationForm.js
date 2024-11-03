import { useState, useEffect } from "react";
import axios from 'axios';  // Import Axios for API calls
import styles from "./RegistrationForm.module.css"; // Import the CSS module
import VideoBackground from "../../components/VideoBackground"; // Importing dynamic background
import NavBar from "../../components/NavBar/Navbar"; // Importing NavBar
import { BACKGROUNDS } from "../../utils/backgrounds"; // If you have specific backgrounds
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
const EventRegistrationForm = ({isJamming,setIsJamming}) => {
  // State to hold event details
  const navigate = useNavigate();
  const params = useParams();
  let eventId= params.id;
  const [eventDetails, setEventDetails] = useState({});
  const [accommodation, setAccommodation] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamSize, setTeamSize] = useState(1);
  const [members, setMembers] = useState([{ username: "" }]);
  const [paymentId, setPaymentId] = useState("");
  const [billAddress, setBillAddress] = useState("");
  const [paymentProof, setPaymentProof] = useState(null);

  let token = localStorage.getItem("token");
  if(!token){
    navigate("/login");
  }
  // Fetch event data from the API when the component mounts
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {

        // POST request with empty body
        const response = await axios.post('https://api.pecfest.org/event/detail', {"eventId": eventId});
        console.log("API response received:", response);

        const event = response.data.data;
        console.log("Event found:", event);

        if (event) {
          setEventDetails(event);
          if (event.participationType === "TEAM") {
            setTeamSize(event.minParticipants);  
            setMembers(new Array(event.minParticipants-1).fill({ username: "" }));
          }
        } else {
          console.error(`Event not found for ID: ${eventId}. Check if the eventId exists in the API response.`);
        }
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  const handleMemberChange = (index, value) => {
    const updatedMembers = [...members];
    const username = {...updatedMembers[index]};
    username["username"] = value;
    updatedMembers[index] = username;
    setMembers(updatedMembers);
  };

  const addMember = () => {
    if (teamSize < eventDetails.maxParticipants) {
      setMembers([...members, { username: "" }]);
      setTeamSize(teamSize + 1);
    } else {
      toast.info(`Maximum team size of ${eventDetails.maxParticipants} members reached.`);
    }
  };

  const deleteMember = (indexToDelete) => {
    if (teamSize > eventDetails.minParticipants) {
      setMembers(members.filter((_, index) => index !== indexToDelete));
      setTeamSize(teamSize - 1);
    } else {
      toast.info(`Minimum team size of ${eventDetails.minParticipants} members required.`);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Submit logic here
    console.log({
      eventId,
      accommodation: accommodation==true?1:0,
      teamName,
      teamSize,
      members,
      paymentId,
      billAddress,
      paymentProof,
    });

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    const usernames = members.map(member => member.username);
    const payment = await toBase64(paymentProof);
    try {
      
      const response = await axios.post("https://api.pecfest.org/event/register",{
        eventId,  
        accomodation: accommodation==true?1:0,
        teamName,
        teamSize,
        members: usernames,
        paymentId,
        billAddress,
        paymentProof: payment
    },{
        headers:{
          "Token":`Bearer ${token}`
        }
      })
      const data = response?.data;
  
      if (data?.statusCode === 200){
        toast.success(data?.message ?? "Successfully registered");
        navigate(-1);
      }else if (data?.statusCode === 501){
        toast.error(data?.message, {
          position: "top-right", // You can change the position
          autoClose: 5000, // Toast disappears after 5 seconds
          hideProgressBar: false, // Show or hide the progress bar
          closeOnClick: true, // Close the toast when clicked
          pauseOnHover: true, // Pause toast dismissal when hovered
          draggable: true, // Allow dragging the toast to dismiss it
          progress: undefined, // Progress bar visibility
        });
        navigate('/login');
      }else{
        toast.error(data?.message, {
          position: "top-right", // You can change the position
          autoClose: 5000, // Toast disappears after 5 seconds
          hideProgressBar: false, // Show or hide the progress bar
          closeOnClick: true, // Close the toast when clicked
          pauseOnHover: true, // Pause toast dismissal when hovered
          draggable: true, // Allow dragging the toast to dismiss it
          progress: undefined, // Progress bar visibility
        });
      }
    } catch (error) {
      console.log(error);
      if (error?.message === "Network Error"){
        toast.error("Please reduce image size", {
          position: "top-right", // You can change the position
          autoClose: 5000, // Toast disappears after 5 seconds
          hideProgressBar: false, // Show or hide the progress bar
          closeOnClick: true, // Close the toast when clicked
          pauseOnHover: true, // Pause toast dismissal when hovered
          draggable: true, // Allow dragging the toast to dismiss it
          progress: undefined, // Progress bar visibility
        });
      } else {
        toast.error(error?.message, {
          position: "top-right", // You can change the position
          autoClose: 5000, // Toast disappears after 5 seconds
          hideProgressBar: false, // Show or hide the progress bar
          closeOnClick: true, // Close the toast when clicked
          pauseOnHover: true, // Pause toast dismissal when hovered
          draggable: true, // Allow dragging the toast to dismiss it
          progress: undefined, // Progress bar visibility
        });
      }
    }
  };

  return (
    <>
      {/* Adding the Video Background */}
      <VideoBackground url={BACKGROUNDS.Homepage} />

      {/* Adding the NavBar with fixed positioning */}
      <NavBar />
      <ToastContainer/>
      {/* Form Container */}
      <div className={styles["form-container"]}>
        <div className={styles["shadow-region"]}>
          <h2 className={styles["form-heading"]}>{eventDetails?.name} Registration</h2>

          <form onSubmit={handleFormSubmit} className={styles["form-content"]}>
            {!!eventDetails.provideAccommodation && (
              <div className={styles["checkbox-container"]}>
                <input
                  type="checkbox"
                  checked={accommodation}
                  onChange={(e) => setAccommodation(e.target.checked)}
                  className="form-checkbox"
                />
                <label className={styles["checkbox-label"]}>
                  Accommodation required?
                </label>
              </div>
            )}

            {/* If the event is a team event, render team-related fields */}
            {eventDetails.participationType === "TEAM" && (
              <>
                <div>
                  <label>Team Name</label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className={styles["input-field"]}
                    required
                  />
                </div> 

                <div>
                  <label>Team Size</label>
                  <input
                    type="number"
                    min={eventDetails.minParticipants}
                    max={eventDetails.maxParticipants}
                    value={teamSize}
                    className={styles["input-field"]}
                    readOnly
                  />
                </div>

                {members.map((member, index) => (
                  <div key={index} className={styles["member-row"]}>
                    <input
                      type="text"
                      value={member.username}
                      onChange={(e) => handleMemberChange(index, e.target.value)}
                      className={styles["input-field"]}
                      placeholder={`Member ${index + 1} Username`}
                      required
                    />
                    <button
                      type="button"
                      className={styles["delete-button"]}
                      onClick={() => deleteMember(index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addMember}
                  className={styles["submit-button"]}
                >
                  Add Member
                </button>
              </>
            )}

            {/* If the event is paid, render payment-related fields */}
            {eventDetails.paymentType === "PAID" && (
              <>
                <div>
                  <label>Payment ID</label>
                  <input
                    type="text"
                    value={paymentId}
                    onChange={(e) => setPaymentId(e.target.value)}
                    className={styles["input-field"]}
                    required
                  />
                </div>

                <div>
                  <label>Billing Address</label>
                  <input
                    type="text"
                    value={billAddress}
                    onChange={(e) => setBillAddress(e.target.value)}
                    className={styles["input-field"]}
                    required
                  />
                </div>

                <div>
                  <label>Payment Proof</label>
                  <input
                    type="file"
                    onChange={(e) => setPaymentProof(e.target.files[0])}
                    className={styles["input-field"]}
                    required
                  />
                </div>
              </>
            )}

            <button type="submit" className={styles["submit-button"]}>
              Register
            </button>
          </form>
        </div>
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
          </h2>
        )}
      </div>
    </>
  );
};

export default EventRegistrationForm;
