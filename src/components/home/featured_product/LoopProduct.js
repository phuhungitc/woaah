import React, {useState, useEffect} from 'react';
import axios from "axios";
import AOS from "aos";

export  default function LoopProduct(props) {
    const [cateName, setCategory] = useState([]);
    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);
    function getCategoryPost() {
        axios.get(`https://trithuconline.com/wp-json/wp/v2/categories/${props.category}`).then((response)=>{
            setCategory(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    }
    getCategoryPost();
    return(
        <div className="item_product">
            <figure data-aos="flip-right">
                <a href="/">
                    <img src={props.imageUrl} className="img-fluid" alt=""/>
                </a>
            </figure>
            <div className="title_prd text-uppercase fw-600">{props.title}</div>
            <div className="cate_name text-uppercase fs-11">{cateName['name']}</div>
            <div className="price fw-600">${props.price}</div>
            <a href="/" className="btn add_to_cart btn-black d-block mt-3">ADD TO CART</a>
        </div>
    )
}