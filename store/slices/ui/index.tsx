import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UiSliceProps {
    isMenuOpen: boolean
    isModalOpen: boolean
}

const initialState:UiSliceProps = {
    isMenuOpen: false,
    isModalOpen: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleMenu: (state:UiSliceProps, action:PayloadAction<boolean>) => {
            state.isMenuOpen = action.payload;
        },
        toggleModal:(state:UiSliceProps, action:PayloadAction<boolean>)=>{
            state.isModalOpen = action.payload;
        }
    }
})

export const { toggleMenu , toggleModal} = uiSlice.actions
