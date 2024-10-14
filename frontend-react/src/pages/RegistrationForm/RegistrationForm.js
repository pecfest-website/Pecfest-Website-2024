import { useState, useEffect } from "react";
import axios from 'axios';  // Import Axios for API calls
import styles from "./RegistrationForm.module.css"; // Import the CSS module
import VideoBackground from "../../components/VideoBackground"; // Importing dynamic background
import NavBar from "../../components/NavBar/Navbar"; // Importing NavBar
import { BACKGROUNDS } from "../../utils/backgrounds"; // If you have specific backgrounds

const EventRegistrationForm = ({ eventId }) => {
  // State to hold event details
  const [eventDetails, setEventDetails] = useState(null);
  const [accommodation, setAccommodation] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamSize, setTeamSize] = useState(1);
  const [members, setMembers] = useState([{ username: "" }]);
  const [paymentId, setPaymentId] = useState("");
  const [billAddress, setBillAddress] = useState("");
  const [paymentProof, setPaymentProof] = useState(null);

  // Fetch event data from the API when the component mounts
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        console.log("Fetching event details...");

        // POST request with empty body
        const response = await axios.post('https://api.pecfest.org/event/list', {});
        console.log("API response received:", response);

        const events = response.data.data.events;
        console.log("Events array:", events); // Log the events array to check the structure

        // Convert eventId to a number (in case it's a string)
        const numericEventId = Number(eventId);

        // Check if the event ID exists in the response
        const event = events.find(e => e.id === numericEventId);
        console.log("Event found:", event);

        if (event) {
          setEventDetails(event);
          setAccommodation(event.provideAccommodation);  // Set initial accommodation state
          if (event.participationType === "TEAM") {
            setTeamSize(event.minParticipants);  // Set minimum team size
            setMembers(new Array(event.minParticipants).fill({ username: "" }));
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
    updatedMembers[index].username = value;
    setMembers(updatedMembers);
  };

  const addMember = () => {
    if (teamSize < eventDetails.maxParticipants) {
      setMembers([...members, { username: "" }]);
      setTeamSize(teamSize + 1);
    } else {
      alert(`Maximum team size of ${eventDetails.maxParticipants} members reached.`);
    }
  };

  const deleteMember = (indexToDelete) => {
    if (teamSize > eventDetails.minParticipants) {
      setMembers(members.filter((_, index) => index !== indexToDelete));
      setTeamSize(teamSize - 1);
    } else {
      alert(`Minimum team size of ${eventDetails.minParticipants} members required.`);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log({
      eventId,
      accommodation,
      teamName,
      teamSize,
      members,
      paymentId,
      billAddress,
      paymentProof,
    });
  };

  // Show loading or error state if the event details are not loaded
  if (!eventDetails) {
    return <div>Loading event details...</div>;
  }

  return (
    <>
      {/* Adding the Video Background */}
      <VideoBackground url={BACKGROUNDS.Homepage} />

      {/* Adding the NavBar with fixed positioning */}
      <NavBar />

      {/* Form Container */}
      <div className={styles["form-container"]}>
        <div className={styles["shadow-region"]}>
          <h2 className={styles["form-heading"]}>{eventDetails.name} Registration</h2>

          <form onSubmit={handleFormSubmit} className={styles["form-content"]}>
            <div className={styles["checkbox-container"]}>
              <input
                type="checkbox"
                checked={accommodation}
                onChange={(e) => setAccommodation(e.target.checked)}
                className="form-checkbox"
              />
              <label className={styles["checkbox-label"]}>Accommodation required?</label>
            </div>

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
    </>
  );
};

export default EventRegistrationForm;
