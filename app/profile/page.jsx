import React from 'react';
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const page = async() => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    return (
        <div>
            {
                user ? 
            <><div className='flex items-center justify-center flex-col gap-3 mt-5'>
                <h2 className='text-3xl'>Welcome to the Profile page</h2>
            <img className='rounded-full' src={user.picture} alt={user.family_name} />
            <p>{user.family_name}</p>
            <p>{user.email}</p>
            </div>
            </>
            :<LoginLink className='btn'>Login</LoginLink>
            }
        </div>
    );
};

export default page;