import "./Prijs.scss";

const prijscard = (props) => {
    return (

        <>
            <div className="product">
                <span className="product__price">$150</span>
                <img className="product__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26438/shoe.png"></img>
                    <h1 className="product__title">Air Jordan 1 Mid</h1>
                    <hr />
                    <p>Het bovenwerk is gemaakt van canvas en leer voor een unieke versie van de populaire schoenen. En zoals altijd zijn ze gemaakt voor dagelijks gebruik met een klassieke kuipzoolconstructie en altijd fijne Air in de zool.</p>
                    <a href="#" className="product__btn btn">Koop nu</a>
            </div>
        </>
    );
}

export default prijscard;

