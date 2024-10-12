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
			<div className={styles.navbar}>
				
			</div>
			<div>
				<VideoBackground url={BACKGROUNDS.Events} />
				<div className={styles.events}>
					<div className={styles['shadow-region']}>
						<div className={styles['glow-border-blue']} />
						<div className={styles['event-heading']}>EVENTS</div>
						<div className={styles['glow-border-pink']} />
						<div className={styles['event-content']}>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nesciunt ad sequi atque ipsum aut a, fugiat cum nam nemo, fuga minima officiis non labore nihil quia in asperiores possimus suscipit? Consectetur corporis illo omnis molestiae deleniti quas possimus rerum, voluptatum qui quaerat facere assumenda impedit aliquam fuga ipsa. Fuga inventore dolores ipsum. Debitis nulla labore asperiores dolore ullam veniam placeat rem, molestiae eos magni voluptate fugiat necessitatibus accusamus excepturi cumque? Minima nulla necessitatibus, labore porro, maiores laudantium nisi facere exercitationem accusantium ipsam quam, delectus voluptas repudiandae dolorum molestiae repellendus facilis aspernatur soluta. Maiores error illum amet ea, veritatis praesentium officiis eum doloribus dicta dolor explicabo eligendi sint perspiciatis iure voluptatum nostrum iusto tempora quibusdam ut! Tempora officia at libero nemo architecto eius reiciendis molestiae quos id nisi optio perspiciatis dicta omnis magni nostrum numquam, quae dolorum ex culpa soluta saepe esse? Eligendi nam consequatur exercitationem illum esse ea earum, quas accusantium velit repellat vel quidem labore autem! Sed possimus facere optio laboriosam porro quae rem eveniet. Minima animi voluptatum vero saepe facilis. Nobis assumenda eligendi qui! Pariatur natus culpa saepe dolor ex aliquam eum amet quasi voluptas, cumque numquam, sit praesentium laudantium illo ea ab aperiam nobis eligendi nulla doloribus, unde animi. Debitis impedit dicta exercitationem eveniet accusantium alias similique quos ipsa eligendi a voluptatibus accusamus quisquam eos dolorem suscipit inventore quae totam asperiores architecto maxime, voluptatem rem temporibus, deleniti cumque? Modi cum nemo dolorem ab magni, error tempora dolores nesciunt enim eaque, accusantium veritatis deleniti. Blanditiis illum doloribus ex dignissimos perferendis sapiente quos voluptate at dolores aliquam saepe, ad porro in sit ut omnis eaque perspiciatis! Aspernatur voluptas aut molestiae exercitationem iusto odio. Facilis at aspernatur deserunt autem consequuntur ut quae eveniet obcaecati unde ipsum aliquid nobis doloremque, totam, qui nemo reiciendis. Recusandae ducimus reiciendis architecto expedita aperiam veniam ipsa, mollitia amet, sint in eveniet, ex eos non minima sapiente quas ratione adipisci. Accusantium voluptatem eligendi, laudantium ut doloribus magnam possimus doloremque itaque dolorem commodi provident quisquam, recusandae voluptatibus, illo fuga praesentium voluptate porro accusamus harum a atque earum. Praesentium suscipit similique, aliquid porro explicabo, esse excepturi impedit architecto unde provident repellendus quaerat sequi veniam non ipsum reprehenderit voluptatem deserunt minima obcaecati sit optio eius itaque. Sequi expedita adipisci commodi vero architecto voluptates suscipit harum tenetur, saepe, ut tempore, eum perferendis doloribus accusamus fugit at culpa! Totam, corporis iste ad molestiae iure quas. Eius at neque magni impedit. Harum mollitia atque impedit iure. Error quam accusamus, incidunt a ipsam natus nemo accusantium at voluptatibus nisi! Repellendus alias eveniet natus maiores! Ad autem pariatur ipsa totam! Numquam eum nulla repellendus, minima ipsum amet inventore sunt, quidem eveniet sequi quos dolore libero facilis labore nesciunt officia incidunt tempore atque iure neque earum laboriosam obcaecati. Alias aut quae, quis et laudantium vitae animi laboriosam id nesciunt perspiciatis quasi natus maxime ut eveniet similique totam eius ex incidunt fugiat expedita. Nemo quasi quo, sed consequuntur, sint illo aliquam vitae obcaecati odit, magnam dolore nihil provident suscipit ut consequatur aspernatur fuga deleniti exercitationem?</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Events;


{/* <div className={styles.rectangleParent}>
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
					</div> */}