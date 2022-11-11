import "./Features.scss";
import Feature from "./Feature";

const Features = () => {
    return (
        <section className="section__features">
            <div className="container-about">
                <Feature i="fa-solid fa-plane" p="Gratis verzending over de hele wereld, binnen 20 dagen."/>
                <Feature i="fa-solid fa-lock" p="De SSL protocol zorgt voor beveiligde betalingen, zonder enige gevaarlijkheden."/>
                <Feature i="fa-solid fa-people-arrows" p="We hebben 24/7 klanten support via instagram of contact pagina."/>
            </div>
        </section>
    );
}

export default Features;
