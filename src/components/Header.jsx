import MenuNav from "./MenuNav";
import "../styles/css/style.min.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="">
            <img src="/assets/img/logos/logo-rosa.svg" alt="Logo Gustavo" />
          </a>
          <div>
            <MenuNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
