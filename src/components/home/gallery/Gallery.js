import React, {useEffect} from 'react';
import './Gallery.css';
import ImgGlr1 from '../../../images/gallery1.jpg';
import ImgGlr2 from '../../../images/gallery2.jpg';
import ImgGlr3 from '../../../images/gallery3.jpg';
import ImgGlr4 from '../../../images/gallery4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Gallery() {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);
    return(
        <div>
            <div className="row gx-0">
                <div className="col-md-3">
                    <div className="item_gallery" data-aos="fade-up" data-aos-delay="0">
                        <a href="/">
                            <img src={ImgGlr1} className='img-fluid' alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="item_gallery" data-aos="fade-up" data-aos-delay="100">
                        <a href="/">
                            <img src={ImgGlr2} className='img-fluid' alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="item_gallery" data-aos="fade-up" data-aos-delay="200">
                        <a href="/">
                            <img src={ImgGlr3} className='img-fluid' alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="item_gallery" data-aos="fade-up" data-aos-delay="300">
                        <a href="/">
                            <img src={ImgGlr4} className='img-fluid' alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Gallery;