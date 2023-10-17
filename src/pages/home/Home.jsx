import { useEffect } from 'react';
import './home.scss';
import { useGlobalContext } from '../../context';
import { Carousel } from '../../components/carousel/Carousel';
import { ProductSlider } from '../../components/productSlider/ProductSlider';

export const Home = () => {
  const { products, productLoading } = useGlobalContext();

  return (
    <div className='home'>
      <Carousel />
      <ProductSlider title={'Recommended'} products={products}/>
      <ProductSlider title={'Best Seller'} products={products}/>
    </div>
  )
}
