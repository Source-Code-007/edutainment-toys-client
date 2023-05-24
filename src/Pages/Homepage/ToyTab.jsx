/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Puff } from 'react-loader-spinner';
import ToyTabModal from './ToyTabModal';
import { authContextData } from '../../SharedContext/AuthContext';
// import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ToyTab = () => {
    let { user } = useContext(authContextData)
    let [toys, setToys] = useState([])
    let [singleToy, setSingleToy] = useState({})
    let [loading, setLoading] = useState(true)
    let navigate = useNavigate()

    // load all toy and set in setToys state
    useEffect(() => {
        fetch('https://edutainment-toys-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setLoading(false)
            })
            .catch(e => console.log(e.message))
    }, [])

    // handle view details func
    const handleViewDetailsFunc = (toy) => {
        if (!user) {

            Swal.fire({
                title: 'Are you sure?',
                text: "You have to log in first to view details!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, i want to login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signin')
                }
            })

        }


        setSingleToy(toy)
    }

    const tabPanel = ['Science Toy', 'Language Learning Toy', 'Art and Creativity Toy']

    return (
        <div className='py-28'>

            <div className='pb-16 text-center w-4/6 lg:w-2/6 mx-auto space-y-3'>
                <h2 className='my-title !text-5xl'>Shop By Category</h2>
                <p className='text-gray-200'>Discover Unique Toys Tailored to Your Child's Interests</p>
            </div>

            <Tabs className='min-h-[50vh]'>
                <TabList>
                    <Tab><span className='font-bold text-xl'>Science Toy</span></Tab>
                    <Tab><span className='font-bold text-xl'>Language Learning Toy</span></Tab>
                    <Tab><span className='font-bold text-xl'>Art and Creativity Toy</span></Tab>
                </TabList>

                <div className='my-container py-8'>

                    {/* First map for dynamic tab panel, secondly filter toys for match subcategory dynamically, then if toy available in filteredToys then map and display data otherwise display 'no data found' */}
                    {tabPanel.map((tab, ind) => {
                        const filteredToys = toys.filter(toy => toy.subCategory === tab)
                        return <TabPanel key={ind}>

                            {loading ? <div className="min-h-[50vh] flex justify-center items-center"><Puff
                                height="80"
                                width="80"
                                radius={1}
                                color="#4fa94d"
                                ariaLabel="puff-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            /> </div> : filteredToys.length ?
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                    {
                                        filteredToys.map(toy => {
                                            const { _id, toyName, photo, price, rating } = toy
                                            return <div key={_id} className="card card-compact shadow shadow-slate-300" data-aos="fade-up"
                                                data-aos-anchor-placement="top-bottom">
                                                <figure><img className='w-full h-72' src={photo} alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title text-3xl">{toyName}</h2>
                                                    <h2 className="card-title">${price}</h2>
                                                    <h2 className="card-title"><Rating initialRating={rating} readonly emptySymbol={<FaStar className='text-slate-500'></FaStar>}
                                                        fullSymbol={<FaStar className='text-orange-500'></FaStar>} /> </h2>
                                                    <div className="card-actions">
                                                        <label onClick={() => handleViewDetailsFunc(toy)} htmlFor="my-modal-3" className="cursor-pointer btn border-none bg-green-500 hover:bg-green-700">View Details</label>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div> : <div className='min-h-[50vh] font-bold text-3xl h-full flex justify-center items-center'><h2>No Data found</h2></div>
                            }

                        </TabPanel>
                    })}


                    {/* For individual Tab Panel */}

                    {/* <TabPanel>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                toys && toys.filter(toy => toy.subCategory === 'Science Toy').map(toy => {
                                    const { _id, toyName, sellerName, sellerEmail, photo, price, rating, description, subCategory } = toy
                                    return <div key={_id} className="card card-compact bg-base-100 shadow-xl">
                                        <figure><img className='w-full h-72' src={photo} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-3xl">{toyName}</h2>
                                            <h2 className="card-title">Price: {price}</h2>
                                            <h2 className="card-title">Rating: <Rating initialRating={rating} readonly emptySymbol={<FaStar className='text-slate-200'></FaStar>}
                                                fullSymbol={<FaStar className='text-orange-500'></FaStar>} /> </h2>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                toys && toys.filter(toy => toy.subCategory === 'Language Learning Toy').map(toy => {
                                    const { _id, toyName, sellerName, sellerEmail, photo, price, rating, description, subCategory } = toy
                                    return <div key={_id} className="card card-compact bg-base-100 shadow-xl">
                                        <figure><img className='w-full h-72' src={photo} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-3xl">{toyName}</h2>
                                            <h2 className="card-title">Price: {price}</h2>
                                            <h2 className="card-title">Rating: <Rating initialRating={rating} readonly emptySymbol={<FaStar className='text-slate-200'></FaStar>}
                                                fullSymbol={<FaStar className='text-orange-500'></FaStar>} /> </h2>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                toys && toys.filter(toy => toy.subCategory === 'Art and Creativity Toy').map(toy => {
                                    const { _id, toyName, sellerName, sellerEmail, photo, price, rating, description, subCategory } = toy
                                    return <div key={_id} className="card card-compact bg-base-100 shadow-xl">
                                        <figure><img className='w-full h-72' src={photo} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-3xl">{toyName}</h2>
                                            <h2 className="card-title">Price: {price}</h2>
                                            <h2 className="card-title">Rating: <Rating initialRating={rating} readonly emptySymbol={<FaStar className='text-slate-200'></FaStar>}
                                                fullSymbol={<FaStar className='text-orange-500'></FaStar>} /> </h2>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </TabPanel> */}

                </div>
            </Tabs>
            {user && <ToyTabModal singleToy={singleToy}></ToyTabModal>}
        </div>
    );
};

export default ToyTab;