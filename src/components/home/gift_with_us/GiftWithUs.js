import React, {useEffect} from 'react';
import Gift1 from '../../../images/gif1.jpg';
import Gift3 from '../../../images/gif2.jpg';
import Gift2 from '../../../images/gif3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './GiftWithUs.css';


function GiftWithUs() {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);
    return(
        <div className={'py-5'}>
            <div className="container">
                <h3 className="fs-40 ff-BonVivant cl-red text-center" data-aos="fade-left">Three ways</h3>
                <h4 className="fs-26 fw-bold text-uppercase text-center" data-aos="fade-right">you can gift with us</h4>
                <div className="gift_block mt-4">
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <div className="gift_item" data-aos="fade-up" data-aos-delay="0">
                                <figure>
                                    <img src={Gift1} alt=""/>
                                </figure>
                                <div className="title_gift text-uppercase fw-bold">
                                    special collections
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="gift_item" data-aos="fade-up" data-aos-delay="200">
                                <figure>
                                    <img src={Gift2} alt=""/>
                                </figure>
                                <div className="title_gift text-uppercase fw-bold">
                                    Design your own
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="gift_item" data-aos="fade-up" data-aos-delay="400">
                                <figure>
                                    <img src={Gift3} alt=""/>
                                </figure>
                                <div className="title_gift text-uppercase fw-bold">
                                    corporate gifting
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiftWithUs;