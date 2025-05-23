import React from 'react';

const Chef = () => {
    return (
        <div className='container mx-auto mb-10 md:mb-20 lg:mb-32'>
            <div className='lg:flex gap-11 items-center justify-between'>
                <div>
                    <h1 className='font-semibold text-[20px] lg:text-[48px] text-black mb-[23px]'>Everyone can be a <br />
                    chef in their own kitchen</h1>
                    <p className='lg:w-[526px] text-[16px] font-normal'>With a pinch of passion and a dash of creativity, anyone can create delicious meals right at home. Cooking isn't just for professionals — it's a joyful journey open to all.</p>
                </div>
                <div>
                    <img src="/src/images/Group 880.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Chef;