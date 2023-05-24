import { NavLink } from 'react-router-dom';

const UseActiveRoute = ({to, children}) => {
    return (
        <NavLink to={to} className={({isActive})=>` py-4 px-3 inline-block ${isActive? 'border-b border-orange-500': ''}`}>{children}</NavLink>
    );
};

export default UseActiveRoute;