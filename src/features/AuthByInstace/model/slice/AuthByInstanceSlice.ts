import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthByInstanceSchema } from '../types/AuthByInstance';

const initialState: AuthByInstanceSchema = {
    isLoading: false,
    idInstance: '',
    apiTokenInstance: '',
    error: undefined
};

export const AuthByInstanceimport = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIdInstance: (state, action: PayloadAction<string>) => {
            state.idInstance = action.payload
        },
        setApiTokenInstace: (state, action: PayloadAction<string>) => {
            state.apiTokenInstance = action.payload
        }
    },
});

export const { actions: AuthByInstanceimportActions } = AuthByInstanceimport;
export const { reducer: AuthByInstanceimportReducer } = AuthByInstanceimport;