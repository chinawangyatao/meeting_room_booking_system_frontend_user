import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppReducer } from './store';
import { decrement, increment } from './store/features/counterSlice';


function App() {
    const counterStore = useAppReducer((store: any) => store.counters);
    console.log(counterStore);
    const dispatch = useAppDispatch();
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
                <div>
                    <p>{counterStore.value}</p>
                    <button onClick={() => dispatch(increment({}))}>+1</button>
                    <button onClick={() => dispatch(decrement({}))}>-1</button>
                </div>
            </header>

        </div>
    );
}

export default App;
