import { useContext, useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import AllToyModal from "./AllToyModal";
import Swal from "sweetalert2";
import { authContextData } from "../../SharedContext/AuthContext";
import { useNavigate } from "react-router-dom";

const AllToy = () => {
    const { user } = useContext(authContextData)
    const [toys, setToys] = useState([])
    let [singleToy, setSingleToy] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    // initially set all toy
    useEffect(() => {
        fetch(`https://edutainment-toys-server.vercel.app/toys`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setLoading(false)
            })
            .catch(e => console.log(e.message))
    }, [])

    // handle search function
    const handleSearchFunc = (e) => {
        e.preventDefault()
        const searchInp = e.target.search.value
        setLoading(true)
        fetch(`https://edutainment-toys-server.vercel.app/toys?search=${searchInp}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
                console.log(e.message)
            })
    }

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

    return (
        <div>

            {/* search input */}
            <form onSubmit={handleSearchFunc} className="form-control pt-3 w-3/6 lg:w-2/6 mx-auto text-black">
                <div className="input-group">
                    <input type="text" name="search" placeholder="Search…" className="input input-bordered w-full focus:outline-none" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </form>

            {loading ? <div className="min-h-[90vh] flex justify-center items-center"><MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor='#c0efff'
                color='#e15b64'
            /> </div> : !toys.length ? <div className='min-h-[70vh] font-bold text-3xl h-full flex justify-center items-center'><h2>No Data found</h2></div> : <div className=" min-h-[80vh] flex justify-center items-center overflow-x-auto px-10 lg:px-20 py-14">
                <table className="table w-full text-black">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Credential</th>
                            <th className="text-center">Seller</th>
                            <th className="text-center">Available Quantity</th>
                            <th className="text-center">Price</th>
                            <th className="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => {
                                const { _id, sellerName, availableQuantity, toyName, photo, price, description, subCategory } = toy
                                return <tr key={_id}>
                                    <td className="bg-slate-200">
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-12 h-12">
                                                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{toyName}</div>
                                                <div className="text-sm opacity-50">{subCategory}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="bg-slate-200 text-center"> {sellerName.toUpperCase()}</td>
                                    <td className="bg-slate-200 text-center"> {availableQuantity}</td>
                                    <td className="bg-slate-200 text-center">${price}</td>
                                    <td className="bg-slate-200 text-right"> <label onClick={() => handleViewDetailsFunc(toy)} htmlFor="my-modal-3" className="cursor-pointer btn border-none bg-green-500 hover:bg-green-700">View Details</label>
                                    </td>

                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>}
            {user && <AllToyModal singleToy={singleToy}></AllToyModal>}
        </div>
    );
};

export default AllToy;