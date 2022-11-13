import "./Features.scss";
import Feature from "./Feature";

const Features = () => {
    return (
        <section className="section__features">
            <div className="container-about">
                <Feature i="fa-solid fa-plane" p="Same day shipping"/>
                <Feature i="fa-solid fa-lock" p="Fast delivery"/>
                <Feature i="fa-solid fa-people-arrows" p="Quick customer service"/>
                <Feature i="fa-solid fa-people-arrows" p="90 days retour"/>
            </div>
        </section>
    );
}

export default Features;
