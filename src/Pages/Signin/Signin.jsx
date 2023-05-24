import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgImg from '../../assets/img/form-bg.jpg'
import { authContextData } from '../../SharedContext/AuthContext';

const Signin = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const { setUser, setLoading, signinWithEmailPassFunc, signinWithGoogleFunc, signinWithGithubFunc } = useContext(authContextData)

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.pathname || '/'

    // handle signin with email and pass func
    const handleSigninFunc = (e) => {
        e.preventDefault()
        setSuccess('')
        setError('')
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        // password regexp
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(!passwordRegex.test(password)){
            setError("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.")
            return
        }

        signinWithEmailPassFunc(email, password)
            .then(res => {
                const currUser = res.user
                setUser(currUser)
                setSuccess('user signin successfully')
                navigate(from)
            }).catch(e => {
                setLoading(false)
                if (e.code === "auth/user-not-found") {
                    setError('User not found')
                } else if (e.code === "auth/invalid-email") {
                    setError('Invalid email')
                } else if (e.code === "auth/wrong-password") {
                    setError('wrong password')
                } else if(e.code === "auth/too-many-requests"){
                    setError("Access to this account has been temporarily disabled due to many failed login attempts. Please reset your password or try again later.")
                } else{
                    setError(e.message)
                }
            })
    }

    // handle gogle signin func
    const handleGoogleSigninFunc = (e) => {
        e.preventDefault()
        setSuccess('')
        setError('')
        signinWithGoogleFunc().then(res => {
            const currUser = res.user
            setUser(currUser)
            setSuccess('user signin successfully')
            navigate(from)
        }).catch(e => {
            setLoading(false)
            setError(e.message)
        })
    }

    // handle github signin func
    const handleGithubSigninFunc = (e) => {
        e.preventDefault()
        setSuccess('')
        setError('')
        signinWithGithubFunc().then(res => {
            const currUser = res.user
            setUser(currUser)
            setSuccess('user signin successfully')
            navigate(from)
        }).catch(e => {
            setLoading(false)
            setError(e.message)
        })
    }

    return (
        <div className="flex items-center justify-center px-6 py-8 mx-auto min-h-[calc(100vh-60px)] lg:py-0 bg-cover bg-center bg-slate-900 bg-blend-overlay" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="w-full bg-transparent text-white shadow-inner shadow-slate-500 rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 rounded bg-slate-50 shadow-inner text-gray-600">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                        Sign in to your account
                    </h1>
                    <form onSubmit={handleSigninFunc} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your email here" required />
                        </div>
                        <div className='relative'>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type={showPass ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            <span onClick={() => setShowPass(!showPass)} className='absolute right-2 bottom-3 text-slate-700'>{showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" name='remember' aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        {error && <p className='text-red-500'>*{error}</p>}
                        {success && <p className='text-green-500'>{success}</p>}
                        <button type="submit" className="w-full text-white btn btn-success border border-orange-500 font-bold text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" style={{ background: '#0b1315' }}>Sign in</button>

                        <p className="text-sm font-light">
                            Don’t have an account yet? <Link to='/signup' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                        </p>
                    </form>

                    <div className='flex items-center'>
                        <hr className="flex-grow" />
                        <span className="mx-2">Or sign in with</span>
                        <hr className="flex-grow" />
                    </div>
                    <div className='flex justify-evenly gap-4 flex-col sm:flex-row'>
                        <button onClick={handleGoogleSigninFunc} className='btn btn-success border  border-orange-500 text-orange-500 px-6 font-bold' style={{ background: '#0b1315' }}> <FaGoogle className='mr-2'></FaGoogle> Google</button>
                        <button onClick={handleGithubSigninFunc} className='btn btn-success border border-orange-500 text-orange-500 px-6 font-bold' style={{ background: '#0b1315' }}> <FaGithub className='mr-2'></FaGithub> Github</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signin;