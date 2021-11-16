import React from 'react';
import './Header.css';
import Logo from '../../images/logo.png';
import {Link} from "react-router-dom";

function Header() {
    return(
        <header id={"header_site"}>
            <div className={"TopLine py-2"}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-uppercase freeship_tag">
                                free shipping in HCM on all orders over $25
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-end">
                                <div className="tracking me-3">
                                    Tracking your order
                                </div>
                                <div className="user_atc">
                                    <a href="/">Sign In</a> / <a href="/">Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_info py-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md">
                            <ul className={"menu_site"}>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><a href="/">Build your own</a></li>
                                <li><a href="/">Corporation Gifting</a></li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <Link to="/" className={"logo_site"}>
                                <img src={Logo} alt=""/>
                            </Link>
                        </div>
                        <div className="col-md">
                            <div className="d-flex justify-content-end">
                                <div className="search me-3">
                                    <a href="/">
                                        <i className={"fa fa-search me-2"}></i> SEARCH
                                    </a>
                                </div>
                                <div className="cart_info">
                                    <a href="/">
                                        CART
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;