import { useEffect, useState } from 'react';
import './productSlider.scss';
import Rating from '@mui/material/Rating';

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
                    products.map((product) => {
                        return (
                            <div className="item">
                                <div className="image">
                                    <img src={product.variants[0].img} alt="" />
                                </div>
                                <div className="info">
                                    <h3>
                                        {product.name}
                                    </h3>
                                    <h1>
                                        ${product.variants[0].price}
                                    </h1>

                                    <div className="rating">
                                        <Rating value={product.averageRating} precision={0.5} size='small' readOnly className='rating-component'/>
                                        <p>({product.averageRating})</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </div>
  )
}
