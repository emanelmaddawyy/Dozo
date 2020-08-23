import  {SAVE_CATEGORIES} from './types';

export function saveCategories(categories){
    console.log('cccccssss: ', categories)
    return {
        type: SAVE_CATEGORIES,
        categories
    };
}