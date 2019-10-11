import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends React.Component { 
    state = { 
        calendarFocused: null 
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ 
            calendarFocused
        }))
    }
    render(){
        return ( 
            <div>
                <input 
                type="text" 
                value={ this.props.filters.text } 
                onChange={(e) => { 
                    this.props.dispatch(setTextFilter(e.target.value))
                }} /> 
                <select 
                value={ this.props.filters.sortBy} 
                onChange={(e) => { 
                    if(e.target.value === "date") { 
                        this.props.dispatch(sortByDate(e.target.value))
                    } else if (e.target.value === "amount") { 
                        this.props.dispatch(sortByAmount(e.target.value))
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>  
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.state.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                /> 
            </div>
    )
}}

const mapStatetoProps = (state) => { 
    return { 
        filters: state.filters
    }
}

export default connect(mapStatetoProps)(ExpenseListFilters)