import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logoOne from '../assets/img/logoOne.png'

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="grid gap-5 grid-cols-12 p-10 text-base-content">
                <div className="w-full flex flex-col gap-3 justify-center items-center col-span-12 xl:col-span-3">
                    <Link to={'/'}><img className="w-20 h-auto" src={logoOne} alt="" /></Link>
                    <h3 className="font-semibold text-xl text-orange-500">Edutainment Toys</h3>
                    <p className="text-gray-300">Unlock the Power of Fun Learning</p>
                    <ul className="flex gap-3">
                        <li><Link className="bg-orange-500 text-slate-50 rounded-full inline-block p-2 text-xl"> <FaFacebook></FaFacebook> </Link></li>
                        <li><Link className="bg-orange-500 text-slate-50 rounded-full inline-block p-2 text-xl"> <FaGithub></FaGithub> </Link></li>
                        <li><Link className="bg-orange-500 text-slate-50 rounded-full inline-block p-2 text-xl"> <FaLinkedinIn></FaLinkedinIn> </Link></li>
                        <li><Link className="bg-orange-500 text-slate-50 rounded-full inline-block p-2 text-xl"> <FaInstagram></FaInstagram> </Link></li>
                    </ul>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center col-span-12 md:col-span-4 xl:col-span-3">
                    <span className="footer-title text-white">Services</span>
                    <a className="link link-hover text-white">Branding</a>
                    <a className="link link-hover text-white">Design</a>
                    <a className="link link-hover text-white">Marketing</a>
                    <a className="link link-hover text-white">Advertisement</a>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center col-span-12 md:col-span-4 xl:col-span-3">
                    <span className="footer-title text-white">Company</span>
                    <a className="link link-hover text-white">About us</a>
                    <a className="link link-hover text-white">Contact</a>
                    <a className="link link-hover text-white">Jobs</a>
                    <a className="link link-hover text-white">Press kit</a>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center col-span-12 md:col-span-4 xl:col-span-3">
                    <span className="footer-title text-white">Legal</span>
                    <a className="link link-hover text-white">Terms of use</a>
                    <a className="link link-hover text-white">Privacy policy</a>
                    <a className="link link-hover text-white">Cookie policy</a>
                </div>
            </div>
            <p className="py-5 text-center">Copyright © 2023 - All right reserved by <span className="font-bold text-orange-500">Edutainment Toys</span></p>
        </footer>

    );
};

export default Footer;