/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import discountBg from '../../assets/img/discount.jpg'

const Discount = () => {
    const [remainingTime, setRemainingTime] = useState('')

    useEffect(() => {
        const expirationTime = new Date();
        expirationTime.setDate(expirationTime.getDate() + 500);

        const timer = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeDifference = expirationTime.getTime() - currentTime;

            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                setRemainingTime(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
            } else {
                setRemainingTime('Expired');
                clearInterval(timer);
            }
        }, 1000);


        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='bg-cover bg-center bg-slate-800 bg-blend-overlay' style={{backgroundImage: `url(${discountBg})`}}>
            <div className='my-container overflow-hidden'>
                <div className='font-semibold flex flex-col gap-10 text-center justify-center items-center min-h-screen'>
                    <div className='w-4/6 lg:w-3/6 mx-auto text-center space-y-3'>
                        <h2 className='my-title !text-5xl'>15% Discount On All Kid's Education Toys</h2>
                        <p className='text-lg'>Offer Expires on</p>
                    </div>
                    <div className='sm:w-[500px] lg:w-[800px] mx-auto bg-orange-500 shadow p-10 lg:p-24 rounded-lg text-5xl' data-aos="zoom-out">
                        {remainingTime}
                    </div>
                    <button className='btn focus:outline-none bg-green-500 hover:bg-green-700'>Shop now</button>
                </div>
            </div>
        </div>
    );
};

export default Discount;