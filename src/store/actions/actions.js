import  {SAVE_CATEGORIES} from './types';

export function saveCategories(categories){
    return {
        type: SAVE_CATEGORIES,
        categories
    };
}