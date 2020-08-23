import { SAVE_CATEGORIES } from "../actions/types";

export default function categoriesReducer(state, action){
    switch (action.type) {
        case SAVE_CATEGORIES: {
            return {
                ...state,
                categories: action.categories
            };
        }
        default :
            return state;
    }
}