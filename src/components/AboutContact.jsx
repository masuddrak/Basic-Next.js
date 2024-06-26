import Link from 'next/link';
import React from 'react';

const AboutContact = () => {
    return (
        <div>
            <ul className='flex gap-4'>
                <Link href="/about/history">History</Link>
                <Link href="/about/mission">Mission</Link>
            </ul>
        </div>
    );
};

export default AboutContact;