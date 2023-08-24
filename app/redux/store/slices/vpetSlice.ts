
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {setMood} from './../../../utils/vpet'
import {vpet} from './../../../types/types'


const initialState: vpet = {
    name: 'koromon',
    happiness: 80,
    discipline: 40,
    hungry: 50,
    mood: 'happy',
    age: 0,
}

export const vpetSlice = createSlice({
    name: "vpet",
    initialState,
    reducers: {
        setName:(state,action)=>{
            state.name = action.payload;
        },
        updateAttributes:(state, action: PayloadAction<vpet>)=>{
            
            state.happiness = Math.max(0,Math.min(100, state.happiness - action.payload.happiness)) ;
            state.discipline = Math.max(0,Math.min(100, state.discipline - action.payload.discipline)) ;
            state.hungry = Math.min(100, Math.max(0, state.hungry - action.payload.hungry)) ;
            state.mood = setMood(state);
          
        },
        setHappiness: (state,action) => {
            state.discipline = Math.max(0,Math.min(100, state.discipline - 5)) ;
            state.happiness = Math.max(0,Math.min(100, state.happiness + action.payload)) ;
        },
        setDiscipline: (state,action) => {
            state.happiness = Math.max(0,Math.min(100, state.happiness - 5));
            state.discipline = Math.max(0,Math.min(100, state.discipline + action.payload));
        },
        setHungry: (state,action) => {
            state.happiness = Math.max(0,Math.min(100, state.happiness + (action.payload/2)));
            state.hungry = Math.max(0,Math.min(100, state.hungry + action.payload));
        },
        setAge: (state) => {
                
                state.age += 1;
        },
    },
})

export const { setName, setHappiness, setDiscipline, setHungry, setAge, updateAttributes } = vpetSlice.actions

