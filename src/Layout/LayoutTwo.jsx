import { Link, Outlet } from "react-router-dom";
import DynamicTitle from "../HelpingCompo/DynamicTitle";
import Footer from "../Shared/Footer";

const LayoutTwo = () => {
    return (
        <DynamicTitle>
            <div className="border-b border-orange-500">
                <Link className="font-bold cursor-pointer text-md text-orange-500 flex justify-center flex-col items-center"><img className="w-10 h-auto -mb-1" src="https://png.pngtree.com/png-clipart/20220123/original/pngtree-magic-cube-toys-educational-toys-png-image_7154161.png" alt="" /> <span>Edutainment Toys</span></Link>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </DynamicTitle>
    );
};

export default LayoutTwo;