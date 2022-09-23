import "./About.css";
import about__pic from "./123.jpg"

const About = () => {
    return (
        <section id="1" className="section__about">
            <div className="container">
                <div className="content__section">
                    <div className="about__title">
                        <h1>Sneakers and co</h1>
                    </div>
                    <div className="content__about">
                        <h3>aaaaaaaaaaaa</h3>
                        <p>aaaaaaaaaaaaaaa</p>
                    </div>
                </div>
                <div className="image__section">
                    <img src={about__pic} />
                </div>
            </div>
        </section>
    );
}

export default About;