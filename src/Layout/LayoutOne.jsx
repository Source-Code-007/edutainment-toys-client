import Nav from '../Shared/Nav';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';
import DynamicTitle from '../HelpingCompo/DynamicTitle';

const LayoutOne = () => {
    return (
        <DynamicTitle>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </DynamicTitle>
    );
};

export default LayoutOne;