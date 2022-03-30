import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({date, amount, title}) => {

    const clickHandler = () => {

    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date = {date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
            <button>Change title</button>
        </Card>

    );
};

export default ExpenseItem;