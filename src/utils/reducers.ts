import update from 'immutability-helper';

export const createStandardReducer = (initialState: any) => {
    return {
        PENDING(state: typeof initialState, action: any): typeof initialState {
            return (
                {
                    ...state
                    , fetching: true
                    , meta: action.meta
                    , error: null
                }
            );
        }
        , SUCCESS(state: typeof initialState, action: any): typeof initialState {
            const newState: typeof initialState = {
                ...state
                , fetching: false
                , error: null
                , meta: action.meta
            }

            for (const prop in state) {
                if (prop !== 'fetching' && prop !== 'error' && prop !== 'meta') {
                    newState[prop] = action.payload;
                }
            }
            return newState;
        }
        , FAILURE(state: typeof initialState, action: any): typeof initialState {
            const newState: typeof initialState = {
                ...state
                , fetching: false
                , error: action.payload
                , meta: action.meta
            }
            // If we fail, we want to set the custom prop to it's default value.
            // Otherwise a successful call followed by a failure could be interpreted as a two success.
            for (const prop in state) {
                if (prop !== 'fetching' && prop !== 'error' && prop !== 'meta') {
                    newState[prop] = initialState[prop];
                }
            }
            return newState;

        }
    }

}

// Fetching is a list instead of a bool so we can have many simultaneous calls
export const createMultiCallReducer = (initialState: any) => {
    return {
        PENDING(state: typeof initialState, action: any): typeof initialState {
            return (
                {
                    ...state
                    , fetching: update(state.fetching, {$push: [action.meta.id]})
                    , meta: action.meta
                    , error: null
                }
            );
        }
        , SUCCESS(state: typeof initialState, action: any): typeof initialState {
            const newState: typeof initialState = {
                ...state
                , fetching: update(state.fetching, { $splice: [[state.fetching.indexOf(action.meta.id), 1]]})
                , error: null
                , meta: action.meta
            }
            for (const prop in state) {
                if (prop !== 'fetching' && prop !== 'error' && prop !== 'meta') {
                    newState[prop] = action.payload;
                }
            }
            return newState;
        }
        , FAILURE(state: typeof initialState, action: any): typeof initialState {
            const newState: typeof initialState = {
                ...state
                , fetching: update(state.fetching, { $splice: [[state.fetching.indexOf(action.meta.id), 1]]})
                , error: action.payload
                , meta: action.meta
            }

            // If we fail, we want to set the custom prop to it's default value.
            // Otherwise a successful call followed by a failure could be interpreted as a two success.
            for (const prop in state) {
                if (prop !== 'fetching' && prop !== 'error' && prop !== 'meta') {
                    newState[prop] = initialState[prop];
                }
            }
            return newState;
        }
    }
}