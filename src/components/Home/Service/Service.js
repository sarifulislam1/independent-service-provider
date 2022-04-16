import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'
const Service = (props) => {
    const { name, rating, review, img } = props.service
    return (
        <div>
            <div >
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{ height: 250 }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {review}
                        </Card.Text>
                        <Button variant="primary">Checkout</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Service;