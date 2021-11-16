import React, {useEffect} from 'react';
import ImgBanner from '../../../images/banner.jpg';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Banner() {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);
    return(
        <div id={"Banner_site"}>
            <img src={ImgBanner} alt=""/>
            <div className="meta_info">
                <div className="container">
                    <div className="sub_title">
                        Build a box,
                    </div>
                    <div className="title mb-3">
                        Build a Relationship
                    </div>
                    <a href="/" className={'btn btn-black'}>Explore</a>
                </div>
            </div>
        </div>
    );
}
export default Banner;