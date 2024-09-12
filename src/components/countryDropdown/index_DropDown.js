import { FaAngleDown } from "react-icons/fa6";
import Button  from  '@mui/material/Button';

const CountryDrop = () => {
    return(
        <>
<button type="button" className="btn btn-outline-light countryDrop" style={{ color: '#FF5722', border: '1px solid #0' }}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="d-flex flex-column">
                        <span className="label">Your Location</span>
                        <span className="name font-weight-bold">Batam</span>
                    </div>
                    <span className="icon" style={{display: 'flex', alignItems: 'center' }}>
                        <FaAngleDown />
                    </span>
                </div>
            </button>
        </>
    )
}

export default CountryDrop;
