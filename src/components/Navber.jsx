import React from 'react';

const Navber = () => {
    return (
        <nav className='flex justify-between'>
            <h2 className='text-3xl'>Nex.js</h2>
            <ul className='flex gap-4'>
                <li className=''>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
        </nav>
    );
};

export default Navber;