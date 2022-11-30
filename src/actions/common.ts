import { SAVE_SCROLL_POSITION } from '../constants/action-types';

export const saveScrollPosition = ({ app, scrollPositionObj }: any) => ({
    type: SAVE_SCROLL_POSITION
    , payload: { scrollPositionObj }
    , meta: {
        app: app
    }
});