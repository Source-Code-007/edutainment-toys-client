// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const SatifiedPeople = () => {

    const clients = [
        {
            name: "Emily",
            comment: "My kids absolutely love the educational toys from your website! They are learning while having fun.",
            photoURL: "data:image/jpeg;base64,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"
        },
        {
            name: "John",
            comment: "I'm impressed with the quality and educational value of the toys I purchased. Highly recommended!",
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZecrUDghuIi1Dz8qkzjjAeiZY2uXmLfASA&usqp=CAU"
        },
        {
            name: "Sarah",
            comment: "The educational toys I bought for my classroom have been a hit with the students. Thank you!",
            photoURL: "data:image/jpeg;base64,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"
        },
        {
            name: "Michael",
            comment: "As a parent, I appreciate the focus on educational toys. My child is learning and having a great time!",
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSS6x4VCXCqlqSd-1E_fdjl_SseV70wqqEA&usqp=CAU"
        },
        {
            name: "Lisa",
            comment: "The educational toys from your website have made learning fun for my children. Thank you for the great selection!",
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1HMRHMOLHS_OhVihk9dF1O3uMS6Jj-qfCA&usqp=CAU"
        }
    ]

    return (
        <section className="py-24">
            <div className="my-container lg:grid grid-cols-12 gap-5 satisfied-people overflow-hidden">
                <div className="col-span-4 flex justify-center items-center text-center p-5" data-aos="fade-down"
                    data-aos-anchor-placement="top-bottom">
                    <h2 className="my-title text-5xl">Satisfied People from Edutainment Toys</h2>
                </div>
                <div className="col-span-8" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            clients.map(client => {
                                return <SwiperSlide key={client.name}>
                                    <div className="shadow shadow-slate-500 mb-12 mt-5 rounded p-1 sm:p-5 text-center">
                                        <img className="h-20 w-20 mx-auto rounded-full" src={client.photoURL} alt="" />
                                        <div className="p-1 sm:p-5 min-h-[200px] md:min-h-[120px]">
                                            <h2 className="my-title">{client.name}</h2>
                                            <p>"{client.comment}"</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default SatifiedPeople;