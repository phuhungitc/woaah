import React from 'react';
import './Footer.css';
import Logo from '../../images/logo.png';
import {Link} from "react-router-dom";

function Footer() {
    return(
        <footer id="Footer_site">
            <div className="container">
                <div className="row align-items-end justify-content-between">
                    <div className="col-md-5">
                        <Link to="/" className="logo_site">
                            <img src={Logo} alt=""/>
                        </Link>
                        <div className="mt-3">Seasonal Gift Collection & Custom Corporate Gifting <br/>
                            Introducing the simplest, stress-free gift experiences by Woaah with the unique & <br/>
                            thoughtful seasonal gift collection or customise corporate gift boxes.</div>
                    </div>
                    <div className="col-md-5">
                        <h4 className="fs-16 fw-bold text-uppercase mb-3">Subscribe our newsletters</h4>
                        <div className="d-flex">
                            <input type="text" className="form-control" placeholder="Your email address..."/>
                            <button type="submit" className="btn"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between mt-4">
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-2">
                                ADDRESS
                            </div>
                            <div className="col-10">
                                2033 Stewart Street <br/>
                                Indianapolis, Indiana 46204
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-2">
                                PHONE
                            </div>
                            <div className="col-4">
                                84 97 460 80 60
                            </div>
                            <div className="col-md-6">
                                <ul className="social">
                                    <li>
                                        <a href="/">
                                            <i className="fa fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu_ft py-3 mt-4">
                <div className="container">
                    <ul>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/shop">Design your gift</Link></li>
                        <li><Link to="/shop">Corporate gifting</Link></li>
                        <li><Link to="/shop">About us</Link></li>
                        <li><Link to="/shop">Careers</Link></li>
                        <li><Link to="/shop">Blogs</Link></li>
                        <li><Link to="/shop">FAQ</Link></li>
                        <li><Link to="/shop">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="copyright py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            © BOXFOX 2021
                        </div>
                        <div className="col-md-6">
                            <ul className="Policy">
                                <li><a href="/">Privacy</a></li>
                                <li><a href="/">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;