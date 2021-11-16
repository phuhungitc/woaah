import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './FeaturedProduct.css';
import LoopProduct from './LoopProduct';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FeaturedProduct() {
    const [ListProduct, setProduct] = useState([]);
    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
        getPostdefault();
    }, []);
    function getPostdefault(){
        axios.get('https://trithuconline.com/wp-json/wp/v2/posts/?_embed').then((response)=>{
            setProduct(response.data.slice(0,5));
        }).catch((error)=>{
            console.log(error);
        });
    }

    const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    return (
        <div className="FeaturedProduct py-5">
            <h3 className="fs-26 fw-bold text-center text-uppercase mb-4" data-aos="fade-up">Featured products</h3>
            <div className="d-flex">
                {ListProduct.length>0 && ListProduct.map((item, index) => {
                    return (
                        <LoopProduct key={index} category={item.categories[0]} slug={item.slug} title={renderHTML(item.title.rendered)} price={item.id} imageUrl={item._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}></LoopProduct>
                    )
                })}
            </div>
        </div>
    )
}

export default FeaturedProduct;