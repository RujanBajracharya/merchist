import { Link } from 'react-router-dom';
import './productCard.scss';
import Rating from '@mui/material/Rating';

export const ProductCard = ({product}) => {
  return (
    <div className="item">
        <div className="image">
            <img src={product.variants[0].img} alt="" />
        </div>
        <div className="info">
            <h3>
                <Link className='link' to={`/singleProduct/${product._id}`} >{product.name}</Link>
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
  )
}
