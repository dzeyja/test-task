import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../types/UserSchema';
import { User } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage/localStorage';

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
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if(user) {
                state.authData = JSON.parse(user)
            }
        }
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;