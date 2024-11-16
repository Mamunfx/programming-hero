import React from 'react';

const Right = () => {
    return (
        <div>

            <div>
                <h1 className='font-extrabold'>Login with </h1>
                <div className='flex flex-col gap-2'>
                    <button className='btn btn-outline text-blue-400'>Login With Google</button>
                    <button className='btn btn-outline'>Login With Github</button>
                </div>
            </div>
        </div>
    );
};

export default Right;