import React from 'react';

const AddCoffe = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1>ADD Coffe</h1>
            <form className='space-y-2'>

                <input type="text" name="Name" placeholder='Coffe name' className='border-2 p-4' />
                <br />
                <input type="text" name="quantity" placeholder='Quantity available' className=' border-2 p-4'/>
            </form>
        </div>
    );
};

export default AddCoffe;