import './styles.css';

import Logo from '../../assets/img/elogroup-logo.svg';
import WebsiteIcon from '../../assets/img/website-icon.svg';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <div className="container">
                <div className="header-brand">
                    <NavLink to="/">
                        <img src={Logo} alt="EloGroup logo" />
                    </NavLink>
                </div>

                <div className="header-icon">
                    <a href="https://elogroup.com.br/" target="_blank" rel="noreferrer">
                        <img src={WebsiteIcon} alt="Website icon" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;