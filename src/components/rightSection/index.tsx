import React, { useState } from 'react';
import { Button, Card, Col, Image, ListGroup, ProgressBar, Row } from 'react-bootstrap';
import { Employee } from '../../types/Employee';
import './style.css'

interface Props {
    employee: Employee | null;
    onSlide: (n: number, e: Employee) => void;
}

function RightSection(props: Props) {
    const mapValue = (x: number, in_min: number, in_max: number, out_min: number, out_max: number) => (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    const { employee, onSlide } = props;
    const [value, onChange] = useState(mapValue(employee?.popularity as number, 1, 6, 1, 100));
    console.log("employees", employee);


    if (!employee) return null;
    return (
        <>
            <Row className="move-top" >
                <Col xs={2} md={2}>
                    <Image src={employee.image} rounded width="135" style={{ border: '1px solid #cacaca' }} />
                </Col>
                <Col xs={10} md={9} >
                    <div className="name">
                        {employee.name}
                    </div>
                    <div className="popularity">
                        <div className="my-5">
                            <Row>
                                <Col xs={3} md={3} >
                                    <label htmlFor="customRange1">Popularity</label>
                                </Col>
                                <Col xs={10} md={9} >
                                    <input type="range" className="custom-range" id="customRange1"
                                        onChange={({ target: { value: radius } }) => {
                                            onChange(radius as any);

                                            onSlide(mapValue(radius as any, 1, 100, 25, 44) as any, employee);
                                        }}
                                        min="1" max="100" value={value} />
                                </Col>
                            </Row>
                        </div>

                    </div>
                    <div className="biography">
                        <h3>Biography</h3>
                        {employee.biography}
                    </div>
                </Col>
            </Row>

        </>
    );
}

export default RightSection;
