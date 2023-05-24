/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ToyTabModal = ({ singleToy }) => {
    const { toyName, sellerName, sellerEmail, photo, price, rating, availableQuantity, description } = singleToy
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-3xl p-16 relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="text-black space-y-3 font-semibold text-lg">
                        <img className="h-72 border-2 border-orange-500 w-full rounded" src={photo} alt="" />
                        <div className="flex justify-between">
                            <div className="space-y-2">
                                <h2 className="my-title">{toyName}</h2>
                                <p className="font-bold text-orange-500 text-2xl"> ${price}</p>
                            </div>
                            <div className="text-right space-y-2">
                                <p>Seller: {sellerName}</p>
                                <p>{sellerEmail}</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p><Rating initialRating={rating} readonly emptySymbol={<FaStar className='text-slate-200'></FaStar>}
                                fullSymbol={<FaStar className='text-orange-500'></FaStar>} /></p>
                            <p>Available Quantity: {availableQuantity}</p>
                        </div>
                        <div>{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyTabModal;