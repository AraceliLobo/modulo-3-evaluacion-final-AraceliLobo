import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <small className="footer-info">This Web App was made on Earth</small>
      <div className="foter-icon-container">
        <FontAwesomeIcon className="footer-icon" icon={faGlobeAmericas} />
      </div>
    </div>
  );
};

export default Footer;
