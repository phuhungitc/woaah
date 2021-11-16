import React from 'react';
import GiftWithUs from '../home/gift_with_us/GiftWithUs';
import FeaturedProduct from '../home/featured_product/FeaturedProduct';
import MetaTags from 'react-meta-tags';
function Shop() {
    return(
        <div>
            <MetaTags>
                <title>Trang Sản phẩm</title>
                <meta name="description" content="Mô tả trang Sản phẩm" />
                <meta property="og:title" content="Trang Sản phẩm" />
                <meta property="og:image" content="path/to/image.jpg" />
            </MetaTags>
            <GiftWithUs></GiftWithUs>
            <FeaturedProduct></FeaturedProduct>
        </div>
    )
}
export default Shop;