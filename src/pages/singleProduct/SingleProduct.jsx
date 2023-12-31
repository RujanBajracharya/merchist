import { useParams } from "react-router-dom";
import "./singleProduct.scss";
import { ProductDetails } from "../../components/productDetails/ProductDetails";
import { useGlobalContext } from "../../context";

export const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useGlobalContext();
  const singleProduct = products.find((item) => {
    return item._id === id;
  });

  return (
    <div className="singleProduct">
      <ProductDetails id={id} singleProduct={singleProduct} />
    </div>
  );
};
