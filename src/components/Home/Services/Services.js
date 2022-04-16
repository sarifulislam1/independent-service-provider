import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <h2 className='text-primary'>Services</h2>
            <div className='service'>
                {
                    services.map(service => <Service

                        service={service}
                        key={service.id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;