import { SET_ACTIVE_APP, SHOW_ERROR_TOAST } from '../constants/action-types';

export const setActiveApp = (app: string | null = null) => ({
    type: SET_ACTIVE_APP
    , payload: {
        name: app
    }
});

export const toggleErrorToast = ({
    index = 0
    , show = false
    , message = ''
    , title = ''
}) => ({
    type: SHOW_ERROR_TOAST
    , payload: {
        error: {
            show
            , message
            , title
        }, index
    }
});
