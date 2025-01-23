'use client'
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='font-bold text-xl flex justify-center gap-5 mt-5'>
            <Link href='/'>Home</Link>
            <Link href='/profile'>Profile</Link>
        </div>
    );
};

export default Navbar;