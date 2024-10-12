import { useCallback } from 'react';
import {useNavigate} from "react-router-dom";
import styles from './Events.module.css';
import VideoBackground from '../../components/VideoBackground';
import { BACKGROUNDS } from '../../utils/backgrounds';


const Events = () => {
  	const navigate = useNavigate();
  	
  	const onAboutTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onEventsTextClick = useCallback(() => {
    		navigate("/");
  	}, [navigate]);
  	
  	return (
		<>
			<VideoBackground url={BACKGROUNDS.Events} />
    		<div className={styles.events}>
      			<div className={styles.rectangleParent}>
        				<div className={styles.instanceChild} />
        				<div className={styles.aboutParent}>
          					<div className={styles.about} onClick={onAboutTextClick}>About</div>
          					<div className={styles.competitions} onClick={onAboutTextClick}>Competitions</div>
          					<div className={styles.events1} onClick={onEventsTextClick}>Events</div>
          					<div className={styles.sponsors} onClick={onAboutTextClick}>Sponsors</div>
          					<div className={styles.schedules} onClick={onAboutTextClick}>Schedules</div>
          					<div className={styles.team} onClick={onAboutTextClick}>Team</div>
          					<div className={styles.gallery} onClick={onAboutTextClick}>Gallery</div>
          					<div className={styles.brochure}>Brochure</div>
          					<div className={styles.contact} onClick={onAboutTextClick}>Contact</div>
          					<div className={styles.loginIn}>Login In</div>
        				</div>
        				<div className={styles.groupParent}>
          					<div className={styles.groupContainer}>
            						<div className={styles.groupContainer}>
              							<div className={styles.rectangleGroup}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleContainer}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent1}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent2}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent3}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent4}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
            						</div>
            						<div className={styles.groupParent1}>
              							<div className={styles.rectangleGroup}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleContainer}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent1}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent2}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent3}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent4}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
            						</div>
          					</div>
          					<div className={styles.groupParent1}>
            						<div className={styles.groupContainer}>
              							<div className={styles.rectangleGroup}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleContainer}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent1}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent2}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent3}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent4}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
            						</div>
            						<div className={styles.groupParent1}>
              							<div className={styles.rectangleGroup}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleContainer}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent1}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent2}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent3}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent4}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.groupParent5}>
          					<div className={styles.groupContainer}>
            						<div className={styles.groupContainer}>
              							<div className={styles.rectangleGroup}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleContainer}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent1}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent2}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent3}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent4}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
            						</div>
            						<div className={styles.groupParent1}>
              							<div className={styles.rectangleGroup}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleContainer}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent1}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent2}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent3}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent4}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
            						</div>
          					</div>
          					<div className={styles.groupParent1}>
            						<div className={styles.groupContainer}>
              							<div className={styles.rectangleGroup}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleContainer}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent1}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent2}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent3}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent4}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
            						</div>
            						<div className={styles.groupParent1}>
              							<div className={styles.rectangleGroup}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleContainer}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent1}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent2}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent3}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
              							<div className={styles.rectangleParent4}>
                								<div className={styles.groupChild} />
                								<div className={styles.groupItem} />
                								<div className={styles.groupInner} />
                								<div className={styles.rectangleDiv} />
                								<div className={styles.groupChild1} />
                								<div className={styles.groupChild2} />
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.eventBorder1}>
        				<div className={styles.eventBorder1Child} />
        				{/* <img className={styles.groupIcon} alt="" src="Group.svg" />? */}
        				{/* <img className={styles.groupIcon2} alt="" src="Group.svg" /> */}
        				<div className={styles.event}>EVENT</div>
      			</div>
    		</div>
		</>
	);
};

export default Events;