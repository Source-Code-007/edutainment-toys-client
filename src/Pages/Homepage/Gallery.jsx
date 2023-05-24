import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

const Gallery = () => {
    return (
        <div className="py-32">
            <div className="my-container overflow-hidden">
                <h2 className="my-title !text-5xl text-center pb-10" data-aos="fade-down"
                    data-aos-anchor-placement="top-bottom">Gallery</h2>
                <div data-aos="zoom-out">
                    <Swiper
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        // slidesPerView={3}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className="h-[500px] w-full" src="https://i.ibb.co/fC3K1Xg/gallery-One.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="h-[500px] w-full" src="https://i.ibb.co/J2nP4zf/gallery-Two.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="h-[500px] w-full" src="https://i.ibb.co/ypRsmNZ/gallery-Three.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="h-[500px] w-full" src="https://i.ibb.co/rHc4d1W/gallery-Four.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="h-[500px] w-full" src="https://i.ibb.co/9wFVPKN/gallery-Five.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Gallery;