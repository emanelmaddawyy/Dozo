import data from './data.json'
export function getCategories(){
    return Promise.resolve(data.categories)
}