import "./About.scss";
import about__pic from "./123.jpg"
import "../../Helpers/Darkmode/Darkmode.scss";

const About = (props) => {

    return (
            <section id="1" className="background section__about">
                <div className="container">
                    <div className="content__section">
                        <div className="about__title">
                            <h4>{props.about__h3}</h4> 
                            <h1>{props.about__h1}</h1>
                        </div>
                        <div className="content__about">
                            <p style={{ padding: "3rem 0 4rem 0" }}>{props.about__p}</p> 
                        </div>
                    </div>
                    <div className="image__section">
                       
                    </div>
                </div>
            </section>
    );
}

export default About;