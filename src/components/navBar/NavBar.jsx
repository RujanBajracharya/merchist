import { Link } from 'react-router-dom';
import './navbar.scss';
import { useGlobalContext } from '../../context';

export const NavBar = () => {
  const { navRoutes } = useGlobalContext();

  return (
    <div className='navBar'>
      <div className="navContainer">

        <div className="logo">
          <img src="/assets/logo.svg" alt="" />
          <span>MERCHIST</span>
        </div>

        <div className="navBtn">
          {
            navRoutes.map((item) => {
              return (
                <Link className='link' to={item.path} >{item.page}</Link>
              )
            })
          }
        </div>

        <div className="user">
          <div className="cart">
            <img src="/assets/cart.svg" alt="" />
            <span>1</span>
          </div>
          <div className="profile">
            <img src="/assets/profile.svg" alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}