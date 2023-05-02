import React from 'react';

const Loading = () => {
    console.log('loading');
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-92px)] '>
            <progress className="progress w-1/3 bg-white text-center"></progress>
           
        </div>
    );
};

export default Loading;

/**
 *  <div className='flex items-center justify-center h-[88vh] border'> <progress className="progress w-1/3 bg-white text-center"></progress></div>
 */