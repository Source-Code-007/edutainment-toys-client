import HowItWorksImg from '../../assets/img/howItWorksOne.jpg'

const HowItWorks = () => {
    return (
        <div className='py-28'>
            <div className='my-container lg:grid grid-cols-2 gap-5 overflow-hidden'>
                <img className='h-[500px] w-full rounded' src={HowItWorksImg} data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" />
                <div className='text-white font-semibold p-5 px-10 xl:px-20' data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h2 className='py-8 font-bold text-5xl'>How It Works</h2>
                    <div className='space-y-6'>
                        <div className='space-y-3'>
                            <h2 className='my-title'>01. Find a Toy</h2>
                            <p className='text-slate-200'>Search from 1000 of toys. It is very easy to search by one click.</p>
                        </div>
                        <div className='space-y-3'>
                            <h2 className='my-title'>02. Choose & Order</h2>
                            <p className='text-slate-200'>Kid-led discovery that build confidence & sparks magination.</p>
                        </div>
                        <div className='space-y-3'>
                            <h2 className='my-title'>03. Make Payment & Get it</h2>
                            <p className='text-slate-200'>Return any unloved toy and swap it for something else.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;