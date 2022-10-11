import "./Prijs.scss";

const prijscard = (props) => {
    return (

        <>
            <div class="product">
                <span class="product__price">$120</span>
                <img class="product__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26438/shoe.png"></img>
                    <h1 class="product__title">Nike Roshe Run Print</h1>
                    <hr />
                    <p>The Nike Roshe One Print Men's Shoe offers breathability, lightweight cushioning and bold style with an injected unit midsole and colorful mesh upper. </p>
                    <a href="#" class="product__btn btn">Buy Now</a>
            </div>
        </>
    );
}

export default prijscard;

