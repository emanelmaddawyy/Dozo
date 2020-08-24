import { SAVE_LANG } from './types';

export function saveLang(lang) {
    return {
        type: SAVE_LANG,
        lang
    };
}