import "./About.scss";
import about__pic from "./123.jpg"

const About = (props) => {
    return (
        <section id="1" className="section__about">
            <div className="container">
                <div className="content__section">
                    <div className="about__title">
                        <h1>{props.about__h1}</h1>
                    </div>
                    <div className="content__about">
                        <h3>{props.about__h3}</h3>
                        <p>{props.about__p}</p>
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