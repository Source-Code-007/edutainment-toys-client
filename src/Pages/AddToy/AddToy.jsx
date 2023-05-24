import { useContext } from 'react';
import bgImg from '../../assets/img/form-bg.jpg'
import { authContextData } from '../../SharedContext/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToy = () => {
    const { user } = useContext(authContextData)

    const addToyFunc = (e) => {
        e.preventDefault()

        const form = e.target
        const sellerName = user.displayName
        const sellerEmail = user.email
        const toyName = form.toyName.value
        const photo = form.photo.value
        const subCategory = form.subCategory.value
        const price = parseInt(form.price.value)
        const rating = form.rating.value
        const availableQuantity = form.availableQuantity.value
        const description = form.description.value
        const toyInfo = { sellerName, sellerEmail, toyName, photo, subCategory, price, availableQuantity, rating, description }
        // console.log(toyInfo);

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
        }
        fetch('https://edutainment-toys-server.vercel.app/add-toy', option)
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('New toy added!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
            })
            .catch(e => console.log(e.message))
    }
    return (
        <div className="flex items-center justify-center px-6 py-8 mx-auto min-h-[calc(100vh-60px)] lg:py-0 bg-cover bg-center bg-slate-900 bg-blend-overlay" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="w-full bg-transparent text-white shadow-inner shadow-slate-500 rounded-lg dark:border md:mt-0 sm:max-w-4xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 rounded bg-slate-50 shadow-inner text-gray-600">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                        Add a Toy
                    </h1>
                    <form onSubmit={addToyFunc} className="space-y-4 md:space-y-6" action="#">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div>
                                <label htmlFor="sellerName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seller Name</label>
                                <input disabled defaultValue={user?.displayName} type="text" id="sellerName" className="bg-gray-300 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="sellerEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seller Email</label>
                                <input disabled defaultValue={user?.email} type="text" id="sellerEmail" className="bg-gray-300 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div>
                                <label htmlFor="toyName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">toy name</label>
                                <input type="text" name="toyName" id="toyName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Toy name here" required />
                            </div>
                            <div>
                                <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">photo</label>
                                <input type='url' name="photo" id="photo" placeholder="Your Photo URL is here" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div>
                                <label htmlFor="subCategory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sub Category</label>
                                <select name='subCategory' defaultValue='default' className="select border-orange-500 focus:outline-none focus:border-2 w-full">
                                    <option value='default' disabled>Select a sub category</option>
                                    <option value='Science Toy'>Science Toy</option>
                                    <option value='Language Learning Toy'>Language Learning Toy</option>
                                    <option value='Art and Creativity Toy'>Art and Creativity</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type='text' name="price" id="price" placeholder="Price..." className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div>
                                <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your rating</label>
                                <div className="rating">
                                    <input type="radio" value={1} name="rating" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" value={2} name="rating" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" value={3} name="rating" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" value={4} name="rating" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" value={5} name="rating" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="availableQuantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Availabe Quantity</label>
                                <input type='text' name="availableQuantity" id="availableQuantity" placeholder="Available Quantity" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                        </div>
                        <textarea name='description' className="p-3 w-full h-36 rounded border-2 border-orange-500 focus:border-orange-600 focus:outline-none" placeholder="Description"></textarea>

                        <button type="submit" className="w-full text-white btn btn-success border border-orange-500 font-bold text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" style={{ background: '#0b1315' }}>Add Toy</button>
                    </form>

                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </div>
    );
};

export default AddToy;