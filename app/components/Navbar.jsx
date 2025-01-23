import {RegisterLink, LoginLink , LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from 'next/link';
import React from 'react';

const Navbar = async() => {
        const {getUser} = getKindeServerSession();
        const user = await getUser();
    return (
        <div className='font-bold text-xl flex justify-center items-center gap-5 bg-slate-200 py-4'>
            <Link href='/' className="btn">Home</Link>
            {user ? <>
            <Link href='/profile' className="btn">Profile</Link>
            <LogoutLink className="btn">Log out</LogoutLink></>
            :
            <><LoginLink className="btn">Log in</LoginLink>
            <p>OR</p>
            <RegisterLink className="btn">Sign up</RegisterLink></>}
        </div>
    );
};

export default Navbar;