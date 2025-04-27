import { Link } from 'react-router-dom';
import ErrorImg from '../assets/error.jpeg'

const ErrorPage = () => {
    return (
        <div className='relative'>
            <img className='h-[100vh] w-full object-cover' src={ErrorImg} alt="" />
            <Link to="/">
                <button className="btn bg-sky-500 hover:bg-sky-600 text-white absolute top-[430px] left-[620px]">Return Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;