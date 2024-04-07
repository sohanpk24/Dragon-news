
import logo from '../../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center mt-4'>
            <img className='mx-auto mb-4' src={logo} alt="" />
            <p>Journalism Without fear or Favour</p>
            <p className='text-1x'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;