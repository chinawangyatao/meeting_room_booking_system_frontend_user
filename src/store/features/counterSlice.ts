import { createSlice } from '@reduxjs/toolkit';

// 定义类型接口
export interface CounterType{
    value:number,
    title:string
}

// 定义初始化数据
const initialState:CounterType ={
    value:0,
    title:"this count is:"
}

const counterSlider = createSlice({
    name:"counter",
    initialState,
    // 定义 reducers 并生成关联的操作
    reducers:{
    //     定义一个加方法
        increment:(state, action)=>{
            state.value+=1
        },
    //     定义一个减方法
        decrement:(state, action)=>{
            state.value -=1
        }
    }
})

// 导出reduce 方法
export const {increment,decrement} = counterSlider.actions

// 默认导出
export default counterSlider.reducer
