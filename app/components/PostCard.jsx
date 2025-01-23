import Link from 'next/link';
import React from 'react';

const PostCard = ({title, body,id }) => {
    return (
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{body}</p>
    <div className="card-actions justify-end">
        <Link href={`/blog/${id}`} className='btn btn-primary'>See Details</Link>
    </div>
  </div>
</div>
    );
};

export default PostCard;