import React from "react";
import styles from "./TransparentCard.module.css";
import { useNavigate } from "react-router-dom";
import { Chip } from "@mui/material";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import logo from "../../utils/images/logo.png";

const TransparentCard = ({ event }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div
                className={styles.eventCardContainer}
                onClick={() => {navigate(`/events/${event.id}`)}}
            >
                <div className={styles.eventCardGlossContainer}></div>

                <div className={styles.posterContainer}>
                    <img
                        src={event.image}
                        alt={event.name}
                        width={400}
                        height={400}
                        onError={(e) => (e.target.src = logo)}
                    />
                </div>

                <div className={styles.eventData}>
                    <div className={styles.eventDetailContainer}>
                        <div className={styles.eventName}>{event.name}</div>
                        <div className={styles.tags}>
                            {event.tags?.slice(0, 2).map((category, index) => (
                                <Chip
                                    key={index}
                                    label={category}
                                    color={"secondary"}
                                    icon={<LoyaltyIcon />}
                                    clickable
                                    sx={{ mr: 1, fontWeight: 600 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransparentCard;
