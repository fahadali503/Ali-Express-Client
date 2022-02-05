import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_CONSTANTS } from '../constants/slices.constants'
import { UserState } from '../types/user/UserState'

const initialState: UserState = {
    user: null,
    token: null
}

export const userSlice = createSlice({
    initialState,
    name: SLICE_CONSTANTS.USER,
    reducers: {
        addUser(state, action: PayloadAction<UserState>) {
            state.token = action.payload.token;
            state.user = action.payload.user
        },
        logoutUser(state) {
            state.token = null;
            state.user = null;
        }
    }
})

export const { addUser, logoutUser } = userSlice.actions;
export default userSlice.reducer