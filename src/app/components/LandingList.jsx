import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesUp,
  faArrowRight,
  faCode,
  faCross,
  faLayerGroup,
  faPalette,
  faUser,
  faXmark,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faGithubAlt,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function LandingList({ title, listData = [] }) {
  const contactDataIcons = [faGithubAlt, faSquareLinkedin, faEnvelope];
  return (
    <div>
      <h2 className="font-bold">{title}</h2>
      <ul className="flex flex-col gap-2">
        {listData.map((elem, i) => {
          return (
            <li
              key={i}
              className="flex gap-x-2 items-center-safe text-3xl text-foreground font-primary"
            >
              <FontAwesomeIcon
                icon={contactDataIcons[i]}
                className="text-accent text-3xl"
              />
              {elem}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
