
import  {Link}  from "react-router-dom";


function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
        <Link to="/">
          <div className="d-flex align-center">
            <img src="/img/logo.png" width={40} height={40} alt="" />
            <div>
              <h3>REACT SNEAKERS</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>
        <ul className="d-flex ">
          <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img src="/img/cart-icon.svg" width={18} height={18} alt=""/>
            <span>1205 руб.</span>
          </li>
          <li>
          <Link to="/favorites"><img src="/img/favorite-icon.svg" width={18} height={18} alt="" className="cu-p"/></Link>
          <img src="/img/user-icon.svg" width={18} height={18} alt=""/>
          </li>
        </ul>

        </header>
        );
    }

export default Header;