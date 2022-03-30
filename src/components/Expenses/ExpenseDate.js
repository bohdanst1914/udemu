import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = () => {

    return (
        <div className="expense-date">
            <div className="expense-date__month">Month</div>
            <div className="expense-date__year">Year</div>
            <div className="expense-date__day">day</div>
        </div>
    );
};

export default ExpenseDate;