import SocialMedias from "./SocialMedias";

const _Footer = () => {
  return (
    <footer id="footer">
      <div className="container ">
        <div className="col-content">
          <div className="col-4 logo-footer">
            <img src="/assets/img/logos/logo-v2.png" alt="Logo Gustavo" />
          </div>
          <div className="col-4 medias-footer">
            <SocialMedias />
          </div>
          <div className="col-4 vader-footer">
            <img src="/assets/img/icons/darth-vader.png" alt="Logo Vader" />
            <blockquote>“May the JavaScript Force be with you.”</blockquote>
          </div>
        </div>
      </div>
      <div className="copyright container">
        <div className="col-12">
          <p>© Gustavo Yoshizawa 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default _Footer;
