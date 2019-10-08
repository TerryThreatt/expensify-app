import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import 'normalize.css/normalize.css'
import './styles/styles.scss' 

// Store 
const store = configureStore();

// Actions 
store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill' }));
store.dispatch(setTextFilter('water'))

console.log(store.getState())

// Subscribe
const state = store.getState(); 
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));