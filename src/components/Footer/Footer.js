import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <section id="5" className="footer__section">
        <div className="footer__upper">
        <h1 className="header__h1"><span className="h1__style">WE</span>ARE<span className="h1__style">JORDANS</span></h1>
        <div className="icons">
            <div className="icon"><i className="fa fa-github"></i></div>
            <div className="icon"><i className="fa fa-linkedin"></i></div>
            <div className="icon"><i className="fa fa-youtube"></i></div>
            <div className="icon"><i className="fa fa-instagram"></i></div>
          </div>
        </div>
        <div className="footer__middle">
          <div className="footer__middle--container2">
           <div className="newsletter">

           </div>
          </div>
          <div className="footer__middle--container">
            <div className="language">
              <div className="circle"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
            </div>
          </div>
        </div>
        <div className="footer__lower">
            <p>© All Rights Reserved Jamie Vos</p>
            <div className="gap">
              <p>Privacy policy</p>
              <p>Terms & condition</p>
            </div>
        </div>
      </section>
    </>
  );
}

export default Footer;