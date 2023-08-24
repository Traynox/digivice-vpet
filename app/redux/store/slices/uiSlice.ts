import { createSlice} from '@reduxjs/toolkit'
import {menu} from './../../../types/types'

const initialState: menu = {
    isLoading: false,
    tabActive: 1,
    tabType: 'attributes',
    isMobile:false,
    isFirstInteraction:false
}

export const uiSlice = createSlice({
    name: "experience",
    initialState,
    reducers: {
        
        setIsMobile: (state,action)=>{
            state.isMobile = action.payload
        },
        setTabType:(state,action) =>{
            state.tabType =  action.payload
        },
        setTabActive: (state,action) => {
           
            state.tabActive = action.payload;
            state.isFirstInteraction = true;
            if(action.payload===4)
                state.tabType = 'info'
            else
                state.tabType = 'attributes' 
        },
        setIsLoading: (state,action) => {
           
            state.isLoading = action.payload;
        },
    },
})

export const {setTabActive, setIsLoading, setTabType, setIsMobile } = uiSlice.actions

