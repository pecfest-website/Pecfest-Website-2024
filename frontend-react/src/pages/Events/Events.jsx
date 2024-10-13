import { useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Events.module.css";
import VideoBackground from "../../components/VideoBackground";
import { BACKGROUNDS } from "../../utils/backgrounds";
import Navbar from "../../components/NavBar/Navbar";
import Card from "../../components/Card/Card";

const Events = () => {
  const navigate = useNavigate();
  const [active, setIsActive] = useState("mega shows");
  const onAboutTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onEventsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const data = {
    events: [
      {
        adminId: 5,
        description:
          "\nLorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim ex consequatur nesciunt iste a consectetur deleniti, fugit quisquam dolor nihil ipsa, debitis sapiente rerum minus cumque libero hic excepturi ratione qui laudantium omnis quis asperiores! Mollitia nostrum numquam ipsa dolor voluptate ducimus. Rerum, praesentium! Vel, debitis nihil repellendus ad saepe nemo fuga repudiandae ducimus, quam officiis provident, autem fugiat ipsum. Quo illum a accusamus aliquid laboriosam odit nesciunt cumque repellendus doloremque unde minus, nihil pariatur veniam! Illo, eius! Soluta debitis, mollitia accusamus eveniet adipisci vero ullam dignissimos nostrum inventore incidunt nihil, fuga explicabo recusandae molestiae dolorem maiores in quam perspiciatis ducimus cumque nesciunt laborum. Commodi, modi eveniet dolorum pariatur libero quisquam sunt, eius ipsum, iusto accusantium reiciendis omnis itaque. Excepturi quaerat nobis, quas ipsum dolorem quae unde doloremque eum atque ullam rem libero est tenetur numquam voluptas, sequi exercitationem dignissimos recusandae delectus beatae. Magni eaque pariatur soluta suscipit neque. Ea, nobis? Aut dicta ratione error ex provident assumenda similique. Repellat quia ullam aliquid dolorum minima fuga exercitationem et deserunt sit nulla iste neque, quasi doloremque molestiae facilis dignissimos, vitae ut laborum. Corrupti assumenda nam ipsam voluptatem laudantium ipsa? Sequi ipsum suscipit facere voluptate eligendi itaque ea molestiae porro quae error iste accusantium aut, velit accusamus ratione dignissimos vero et quam temporibus mollitia! Exercitationem delectus saepe at minus. Iure quisquam possimus, ut a, tenetur unde aliquid, vitae eligendi rem architecto recusandae ullam aliquam laborum dolores maiores accusantium amet praesentium natus temporibus minima corrupti. Autem dolorem magni, quas maxime, in odit fugiat amet porro possimus a libero. Blanditiis velit sint esse id, alias soluta eaque voluptatibus omnis doloremque ipsa placeat. Error laudantium placeat nostrum dolor adipisci? Voluptas corporis facere soluta dolorem quasi quo odio suscipit? Itaque explicabo eveniet error officia sapiente labore! Quo sed corporis quia sequi voluptatem officiis repellendus dignissimos adipisci molestiae non? Officiis porro totam in enim, nam sit et amet quas labore, hic illum natus, nihil asperiores possimus rerum facere adipisci reprehenderit eius magni ad? Et animi omnis alias? Necessitatibus eligendi fugiat nemo, voluptatibus blanditiis corporis rem aspernatur officia cumque possimus? Repellat quos recusandae labore, placeat voluptatum iusto quas laudantium accusamus. Dignissimos deleniti quod corrupti cumque necessitatibus iusto eaque earum, consectetur modi veritatis. Commodi culpa nemo cum voluptatem animi asperiores qui ducimus! Enim sunt nesciunt hic id aliquam dicta aut, rem nihil harum accusantium minima quaerat consectetur rerum in nam nostrum fuga repellendus dolor atque, esse porro ipsam? Molestias harum incidunt nemo, optio nulla ab reprehenderit dignissimos, commodi similique a sapiente ea voluptatum, nostrum adipisci veritatis quaerat ipsam deserunt in? Officia quaerat obcaecati minus aspernatur iste est omnis, fugiat porro illum quia incidunt sint nesciunt. Illo consectetur aut quo beatae praesentium, quisquam recusandae iure excepturi adipisci rerum, dolorum similique eius aliquam! Explicabo perferendis obcaecati natus voluptates aperiam amet veritatis temporibus dolorem ullam praesentium est suscipit facere, dolor officiis rerum, deserunt similique incidunt totam. Tempore odio obcaecati inventore adipisci, praesentium enim fugit beatae tenetur cupiditate corrupti nam consequuntur facilis qui ipsa! Corrupti similique doloremque at est quas aspernatur animi?",
        endDate: "2028-06-03",
        endTime: "14:01",
        eventType: "MEGASHOW",
        haveRuleBook: false,
        heads: [],
        id: 21,
        image:
          "https://storage.googleapis.com/pecfest/website2024/event/MEGASHOW/1728761571.3796508.jpg",
        maxParticipants: 1,
        minParticipants: 1,
        name: "temp",
        participants: [],
        participationType: "SINGLE",
        paymentType: "FREE",
        provideAccommodation: false,
        registrationFee: 0.0,
        ruleBookLink: "NONE",
        startDate: "2024-05-02",
        startTime: "14:32",
        tags: ["Dance"],
        venue: "Library",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div>
        <VideoBackground url={BACKGROUNDS.Events} />
        <div className={styles.events}>
          <div className={styles["shadow-region"]}>
            <div className={styles["glow-border-blue"]} />
            <div className={styles["event-heading"]}>EVENTS</div>
            <div className={styles["glow-border-pink"]} />
            <div>
              <NavLink
                className={`${styles["event-sub-heading"]} ${
                  active !== "mega shows" ? styles["isNotActive"] : ""
                }`}
                to="#" onClick={()=>{setIsActive("mega shows")}}
              >
                MEGA SHOWS
              </NavLink>
              <NavLink className={`${styles["event-sub-heading"]} ${
                  active !== "workshops" ? styles["isNotActive"] : ""
                }`}  onClick={()=>{setIsActive("workshops")}}to="#">
                WORKSHOPS
              </NavLink>
            </div>
            <div className={styles["event-content"]}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
