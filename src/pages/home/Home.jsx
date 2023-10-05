import { useEffect } from 'react';
import './home.scss';
import { useGlobalContext } from '../../context';
import { Carousel } from '../../components/carousel/Carousel';

export const Home = () => {
  const { productData, productLoading } = useGlobalContext();

  return (
    <div className='home'>
      <Carousel />
    </div>
  )
}
