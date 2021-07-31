import React, { useState } from 'react';
import Header from '../header'
import data from '../../assets/EmployeeData.json'
import LeftSection from '../leftSection';
import { Employee } from '../../types/Employee';
import RightSection from '../rightSection';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
//default


const mapValue = (x: number, in_min: number, in_max: number, out_min: number, out_max: number) => (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;

const dataEmployees = data.employees as Employee[];

dataEmployees[0].isSelected = true;

dataEmployees[0].fontSize = mapValue(dataEmployees[0].popularity, 1, 6, 32, 44);
dataEmployees.forEach((item) => {
    item.fontSize = mapValue(item.popularity, 1, 6, 25, 44);
});

function Main() {
    const [selectedEmployee, setSelectedEmployee] = useState<Employee>(dataEmployees[0]);
    const [employees, setEmployees] = useState<Employee[]>(data.employees as any);
    console.log(employees);
    const onLeftSectionClickHandler = (e: Employee) => {
        console.log(e);
        setSelectedEmployee(e);
        employees.forEach((item) => {
            item.isSelected = false;
            //TODO we need to check id instead of name
            if (item.name === e.name) {
                item.isSelected = true;
            }
        });
        setEmployees([...employees]);
    }
    const onSlideHandler = (n: number, e: Employee) => {
        console.log('n', n)
        employees.forEach((item) => {
            //TODO we need to check id instead of name
            if (item.name === e.name) {
                item.fontSize = n;
            }
        });
        setEmployees([...employees]);
    }
    return (
        <>

            <Header />
            <Row className="main">
                <Col xs={2} md={3}>
                    <LeftSection employees={employees} onClick={(e: Employee) => onLeftSectionClickHandler(e)} />
                </Col>
                <Col xs={10} md={9}>
                    <RightSection employee={selectedEmployee} onSlide={(n, e) => onSlideHandler(n, e)} />
                </Col>
            </Row>
        </>
    );
}

export default Main;
