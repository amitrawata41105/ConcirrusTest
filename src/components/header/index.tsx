import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import logo from '../../assets/the-godfather.svg';
import './style.css';

function Header() {
    return (
        <div className="header">

            <Row>
                <Col xs={2} md={3}>
                    <div style={{ background: '#25252d96' }} className="d-flex justify-content-center light-bg">
                        <Image src={logo} style={{
                            height: '400px',
                            width: '182Px',
                        }} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Header;
