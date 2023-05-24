const MyToyDescriptionModal = ({description}) => {
    return (
        <div>
        <input type="checkbox" id="my-modal-myToyDesc" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box max-w-3xl p-16 relative text-center text-black">
                <label htmlFor="my-modal-myToyDesc" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h2 className="my-title mb-5">Description</h2>
                <p>{description}</p>
            </div>
        </div>
    </div>
    );
};

export default MyToyDescriptionModal;