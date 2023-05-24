import { useContext, useEffect, useState } from "react";
import { authContextData } from "../../SharedContext/AuthContext";
import { FaInfo, FaPen, FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2'
import UpdateToyModal from "./UpdateToyModal";
import { Puff } from "react-loader-spinner";
import MyToyDescriptionModal from "./MyToyDescriptionModal";

const MyToys = () => {
    const { user } = useContext(authContextData)
    const [loading, setLoading] = useState(true)
    const [singleToyForUpdate, setSingleToyForUpdate] = useState({})
    const [description, setDescription] = useState('')
    const [sortedOption, setSortedOption] = useState('')
    const [myToys, setMyToys] = useState([])


    useEffect(() => {
        if (user) {
            fetch(`https://edutainment-toys-server.vercel.app/my-toys-sort?email=${user.email}&&sort=${sortedOption}`)
                .then(res => res.json())
                .then(data => {
                    setLoading(false)
                    setMyToys(data)
                })
                .catch(e => console.log(e.message))
        }
    }, [user, sortedOption, singleToyForUpdate])

    // handle delete func
    const handleDeleteFunc = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://edutainment-toys-server.vercel.app/delete-toy/${id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const restToys = myToys.filter(toy => toy._id !== id)
                            setMyToys(restToys)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(e => console.log(e.message))
            }
        })
    }

    // update toy func
    const updateToyFunc = (id) => {
        const specificToy = myToys.find(toy => toy._id === id)
        setSingleToyForUpdate(specificToy)
    }

    // handle filter by price func
    const handleFilterByPriceFunc = (e) => {
        if(e.target.value === sortedOption){
            return
        }
        setLoading(true)
        setSortedOption(e.target.value)
    }

    return (
        <div className="px-10 lg:px-20">

            {(!loading && myToys.length) ? <div className="text-right mt-2">
                <select onChange={handleFilterByPriceFunc} defaultValue={'default'} className="select w-full max-w-[250px] focus:outline-none text-white text-center border border-orange-500 font-bold" style={{ background: '#0b1315' }}>
                    <option disabled value='default'>Sort by Price</option>
                    <option value='lowToHigh'>Low to High</option>
                    <option value='highToLow'>High to Low</option>
                </select>
            </div> : ''}

            {loading ? <div className="min-h-[90vh] flex justify-center items-center"><Puff
                height="80"
                width="80"
                radius={1}
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            /> </div> : !myToys.length ? <div className='min-h-[70vh] font-bold text-3xl flex justify-center items-center'><h2>No Data found</h2></div> : <div className=" min-h-[80vh] overflow-x-auto  py-8">
                <table className="table w-full text-black">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Credential</th>
                            <th className="text-center">Description</th>
                            <th className="text-center">Available Quantity</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy => {
                                const { _id, availableQuantity, toyName, photo, price, description, subCategory } = toy
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
                                    <td className="bg-slate-200 text-center">  <label onClick={() => setDescription(description)} htmlFor="my-modal-myToyDesc" className="btn btn-outline btn-circle btn-success"><FaInfo></FaInfo></label></td>
                                    <td className="bg-slate-200 text-center"> {availableQuantity}</td>
                                    <td className="bg-slate-200 text-center">${price}</td>
                                    <td className="bg-slate-200 text-center"> <div className="flex items-center justify-center gap-3 cursor-pointer"> <label onClick={() => updateToyFunc(_id)} htmlFor="my-modal-3" className="btn btn-outline btn-circle btn-success"><FaPen></FaPen></label> <span  onClick={() => handleDeleteFunc(_id)} className="btn btn-outline btn-circle btn-error"><FaTrash></FaTrash></span></div> </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>}
            <MyToyDescriptionModal description={description}></MyToyDescriptionModal>
            <UpdateToyModal singleToyForUpdate={singleToyForUpdate} setSingleToyForUpdate={setSingleToyForUpdate}></UpdateToyModal>
        </div>
    );
};

export default MyToys;