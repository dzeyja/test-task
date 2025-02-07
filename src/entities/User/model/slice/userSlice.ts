import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../types/UserSchema';
import { User } from '../types/user';

const initialState: UserSchema = {
    authData: {
        idInstance: '',
        apiTokenInstance: '' 
    },
    isAuth: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            state.isAuth = true
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;