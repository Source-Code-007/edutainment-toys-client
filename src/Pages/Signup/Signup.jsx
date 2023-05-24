/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import bgImg from '../../assets/img/form-bg.jpg'
import { authContextData } from '../../SharedContext/AuthContext';

const Signup = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)
    const { signupWithEmailPassFunc, updateUserProfileFunc, logoutFunc } = useContext(authContextData)
    const navigate = useNavigate()

    // handle signup function
    const handleSignupFunc = (e) => {
        e.preventDefault()
        setSuccess('')
        setError('')
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirm_password.value
        const terms = form.terms
        
        if (!terms.checked) {
            setError('*Please check terms and condition first')
            return
        }
        if (password !== confirmPassword) {
            setError('*Your password is not match!')
            return
        }

        // password regexp
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(!passwordRegex.test(password)){
            setError("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.")
            return
        }

        signupWithEmailPassFunc(email, password)
            .then(res => {
                const currUser = res.user
                updateUserProfileFunc(name, photo).then(() => {
                    setSuccess('user created successfully')
                    logoutFunc().then(() => { }).catch(e => console.log(e.message))
                    navigate('/signin')
                }).catch(e => setError(e.message))

            }).catch(e => {
                if (e.code === 'auth/email-already-in-use' ) {
                    setError('Email address is already in use. Please use a different email or try logging in.')
                } else{
                    setError(e.message)
                }
            })
    }

    return (
        <div className="flex items-center justify-center px-6 py-8 mx-auto min-h-[calc(100vh-60px)] lg:py-0 bg-cover bg-center bg-slate-900 bg-blend-overlay" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="w-full bg-transparent text-white shadow-inner shadow-slate-500 rounded-lg dark:border md:mt-0 sm:max-w-md md:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 rounded bg-slate-50 shadow-inner text-gray-600">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                        Please register
                    </h1>
                    <form onSubmit={handleSignupFunc} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name here" required />
                        </div>
                        <div>
                            <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your photo</label>
                            <input type="url" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your photo URL here" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your email here" required />
                        </div>
                        <div className='relative'>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type={showPass ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            <span onClick={() => setShowPass(!showPass)} className='absolute right-2 bottom-3 text-slate-700'>{showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        </div>
                        <div className='relative'>
                            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                            <input type={showConfirmPass ? 'text' : 'password'} name="confirm_password" id="confirm_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            <span onClick={() => setShowConfirmPass(!showConfirmPass)} className='absolute right-2 bottom-3 text-slate-700'>{showConfirmPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" name='terms' aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms">Accept <Link className='link-hover link-primary'>Terms and Condition</Link></label>
                                </div>
                            </div>
                        </div>
                        {error && <p className='text-red-500'>*{error}</p>}
                        {success && <p className='text-green-500'>{success}</p>}
                        <button type="submit" className="w-full text-white btn btn-success border border-orange-500 font-bold text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" style={{ background: '#0b1315' }}>Sign Up</button>

                        <p className="text-sm font-light">
                            Already have an account? <Link to='/signin' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Signup;