import React from 'react';
import { Employee } from '../../types/Employee';
import './style.css';
interface Props {
    employees: Employee[],
    onClick: any;
}

function LeftSection(props: Props) {
    const { employees, onClick } = props;
    const fColor = (n: number) => {
        return n % 2 ? '' : '#3dc3e8';
    }
    return (
        <>
            {/* <ListGroup>
                {employees.map((item) => <ListGroup.Item onClick={() => onClick(item)}>{item.name}</ListGroup.Item>)}
            </ListGroup> */}
            <div className="leftSection">
                <div className="btn list p-0">
                    {employees.map((item, i: number) => <div key={item.name}
                        style={{ fontSize: `${item.fontSize}px`, color: `${fColor(i)}` }}
                        className={item.isSelected ? 'select fontColor' : ''} onClick={() => onClick(item)}>{item.name}</div>)}
                </div>
            </div>
        </>
    );
}

export default LeftSection;
