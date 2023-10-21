import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';
import { TypedUseSelectorHook, useSelector ,useDispatch} from 'react-redux';

const store = configureStore({
    reducer:{
        counters:counterSlice
    }
})

// 二次封装 usereducer 解决 TS 类型错误
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppReducer :TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch :()=>AppDispatch = useDispatch
export default store
