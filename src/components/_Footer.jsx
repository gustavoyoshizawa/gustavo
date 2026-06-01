import SocialMedias from "./SocialMedias";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="footer">
      <div className="container footer-panel">
        <div className="col-content">
          <div className="col-4 logo-footer">
            <img src="/assets/img/logos/logo-rosa.svg" alt="Logo Gustavo" />
          </div>
          <div className="col-4 medias-footer">
            <SocialMedias />
          </div>
          <div className="col-4 footer-message">
            <p>DATA / GENAI</p>
            <blockquote>{t("footer.quote")}</blockquote>
          </div>
        </div>
      </div>
      <div className="copyright container">
        <div className="col-12">
          <p>© Gustavo Yoshizawa {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
