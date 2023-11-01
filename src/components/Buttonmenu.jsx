import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

const Buttonmenu = () => {
    return (
        <div>
            {/* <Link to="/halaman-lain"> */}
                <button className="bg-yellow-500 hover:bg-orange-700 p-4 mx-auto rounded-full flex justify-center items-center">
                    <FontAwesomeIcon icon={faCircleArrowRight} size='3x' className='mr-3'/>
                    <h1 className='text-black text-4xl font-buttontext'>TAP TO SEE MORE</h1>
                </button>
            {/* </Link> */}
        </div>
    );
}

export default Buttonmenu;