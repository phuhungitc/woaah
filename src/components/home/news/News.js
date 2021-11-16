import React,{useEffect} from 'react';
import './News.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Post1 from '../../../images/post_featured.jpg';
import Post2 from '../../../images/post2.jpg';
import Post3 from '../../../images/post3.jpg';
function News() {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);
    return(
        <div className="News_featured py-5">
            <div className="container">
                <h3 className="fs-40 ff-BonVivant cl-red" data-aos="fade-left">Our stories</h3>
                <h4 className="fs-26 fw-bold text-uppercase mb-3" data-aos="fade-right">Latest Blogs</h4>
                <div className="row">
                    <div className="col-md-6">
                        <div className="item_post" data-aos="fade-left">
                            <figure>
                                <img src={Post1} className="img-fluid" alt=""/>
                            </figure>
                            <h4 className="fs-16 fw-bold"><a href="/">5 OCCASIONS TO GIVE A CLIENT GIFT</a></h4>
                            <div className="post_excerpt mb-3">
                                Your friendly Gift Experts at Black Bow Gift Co. have listed 5 appropriate (and impactful!) occasions to consider when creating your personalized client gifting strategy
                            </div>
                            <a href="/" className="btn btn-lined">SEE MORE</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="item_post mb-4" data-aos="fade-up">
                                    <figure>
                                        <img src={Post2} className="img-fluid" alt=""/>
                                    </figure>
                                    <h4 className="fs-16 fw-bold"><a href="/">6 HOUSEWARMING GIFT IDEAS</a></h4>
                                    <div className="post_excerpt mb-3">
                                        Moving can be a stressful time but also a milestone worth celebrating... <a href="/">See more</a>
                                    </div>
                                </div>
                                <div className="item_post mb-4" data-aos="fade-up">
                                    <figure>
                                        <img src={Post3} className="img-fluid" alt=""/>
                                    </figure>
                                    <h4 className="fs-16 fw-bold"><a href="/">HOW TO WRITE A THANK YOU NOTE</a></h4>
                                    <div className="post_excerpt mb-3">
                                        When someone makes you feel special through a thoughtful gift... <a href="/">See more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default News;