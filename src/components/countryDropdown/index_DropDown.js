import { FaAngleDown } from "react-icons/fa6";
import Button  from  '@mui/material/Button';

const CountryDrop = () => {
    return(
        <>
            <button type="button" className="btn btn-outline-light countryDrop" style={{ color: '#FF5722', borderColor: '#FF5722' }}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">Batam</span>
                </div>
                <span className="ml-auto">
                <FaAngleDown />
                </span>
            </button>

        </>
    )
}

export default CountryDrop;
