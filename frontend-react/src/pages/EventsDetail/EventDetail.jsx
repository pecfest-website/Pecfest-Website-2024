import React, { useEffect, useState } from "react";
import styles from "./detail.module.css";
import {
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Grid,
    Stack,
    TextField,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NavBar from "../../components/NavBar/Navbar";
import VideoBackground from "../../components/VideoBackground";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { BACKGROUNDS } from "../../utils/backgrounds";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EventDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState({});

    const fetchData = async (eventId) => {
        const url = 'https://api.pecfest.org/event/detail';
    
        const token = localStorage.getItem('token');
    
        const headers = {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` })
        };
    
        try {
            const response = await axios.post(url, { eventId }, { headers });
            const res = response?.data;

            if (res.statusCode === 200){
                toast.success("Success");
                setEvent(res?.data);
            }else{
                toast.error(res?.message, {
                    position: 'top-center', // You can change the position
                    autoClose: 5000, // Toast disappears after 5 seconds
                    hideProgressBar: false, // Show or hide the progress bar
                    closeOnClick: true, // Close the toast when clicked
                    pauseOnHover: true, // Pause toast dismissal when hovered
                    draggable: true, // Allow dragging the toast to dismiss it
                    progress: undefined, // Progress bar visibility
                  }); 
            }
        } catch (error) {
            console.error('Error posting event:', error);
            toast.error("Error Occured! Try again later", {
                position: 'top-center', // You can change the position
                autoClose: 5000, // Toast disappears after 5 seconds
                hideProgressBar: false, // Show or hide the progress bar
                closeOnClick: true, // Close the toast when clicked
                pauseOnHover: true, // Pause toast dismissal when hovered
                draggable: true, // Allow dragging the toast to dismiss it
                progress: undefined, // Progress bar visibility
              }); 
        }
    };
    
    useEffect(() => {
        fetchData(id);
    }, [id]);

    const formatDate = () => {
        if (!event?.startDate || !event?.endDate){
            return "";
        }
        const s = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
        }).format(new Date(Date.parse(event?.startDate)));

        const e = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
        }).format(new Date(Date.parse(event?.endDate)));
        return `${s} - ${e}`;
    };

    const formatTime = () => {
        if (!event?.startTime || !event?.endTime) return;
        const [startHour, startMinute] = event?.startTime?.split(":");
        const [endHour, endMinute] = event?.endTime?.split(":");
    
        const startDate = new Date();
        const endDate = new Date();
    
        startDate.setHours(parseInt(startHour), parseInt(startMinute));
        endDate.setHours(parseInt(endHour), parseInt(endMinute));
    
        const s = new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "2-digit",
        }).format(startDate);
    
        const e = new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "2-digit",
        }).format(endDate);
    
        return `${s} - ${e}`;
    };

    const info = [
        {
            Icon: CalendarMonthIcon,
            text: formatDate(),
        },
        {
            Icon: ScheduleIcon,
            text: formatTime(),
        },
        {
            Icon: MyLocationIcon,
            text: event?.venue,
        },
        {
            Icon: PhoneForwardedIcon,
            text: `${event?.heads?.[0]?.name} - ${event?.heads?.[0]?.phoneNumber}`,
        },
        {
            Icon: GroupsIcon,
            text: `${event?.minParticipants} - ${event?.maxParticipants} members`,
        },
        {
            Icon: MenuBookIcon,
            link: event?.haveRuleBook ? event?.ruleBookLink: "",
            text: "Rulebook",
        },
        {
            Icon: CurrencyRupeeIcon,
            text: event?.paymentType !== "FREE" ? event?.registrationFee + " per Team": "FREE",
        },
    ];

    const [loading, setLoading] = useState(false);
    const alreadyRegistered = event?.participated ?? false;
    const handleRegister = () => {
        const token = localStorage.getItem("token");

        if (!token){
            navigate("/login");
        }
    }

    return (
        <>
            <NavBar />
            <VideoBackground url={BACKGROUNDS.Events} />
            <section className={styles.background}>
                <main className={`${styles.main}`}>
                    <div className={`${styles.details} glassmorphism-light`}>
                        <h1>{event.name}</h1>
                        <div className={styles.tag_badges}>
                            {event.tags?.map((tag, i) => {
                                return (
                                    <Chip
                                        key={i}
                                        label={tag}
                                        size="small"
                                        color="error"
                                    />
                                );
                            })}
                        </div>
                        <div className={styles.details__info}>
                            {info?.map(({ text, Icon, link }, i) => {
                                if (
                                    (i == 4 && event.type === "Individual") ||
                                    (i == 5 && !event.haveRuleBook)
                                ) {
                                    return null;
                                }
                                if (link) {
                                    return (
                                        <div
                                            key={i}
                                            className={
                                                styles.details__info__line
                                            }
                                        >
                                            <Icon />
                                            <a
                                                href={link}
                                                target="_blank"
                                                referrerPolicy="no-referrer"
                                                style={{
                                                    color: "#301934",
                                                    fontWeight: 900,
                                                    textDecoration: "underline",
                                                }}
                                            >
                                                {text}
                                            </a>
                                        </div>
                                    );
                                }
                                return (
                                    <div
                                        key={i}
                                        className={styles.details__info__line}
                                    >
                                        <Icon />
                                        <span>{text}</span>
                                    </div>
                                );
                            })}
                        </div>
                        {!alreadyRegistered ? (
                            <Button
                                variant="contained"
                                onClick={() => {
                                    handleRegister();
                                }}
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Register"}
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: "green",
                                    ":hover": {
                                        bgcolor: "green",
                                    },
                                }}
                            >
                                {alreadyRegistered ? "Registered" : "Register"}
                            </Button>
                        )}
                        <hr className={styles.line} />
                        <div className={styles.description}>
                            {event.description}
                        </div>
                    </div>
                    <div className={styles.poster}>
                        <img
                            src={event.image}
                            height={400}
                            width={400}
                            alt={event.name}
                        />
                    </div>
                </main>
            </section>
        </>
    )
}

export default EventDetail;