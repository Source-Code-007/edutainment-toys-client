/* eslint-disable react/no-unescaped-entities */
import toyImOne from '../../assets/img/toyImportanceOne.webp'
import toyImTwo from '../../assets/img/toyImportanceTwo.webp'
import toyImThree from '../../assets/img/toyImportanceThree.webp'
import toyImFour from '../../assets/img/toyImportanceFour.webp'
const ToyImportance = () => {
    return (
        <div className='my-container overflow-hidden py-16'>
            <div className="w-4/6 md:w-3/6 mx-auto py-12">
                <h2 className="my-title lg:!text-5xl">It's never been easier to invest in your kid's toys</h2>
            </div>

            <div className='space-y-8 lg:space-y-0'>

                <div className='grid grid-cols-12 gap-2 lg:gap-0'>
                    <div className='relative col-span-12 lg:col-span-6 order-2 lg:order-1' data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className='lg:absolute top-1/2 lg:-translate-y-1/2 -right-32 lg:w-[650px] space-y-3 p-10 rounded-xl bg-slate-50 shadow text-black'>
                            <h2 className='my-title !text-4xl'>Toys are all your baby need better toys for better growth</h2>
                            <p>Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Faucibus interdum posuere lorem ipsum dolor. Eu tincidunt tortor aliquam nulla facilisi cras. Venenatis lectus magna.</p>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 order-1 lg:order-2' data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img className='w-full' src={toyImOne} alt="" />
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-2 lg:gap-0'>
                    <div className='relative col-span-12 lg:col-span-6 order-2' data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className='lg:absolute top-1/2 lg:-translate-y-1/2 -left-32 lg:w-[650px] space-y-3 p-10 rounded-xl bg-slate-50 shadow text-black'>
                            <h2 className='my-title !text-4xl'>Creative modern wooden toys for kids development</h2>
                            <p>Ut faucibus pulvinar elementum integer enim neque volutpat. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Elit scelerisque mauris pellentesque pulvinar pellentesque tristique.</p>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 order-1' data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img className='w-full' src={toyImTwo} alt="" />
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-2 lg:gap-0'>
                    <div className='relative col-span-12 lg:col-span-6 order-2 lg:order-1' data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className='lg:absolute top-1/2 lg:-translate-y-1/2 -right-32 lg:w-[650px] space-y-3 p-10 rounded-xl bg-slate-50 shadow text-black'>
                            <h2 className='my-title !text-4xl'>Creative modern wooden toys for kids development</h2>
                            <p>Ut faucibus pulvinar elementum integer enim neque volutpat. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Elit scelerisque mauris pellentesque pulvinar pellentesque tristique.</p>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 order-1 lg:order-2' data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img className='w-full' src={toyImThree} alt="" />
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-2 lg:gap-0'>
                    <div className='relative col-span-12 lg:col-span-6 order-2' data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className='lg:absolute top-1/2 lg:-translate-y-1/2 -left-32 lg:w-[650px] space-y-3 p-10 rounded-xl bg-slate-50 shadow text-black'>
                            <h2 className='my-title !text-4xl'>Wooden toys that will delight your little one a lot</h2>
                            <p>Nisl vel pretium lectus quam id leo in vitae. Eros in cursus turpis massa. Blandit massa enim nec dui nunc. Turpis in eu mi bibendum neque egestas. Viverra nam libero justo laoreet sit amet cursus sit.</p>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 order-1' data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img className='w-full' src={toyImFour} alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ToyImportance;