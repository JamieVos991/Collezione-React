const ProductCard = (props) => {

    const ProductCardClicked = () => {
        props.onCardClicked(props.id);
    }

    return (
        <li onClick={ProductCardClicked} className="productsList__item productsList__item--gray">
            <div className="productContainer__img">
                <img className="productsList_img" src={props.productImg} alt={props.name}></img>
            </div>
            <div className="productContainer__p">
                <p className="productsList__imageContext">{props.context}</p>

            </div>
            
            <div className="productContainer__filters">
                <p className="productsList__imageText">{props.name}</p>
                <p className="productsList__imageText">{props.price}</p>
                <p className="productsList__imageText">Category</p>
            </div>
        </li>
    );
}

export default ProductCard;