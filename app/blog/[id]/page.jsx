import DynamicPage from '@/app/components/DynamicPage';
import React from 'react';

const dynamicPage =async({params}) => {
    const { id } = await params
    return (
        <div>
            <DynamicPage id={id}/>
        </div>
    );
};

export default dynamicPage;