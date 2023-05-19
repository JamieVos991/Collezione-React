import "./ProductCard.scss";

const ProductCard = (props) => {

    const ProductCardClicked = () => {
        props.onCardClicked(props.id);
    }

    return (
        <li className="productcard" onClick={ProductCardClicked}>
            <div className="productcard__container-img">
                <img className="productcard__img" src={props.productImg} alt={props.name}></img>
            </div>
            <div className="productcard__container-p">
                <p className="productcard__context">{props.context}</p>
            </div>
            
            <div className="productcard__container-filters">
                <p className="productcard__name">{props.name}</p>
                <p className="productcard__name">{props.price}</p>
                <p className="productcard__name">{props.category}</p>
            </div>
        </li>
    );
}

export default ProductCard;