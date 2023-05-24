import { Link } from 'react-router-dom';
import errorPageBg from '../../assets/img/ErrorPageBG.jpg'
const ErrorPage = () => {
    return (
        <div className='h-screen bg-center bg-cover relative' style={{backgroundImage: `url(${errorPageBg})`}}>
           <Link to='/'> <button className="btn border-none bg-orange-500 hover:bg-orange-700 absolute right-20 bottom-5">Go to Home page</button></Link>
        </div>
    );
};

export default ErrorPage;