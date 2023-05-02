import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-92px)]'>
          
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default Loading;