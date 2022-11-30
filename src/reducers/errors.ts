import { createReducer } from '@reduxjs/toolkit';
import { SHOW_ERROR_TOAST } from '../constants/action-types';
import update from 'immutability-helper';

const initialValue: any = [];

const reducer = createReducer(initialValue, {
    [SHOW_ERROR_TOAST]: (state, action) => {
        if (action.payload.error.show){
            return update(state, {$push: [action.payload.error]})
        } else {
            return update(state, {[action.payload.index]: { show: {$set: action.payload.error.show}}});
        }   
    }
}, );

export default reducer;

