import React from 'react';

const About = () => {
    return (
        <div className='d-flex justify-content-center align-items-center text-start mt-5 container p-3 rounded'>
            <div>
                <h2 className='text-primary'>Hey I'm a Independent Photographer</h2>
                <p>Being a Independent photographer means that you work for yourself, taking on clients for photoshoots or creating and selling your fine art photography. Pretty much every business or entrepreneur out there is going to need photos at some point, whether it's a professional headshot or product photos for their online store</p>
            </div>
            <div>
                <img className='rounded-pill' src="https://enviragallery.com/wp-content/uploads/2016/03/Camera-Bag-e1457180868980.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;