import "./About.scss";
import about__pic from "./123.jpg"

const About = (props) => {

    return (
            <section id="2" className="section__about">
                <div className="container__1">
                    <p className="about__p--1">
                        Original releases
                        <p className="about__p--2">
                            1985
                        </p>
                    </p>
                    <p className="about__p--1">
                        Designer
                        <p className="about__p--2">
                            Peter Moore
                        </p>
                    </p>
                    <p className="about__p--1">
                        Color
                        <p className="about__p--2">
                            Black / Red
                        </p>
                    </p>
                    <p className="about__p--1">
                        Original price 
                        <p className="about__p--2">
                            $65
                        </p>
                    </p>
                    <p className="about__p--1">
                        style code 
                        <p className="about__p--2">
                            4281
                        </p>
                    </p>
                </div>
                 <div className="container">
                    <h1 className="about__h1">The one that <br></br>started it all</h1> 
                </div>
                {/* <div className="container-text">
                    <p>It could be said that Michael Jordan was the genesis <br></br>of basketball as we know it today. Throughout a fiery <br></br>and storied career, the tireless MJ overcame his <br></br>hurdles, soaring above challenge after challenge to <br></br>realize the unexpected. Along the way, he redefined<br></br> basketball's relationship to style, the sport’s <br></br>connection to youth counter-culture and the game’s<br></br> creative potential.</p>
                    <p>Like Jordan himself, his eponymous footwear arrived<br></br> with a bang, sharing its namesake’s tradition- <br></br>breaking bravado. A black and red colorway violated <br></br>the league’s uniform policy, earning a stern letter<br></br> from league officials and generating a $5,000 fine<br></br> each time the player wore the shoes on court. It is<br></br> with this brazen charisma that the Air Jordan lineage <br></br>was born.</p>
                </div> */}
            </section>
    );
}

export default About;