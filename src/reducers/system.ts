import { SET_ACTIVE_APP } from '../constants/action-types';
import { createReducer } from '@reduxjs/toolkit';
const initialState: any = {
    activeApp: null
    , subnavOptions: null
    , hash: {}
    , fetchedConfig: {}
    , fetching: {}
    , lastCreatedJiraTicketId: null
};

const systemReducer = createReducer(initialState, {
    [SET_ACTIVE_APP]: (systemState, action) => {
        return (
            {
                ...systemState
                , activeApp: action.payload.name
            }
        )
    }
});

export default systemReducer;
