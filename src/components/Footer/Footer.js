import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (

        <footer className=' p-3 m-5 '>


            <p>all copyright<small>&copy; {date}</small></p>
        </footer>

    );
};

export default Footer;