import React, {useEffect} from 'react';
import './FeaturedProduct.css';
import ProductImg1 from '../../../images/product1.jpg';
import ProductImg2 from '../../../images/product2.png';
import ProductImg3 from '../../../images/product3.jpg';
import ProductImg4 from '../../../images/product4.jpg';
import ProductImg5 from '../../../images/product5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FeaturedProduct() {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);
    return (
        <div className="FeaturedProduct py-5">
            <h3 className="fs-26 fw-bold text-center text-uppercase mb-4" data-aos="fade-up">Featured products</h3>
            <div className="d-flex">
                <div className="item_product">
                    <figure data-aos="flip-right">
                        <a href="/">
                            <img src={ProductImg1} className="img-fluid" alt=""/>
                        </a>
                    </figure>
                    <div className="title_prd text-uppercase fw-600">Birthday wish</div>
                    <div className="cate_name text-uppercase fs-11">Celebration</div>
                    <div className="price fw-600">$25</div>
                    <a href="/" className="btn add_to_cart btn-black d-block mt-3">ADD TO CART</a>
                </div>
                <div className="item_product">
                    <figure data-aos="flip-right">
                        <a href="/">
                            <img src={ProductImg2} className="img-fluid" alt=""/>
                        </a>
                    </figure>
                    <div className="title_prd text-uppercase fw-600">Peachy keen</div>
                    <div className="cate_name text-uppercase fs-11">Summer collection</div>
                    <div className="price fw-600">$25</div>
                    <a href="/" className="btn add_to_cart btn-black d-block mt-3">ADD TO CART</a>
                </div>
                <div className="item_product">
                    <figure data-aos="flip-right">
                        <a href="/">
                            <img src={ProductImg3} className="img-fluid" alt=""/>
                        </a>
                    </figure>
                    <div className="title_prd text-uppercase fw-600">Day dreamer</div>
                    <div className="cate_name text-uppercase fs-11">For him</div>
                    <div className="price fw-600">$25</div>
                    <a href="/" className="btn add_to_cart btn-black d-block mt-3">ADD TO CART</a>
                </div>
                <div className="item_product">
                    <figure data-aos="flip-right">
                        <a href="/">
                            <img src={ProductImg4} className="img-fluid" alt=""/>
                        </a>
                    </figure>
                    <div className="title_prd text-uppercase fw-600">Summer loving</div>
                    <div className="cate_name text-uppercase fs-11">For her</div>
                    <div className="price fw-600">$25</div>
                    <a href="/" className="btn add_to_cart btn-black d-block mt-3">ADD TO CART</a>
                </div>
                <div className="item_product">
                    <figure data-aos="flip-right">
                        <a href="/">
                            <img src={ProductImg5} className="img-fluid" alt=""/>
                        </a>
                    </figure>
                    <div className="title_prd text-uppercase fw-600">Stay golden</div>
                    <div className="cate_name text-uppercase fs-11">Celebration</div>
                    <div className="price fw-600">$25</div>
                    <a href="/" className="btn add_to_cart btn-black d-block mt-3">ADD TO CART</a>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct;