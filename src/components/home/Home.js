import React from 'react';
import Banner from './banner/Banner';
import GiftWithUs from './gift_with_us/GiftWithUs';
import FeaturedProduct from './featured_product/FeaturedProduct';
import GiftCate from './gift_cate/GiftCate';
import News from './news/News';
import Gallery from './gallery/Gallery';
import MetaTags from 'react-meta-tags';
function Home() {
    return(
        <div>
            <MetaTags>
                <title>Trang chủ</title>
                <meta name="description" content="Mô tả trang chủ" />
                <meta property="og:title" content="Trang chủ" />
                <meta property="og:image" content="path/to/image.jpg" />
            </MetaTags>
            <Banner></Banner>
            <GiftWithUs></GiftWithUs>
            <FeaturedProduct></FeaturedProduct>
            <GiftCate></GiftCate>
            <News></News>
            <Gallery></Gallery>
        </div>
    );
}
export default Home;