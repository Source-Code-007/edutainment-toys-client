import bannerOneBg from '../../assets/img/tomas-petz-O8eo2BC1SOI-unsplash.jpg'
import bannerTwoBg from '../../assets/img/slide-1.webp'
import bannerThreeBg from '../../assets/img/slider3-bg.webp'
import './homepage.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const Banner = () => {
    return (
        <div className="">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper bg-orange-500"
            >
                <SwiperSlide className="bg-cover cursor-grab" style={{ backgroundImage: `url(${bannerOneBg})` }}>
                    <div className='min-h-[calc(100vh-72px)] bg-gradient-to-r from-slate-800 to-transparent md:from-transparent md:to-slate-800 grid grid-cols-12 items-center px-10 xl:px-20'>
                        <div className='col-span-1 md:col-span-6 lg:col-span-8'></div>
                        <div className='space-y-3 col-span-11 md:col-span-6 lg:col-span-4 text-slate-200 font-semibold'>
                            <p>Big fun for kid's!</p>
                            <h2 className='my-title text-orange-500 !text-6xl'>A World <br /> To Explore</h2>
                            <p>Active toys for smart and active kids. Bring fun and  non-stop learning for your little ones.</p>
                            <button className="btn border-none bg-orange-500 hover:bg-orange-700">Read More</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-cover bg-left md:bg-center cursor-grab" style={{ backgroundImage: `url(${bannerTwoBg})` }}>
                    <div className='min-h-[calc(100vh-72px)] bg-gradient-to-r from-slate-800 to-transparent md:from-transparent md:to-slate-800 grid grid-cols-12 items-center px-10 xl:px-20'>
                        <div className='col-span-1 md:col-span-6 lg:col-span-8'></div>
                        <div className='space-y-3 col-span-11 md:col-span-6 lg:col-span-4 text-slate-200 font-semibold'>
                            <p>Fuel your imagination!</p>
                            <h2 className='my-title text-orange-500 !text-6xl'>Extraordinary <br /> Learning Toys</h2>
                            <p>Premium toy for the genuine start. The best place to your buy dream toys. We provide toys for all age kids.</p>
                            <button className="btn border-none bg-orange-500 hover:bg-orange-700">Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-cover bg-center cursor-grab" style={{ backgroundImage: `url(${bannerThreeBg})` }}>
                    <div className='min-h-[calc(100vh-72px)] bg-gradient-to-r  from-slate-800 to-transparent md:from-transparent md:to-slate-800 grid grid-cols-12 items-center px-10 xl:px-20'>
                        <div className='col-span-1 md:col-span-6 lg:col-span-8'></div>
                        <div className='space-y-3 col-span-11 md:col-span-6 lg:col-span-4 text-slate-200 font-semibold'>
                            <p>Your wow store!</p>
                            <h2 className='my-title text-orange-500 !text-6xl'>The Ultimate <br /> Toy Store</h2>
                            <p>Delivering smile with toys. Get your unbeatable fun and learning experience with our creative toys.</p>
                            <button className="btn border-none bg-orange-500 hover:bg-orange-700">Read More</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;