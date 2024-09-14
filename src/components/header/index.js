import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CountryDrop from '../countryDropdown/index_DropDown'; // Tetap digunakan
import { IoSearch } from "react-icons/io5";
import Account from '../profile/indexProfile';
import ShoppingCart from '../shoppingCart/indexShopping';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="top-strip bg-orange">
                <div className="container">
                    <p className="text-center mb-0 mt-0"><b>E-Commerce</b></p>
                </div>
            </div>

            <div className="header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="logo-wrapper col-sm-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#f4511e" d="M36.683,43H11.317c-2.136,0-3.896-1.679-3.996-3.813l-1.272-27.14C6.022,11.477,6.477,11,7.048,11h33.904c0.571,0,1.026,0.477,0.999,1.047l-1.272,27.14C40.579,41.321,38.819,43,36.683,43z"></path>
                                <path fill="#f4511e" d="M32.5,11.5h-2C30.5,7.364,27.584,4,24,4s-6.5,3.364-6.5,7.5h-2C15.5,6.262,19.313,2,24,2s8.5,4.262,8.5,9.5z"></path>
                                <path fill="#fafafa" d="M24.248,25.688c-2.741-1.002-4.405-1.743-4.405-3.577c0-1.851,1.776-3.195,4.224-3.195 c1.685,0,3.159,0.66,3.888,1.052c0.124,0.067,0.474,0.277,0.672,0.41l0.13,0.087l0.958-1.558l-0.157-0.103c-0.772-0.521-2.854-1.733-5.49-1.733c-3.459,0-6.067,2.166-6.067,5.039c0,3.257,2.983,4.347,5.615,5.309c3.07,1.122,4.934,1.975,4.934,4.349c0,1.828-2.067,3.314-4.609,3.314c-2.864,0-5.326-2.105-5.349-2.125l-0.128-0.118l-1.046,1.542l0.106,0.087c0.712,0.577,3.276,2.458,6.416,2.458c3.619,0,6.454-2.266,6.454-5.158C30.393,27.933,27.128,26.741,24.248,25.688z"></path>
                            </svg>
                        </div>

                        <div className="col-sm-10 align-items-center part-2">
                            <CountryDrop className="country-drop"/>
                            
                            {/* Header Start Search */}
                            <div className="header-search">
                                <input type="text" placeholder="Search..." />
                                <IoSearch />
                            </div>
                            {/* Header End Search */}
                            
                            {/* Header Start Account */}
                            <div className='ms-5'>
                            <Account className="header-account"/>
                            </div>
                            {/* Header End Account */}
                            
                            {/* Header Start Cart */}
                            <div className='ms-5'>
                                <ShoppingCart className="header-shopping" />
                            </div>


                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Header;
