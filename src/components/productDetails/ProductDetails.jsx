import { useEffect, useState } from "react";
import "./productDetails.scss";
import { Rating } from "@mui/material";
import { useGlobalContext } from "../../context";

export const ProductDetails = ({ id, singleProduct }) => {
  const [activeVariant, setActiveVariant] = useState(0);
  const [currentVariant, setCurrentVariant] = useState(
    singleProduct.variants[activeVariant]
  );
  const [itemCounter, setItemCounter] = useState(1);
  const [bookmarkActive, setBookmarkActive] = useState(false);
  const { cart, setCart } = useGlobalContext();

  const handleAdd = () => {
    console.log(cart);
    setCart([
      ...cart,
      {
        ...singleProduct,
        activeVariant: activeVariant,
        quantity: itemCounter,
      },
    ]);
  };

  return (
    <div className="productDetails" key={id}>
      <div className="image">
        <img src={currentVariant.img} alt="product image" />
      </div>
      <div className="info">
        <div className="label">
          <div className="title">
            <h1 className="title">{singleProduct.name}</h1>
            <button onClick={() => setBookmarkActive(!bookmarkActive)}>
              <img
                src="/assets/heart.svg"
                alt=""
                style={{ background: bookmarkActive ? "red" : "none" }}
              />
            </button>
          </div>
          <h1 className="price">${currentVariant.price}</h1>
          <p>{singleProduct.description}</p>
        </div>
        <div className="rating">
          <Rating
            value={singleProduct.averageRating}
            precision={0.5}
            size="small"
            readOnly
            className="rating-component"
          />
          <span>({singleProduct.averageRating})</span>
        </div>
        <div className="itemCounter">
          <button
            onClick={() =>
              itemCounter > 0
                ? setItemCounter(itemCounter - 1)
                : setItemCounter(itemCounter)
            }
          >
            -
          </button>
          <span>{itemCounter}</span>
          <button onClick={() => setItemCounter(itemCounter + 1)}>+</button>
        </div>
        <div className="actionButtons">
          <button className="order">Order Now</button>
          <button className="add-cart">
            <img src="/assets/cart2.svg" alt="" />
            <span onClick={() => handleAdd()}>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
