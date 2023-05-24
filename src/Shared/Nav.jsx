import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContextData } from "../SharedContext/AuthContext";
import { Oval } from 'react-loader-spinner'
import UseActiveRoute from "../HelpingCompo/UseActiveRoute";
import logoOne from '../assets/img/logoOne.png'

const Nav = () => {
    const { user, setUser, loading, setLoading, logoutFunc } = useContext(authContextData)

    // signout function
    const handleSignoutFunc = () => {
        logoutFunc()
            .then(() => {
                setUser(null)
                setLoading(false)
            }).
            catch(e => {
                setLoading(false)
                console.log(e.message);
            })
    }
    const menu = <>
        <li><UseActiveRoute to={'/'}>Home</UseActiveRoute></li>
        <li><UseActiveRoute to={'/all-toy'}>All Toy</UseActiveRoute></li>
        <li><UseActiveRoute to={'/blog'}>Blog</UseActiveRoute></li>
        {
             user ? <><li><UseActiveRoute to={'/my-toys'}>My Toys</UseActiveRoute></li>
                <li><UseActiveRoute to={'add-toy'}>Add Toy</UseActiveRoute></li></> : ''
        }
    </>
    return (
        <div className="navbar bg-slate-600 shadow-inner">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="gap-2 menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52 font-semibold">
                        {menu}
                    </ul>
                </div>
                <Link className="font-bold cursor-pointer text-sm md:text-md text-orange-500 ml-5"><img className="w-10 h-auto mx-auto" src={logoOne} alt="" />Edutainment Toys</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal gap-2 px-1 font-semibold">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                {loading ? <Oval
                    height="50"
                    width="50"
                    color="#4fa94d"
                    secondaryColor='#4fa94d'
                    radius='12.5'
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                /> : user ? <><img src={user.photoURL} className="h-10 w-10 rounded-full mr-3 cursor-pointer" title={user.displayName} /><button onClick={handleSignoutFunc} className="btn border-none bg-orange-500 hover:bg-orange-700">Sign Out</button></>
                    : <Link to={'/signin'}><button onClick={handleSignoutFunc} className="btn border-none bg-green-500 hover:bg-green-700">Sign In</button></Link>}
            </div>
        </div>
    );
};

export default Nav;