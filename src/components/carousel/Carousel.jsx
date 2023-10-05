import { useGlobalContext } from '../../context'
import './carousel.scss'

const Loading = () => {
    return (
        <div>
            loading...
        </div>
    )
}

const Main = ({carouselData}) => {
    return (
        <div className='carousel'>
            {
                carouselData.map((item) => {
                    return <img src={item.img} alt="" />
                })
            }
        </div>
    )
}

export const Carousel = () => {
    const { carouselData, carouselLoading } = useGlobalContext();
    
  return (
    <div className='container'>
        {
            carouselLoading ? <Loading />: <Main carouselData={carouselData}/>
        }
    </div>
  )
}
