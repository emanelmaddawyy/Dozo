import { SAVE_LANG } from "../actions/types";

export default function configsReducer(state, action) {
    switch (action.type) {
        case SAVE_LANG: {
            return {
                ...state,
                lang: action.lang
            };
        }
        default:
            return state || {};
    }
}