import React from 'react';

const DynamicPage = async({id}) => {
    const res = await fetch(` https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return (
        <div className='space-y-4 mt-5'>
            <h1 className='text-xl font-bold text-center'>{data.title}</h1>
            <p className='text-xl font-normal text-center'>{data.body}</p>
        </div>
    );
};

export default DynamicPage;