import { ToastContainer, toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const UpdateToyModal = ({ singleToyForUpdate, setSingleToyForUpdate }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, price, description, availableQuantity } = singleToyForUpdate

    // update toy function
    const updateToyFunc = (e) => {
        e.preventDefault()
        const form = e.target
        const price = parseInt(form.price.value)
        const availableQuantity = form.availableQuantity.value
        const description = form.description.value
        const updatedToyInfo = { price, availableQuantity, description }
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedToyInfo)
        }
        fetch(`https://edutainment-toys-server.vercel.app/update-toy/${_id}`, option)
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSingleToyForUpdate({...singleToyForUpdate, ...updatedToyInfo})
                    toast.success('Toy info updated!', {
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
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-3xl p-10 relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                        <form onSubmit={updateToyFunc} className="space-y-4 md:space-y-6" action="#">

                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input defaultValue={price} type='text' name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            <div>
                                <label htmlFor="availableQuantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Available Quantity</label>
                                <input defaultValue={availableQuantity} type='text' name="availableQuantity" id="availableQuantity" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details Description</label>
                                <textarea defaultValue={description} name='description' id="description" className="p-3 w-full h-36 rounded border-2 border-orange-500 focus:border-orange-600 focus:outline-none text-gray-900"></textarea>
                            </div>

                            <button type="submit" className="w-full text-white btn btn-success border border-orange-500 font-bold text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" style={{ background: '#0b1315' }}>Update Toy</button>
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
        </>
    );
};

export default UpdateToyModal;  