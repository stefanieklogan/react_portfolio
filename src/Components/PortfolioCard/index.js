import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';

function PortfolioCard(props) {
    return (
        <div>
            <div class="container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.project.thumbnail} alt={props.project.alt}/>
                    <Card.Body>
                        <Card.Title>{props.project.title}</Card.Title>
                        <Card.Text>
                            {props.project.description}
                        </Card.Text>
                        <Button className="btn" href={props.project.href}>View site</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default PortfolioCard