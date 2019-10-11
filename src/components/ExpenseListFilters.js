import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'


const ExpenseListFilters = (props) => ( 
    <div>
        <input 
        type="text" 
        value={ props.filters.text } 
        onChange={(e) => { 
            props.dispatch(setTextFilter(e.target.value))
        }} /> 
        <select 
        value={ props.filters.sortBy} 
        onChange={(e) => { 
            if(e.target.value === "date") { 
                props.dispatch(sortByDate(e.target.value))
            } else if (e.target.value === "amount") { 
                props.dispatch(sortByAmount(e.target.value))
            }
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>    
    </div>
)

const mapStatetoProps = (state) => { 
    return { 
        filters: state.filters
    }
}

export default connect(mapStatetoProps)(ExpenseListFilters)