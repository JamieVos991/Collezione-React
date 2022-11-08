import "./About.scss";
import about__pic from "./123.jpg"
import "../../Helpers/Darkmode/Darkmode.scss";
import { useState } from "react";

const About = (props) => {

    const [theme] = useState('dark');

    return (
        <div className={theme}>
            <section id="1" className="background section__about">
                <div className="container">
                    <div className="content__section">
                        <div className="about__title">
                            <h1>{props.about__h1}</h1>
                        </div>
                        <div className="content__about">
                            <h3>{props.about__h3}</h3>
                            <p style={{ padding: "2rem 0 0 0" }}>{props.about__p}</p>
                        </div>
                    </div>
                    <div className="image__section">
                        <img src={about__pic} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;