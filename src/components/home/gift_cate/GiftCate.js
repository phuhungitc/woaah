import React, {useEffect} from 'react';
import PrdCate1 from '../../../images/gift-cate1.jpg';
import PrdCate2 from '../../../images/gift-cate2.jpg';
import PrdCate3 from '../../../images/gift-cate3.jpg';
import PrdCate4 from '../../../images/gift-cate4.jpg';
import './GiftCate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function GiftCate() {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);
    return(
        <div className="Cate_featured">
            <div className="row gx-0">
                <div className="col-md-6">
                    <div className="product_cate" data-aos="fade-up">
                        <img src={PrdCate1} className="img-fluid" alt=""/>
                        <div className="info_cate">
                            <div className="fs-40 ff-BonVivant">
                                Mid Autumn Festival
                            </div>
                            <div className="fs-26 fw-bold text-uppercase">
                                occasions
                            </div>
                            <a href="/" className="btn btn-line mt-4">EXPLORE</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product_cate" data-aos="fade-up">
                        <img src={PrdCate2} className="img-fluid" alt=""/>
                        <div className="info_cate">
                            <div className="fs-40 ff-BonVivant">
                                Custom
                            </div>
                            <div className="fs-26 fw-bold text-uppercase">
                                Corporate gifting
                            </div>
                            <a href="/" className="btn btn-line mt-4">EXPLORE</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product_cate" data-aos="fade-up">
                        <img src={PrdCate3} className="img-fluid" alt=""/>
                        <div className="info_cate">
                            <div className="fs-40 ff-BonVivant">
                                Prepared
                            </div>
                            <div className="fs-26 fw-bold text-uppercase">
                                For Celebration
                            </div>
                            <a href="/" className="btn btn-line mt-4">EXPLORE</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product_cate" data-aos="fade-up">
                        <img src={PrdCate4} className="img-fluid" alt=""/>
                        <div className="info_cate">
                            <div className="fs-40 ff-BonVivant">
                                Special
                            </div>
                            <div className="fs-26 fw-bold text-uppercase">
                                For Special ones
                            </div>
                            <a href="/" className="btn btn-line mt-4">EXPLORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GiftCate;