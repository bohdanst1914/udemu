import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";

const Expenses = ({expenses}) => {
    return (
        <Card className="expenses">
            {expenses.map((item, key) =>
                <ExpenseItem
                    key = {key}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            )}
        </Card>
    );
};

export default Expenses;