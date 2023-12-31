import "./cart.scss";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart } = useGlobalContext();
  console.log(cart);
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-container">
        {cart ? (
          <div className="cart-items">
            <div className="header-container">
              <h2>Image</h2>
              <h2>Item</h2>
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Total</h2>
            </div>
            {cart.map((item) => {
              const { name, variants, activeVariant, quantity } = item;

              return (
                <div className="item-container">
                  <img src={variants[activeVariant].img} alt="" />
                  <h1>{name}</h1>
                  <h2>${variants[activeVariant].price}</h2>
                  <h2>{quantity}</h2>
                  <h2>${variants[activeVariant].price * quantity}</h2>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
      <Link to="/checked-out" className="cta">
        <button>Proceed to checkout</button>
      </Link>
    </div>
  );
};
