import { useEffect, useState } from 'react';
import './productSlider.scss';
import { ProductCard } from '../productCard/ProductCard';

// Transfer all data from firebase to a data.js file lol.

export const ProductSlider = ({title, products}) => {

    const [activeSlide, setActiveSlide] = useState(0)

  return (
    <div className='productSlider'>
        <div className="title">
            <h1>
                {title}
            </h1>
        </div>
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${activeSlide*100}%)` }}>
                {
                    products.slice(0, 12).map((product) => {
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
