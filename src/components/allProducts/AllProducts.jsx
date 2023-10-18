import { ProductCard } from '../productCard/ProductCard';
import './allProducts.scss';

export const AllProducts = ({products}) => {

  return (
    <div className='allProducts'>
        <div className="title">
            <h1>
                All Products
            </h1>
        </div>
        <div className="catalog">
            <div className="container">
                {
                    products.slice(0, 16).map((product) => {
                        return (
                            <ProductCard product={product}/>
                        );
                    })
                }
            </div>
        </div>
    </div>
  )
}
