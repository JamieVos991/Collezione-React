import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <section className="footer__section">
        <div className="footer__upper">

        </div>
        <div className="footer__lower">
          <p>© All Rights Reserved Jamie Vos</p>
          <div className="icons">
            <div className="icon"><i className="fa fa-github"></i></div>
            <div className="icon"><i className="fa fa-linkedin"></i></div>
            <div className="icon"><i className="fa fa-youtube"></i></div>
            <div className="icon"><i className="fa fa-instagram"></i></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;