import React, {useContext, useState} from 'react';
import {TransactionContext} from './transContext';

function Child() {
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);


    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });

        setDesc('');
        setAmount(0)
    }
    const getIncome=()=>{
        let income=0;
        for (var i =0; i<transactions.length; i++){
            if (transactions[i].amount>0)
            income += transactions[i].amount
        }
        return income;
    }
    const getExpenses=()=>{
        let expenses=0;
        for (var i =0; i<transactions.length; i++){
            if (transactions[i].amount<0)
            expenses += transactions[i].amount
        }
        return expenses;
    }

    return(
        <div className='container'>
            <h1 className='text-center boldred'>Expense Tracker</h1>
            <h3 className='curBal'>YOUR BALANCE <br/> {getIncome()+getExpenses()}</h3>
            <div className='journal text-center'>
                <h3>INCOME <br/> {getIncome()}</h3>
                <h3>EXPENSES <br/> {getExpenses()}</h3>
            </div>
            <h3>History</h3>
            <hr/>
            <ul className='histor'>
                {transactions.map((transObj, ind)=>{
                    return(<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li>);
                })}
            </ul>

            <h3>Add New Transaction</h3>
            <hr/>
            <form className='transac' onSubmit={handleAddition}>
                <label>
                    Enter Desctiption <br/>
                    <input type="text" 
                    value={newDesc}
                    placeholder="Description"
                    onChange={(ev)=>setDesc(ev.target.value)} required/>
                </label>
                <br/>
                <label>
                    Enter Amount <br/>
                    <input type="number"
                    value={newAmount}
                    placeholder="Amount"
                    onChange={(ev)=>setAmount(ev.target.value)} required/>
                </label>
                <br/>
                <input type="button" value="Add Transaction" />
            </form>

        </div>
    );

}

export default Child;