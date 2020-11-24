import portal from "../images/portal.gif";
import rickmorty from "../images/rickmorty.png";
import title from "../images/title.png";
// import "../stylesheets/layouts/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={title} alt="Rick and Morty title" className="header-title" />
      <img src={portal} alt="Portal" className="header-portal" />
      <img src={rickmorty} alt="Rick and Morty" className="rick-morty" />
    </header>
  );
};

export default Header;
