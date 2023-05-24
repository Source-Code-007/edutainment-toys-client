import React from 'react';
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const AllToyModal = ({ singleToy }) => {
    const { _id, toyName, sellerName, sellerEmail, photo, price, rating, availableQuantity, description } = singleToy
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-3xl p-16 relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="text-black space-y-3 font-semibold text-lg">
                        <img className="h-72 w-full rounded border-2 border-orange-500" src={photo} alt="" />
                        <div className="flex justify-between">
                            <div>
                                <h2 className="my-title">{toyName}</h2>
                            </div>
                            <div className="text-right">
                                <p className='font-bold text-3xl text-orange-500'> ${price}</p>
                            </div>
                        </div>
                        <div>
                            <p><span className='text-gray-600'>Seller:</span> {sellerName}</p>
                            <p>{sellerEmail}</p>
                        </div>
                        <div className="flex justify-between">
                            <p><Rating initialRating={rating} readonly emptySymbol={<FaStar className='text-slate-200'></FaStar>}
                                fullSymbol={<FaStar className='text-orange-500'></FaStar>} /></p>
                            <p><span className='text-gray-600'>Available Quantity:</span> {availableQuantity}</p>
                        </div>
                        <div>{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToyModal;