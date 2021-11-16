import React from 'react';
import Banner from './banner/Banner';
import GiftWithUs from './gift_with_us/GiftWithUs';
import FeaturedProduct from './featured_product/FeaturedProduct';
import GiftCate from './gift_cate/GiftCate';
import News from './news/News';
import Gallery from './gallery/Gallery';
function Home() {
    return(
        <div>
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