import React from 'react';
import Services from '../Services/Services';
import './Banner.css'
const Banner = () => {
    return (
        <div >
            <div className=' banner-div container'>
                <div>
                    <h2 className='text-primary'>Independent Photographer</h2>
                    <p>Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.</p>
                </div>
                <div>
                    <img src="https://www.boredpanda.com/blog/wp-content/uploads/2021/12/61aa1823c0fa7.jpg" alt="" />
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Banner;