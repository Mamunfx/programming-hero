import React from 'react';
import moment from 'moment';
const Date = () => {
    return (
        <div className=' flex justify-center'>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Date;