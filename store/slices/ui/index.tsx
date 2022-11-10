import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UiSliceProps {
    isMenuOpen: boolean
}

const initialState:UiSliceProps = {
    isMenuOpen: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleMenu: (state:UiSliceProps, action:PayloadAction<boolean>) => {
            state.isMenuOpen = action.payload;
        }
    }
})

export const { toggleMenu } = uiSlice.actions
