import { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context'
import './carousel.scss'

const Loading = () => {
    return (
        <div className='loading'>
            loading...
        </div>
    )
}

const Main = ({carouselData, setCarouselData}) => {
    const [active, setActive] = useState(1)
    const [prev, setPrev] = useState(0);
    const [next, setNext] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
          if (active < carouselData.length - 1) {
            setActive(active + 1);
            setNext(next+1)
            setPrev(prev+1)
          } else {
            setActive(0);
          }
        }, 5000);
    
        return () => {
          clearInterval(interval);
        };
    }, [active, carouselData.length]);

    return (
        <div className="carouselContainer">
            <div className='carousel-img'>
                {
                    carouselData.map((item, index) => {
                        let position = 'nextSlide';
                        if (active === index) {
                            position = 'activeSlide';
                        }
                        if (
                            active === index - 1 ||
                            (index === 0 && active === carouselData.length - 1)
                        ) {
                            position = 'lastSlide';
                        }
                        return (
                            <>
                                <img src={item.img} alt="" className={position}/>
                            </>
                        );
                    })
                }
            </div>
            <div className="dots">
                {
                    carouselData.map((item, index) => {
                        return (
                            <div className={active === index ? 'dot': 'dot dot-inactive'}></div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export const Carousel = () => {
    const { carouselData, setCarouselData, carouselLoading } = useGlobalContext();
    
  return (
    <div className='carousel'>
        {
            carouselLoading ? <Loading />: <Main carouselData={carouselData}/>
        }
    </div>
  )
}
