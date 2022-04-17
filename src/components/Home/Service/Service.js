import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const { name, review, img } = props.service
    const navigate = useNavigate()
    const goCheckout = () => {
        navigate('/checkout')
    }
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
                        <Button onClick={goCheckout} variant="primary">Checkout</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Service;