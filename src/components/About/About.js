import React from 'react';

const About = () => {
    return (
        <div className=' mx-auto d-flex justify-content-center align-items-center text-start mt-5 container p-3 rounded'>
            <div>
                <h2 className='text-primary'>Hey I'm Sariful Islam</h2>
                <p>I'm a student.From now after 6 month i want to become a web developer.👋</p>
            </div>
            <div>
                {/* <img className='rounded-pill' src="https://enviragallery.com/wp-content/uploads/2016/03/Camera-Bag-e1457180868980.jpg" alt="" /> */}
                <img className='rounded-pill w-50 mx-auto' src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/247366799_3018712568406587_1494664951106069798_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHY2Rzce6dzJB4IAYK6Hq5uxE8Sg8CYzhjETxKDwJjOGILRT1Lv0E6D5_lTe90gyfT6eGN1BlwwamxfpVzY10h2&_nc_ohc=kVj8wlswaO4AX-rptqB&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_-5NvnCX6FFa6XClVc7fMa0RG0XAko_A5dY7WGcelZUA&oe=6261801B" alt="" />
            </div>
        </div>
    );
};

export default About;