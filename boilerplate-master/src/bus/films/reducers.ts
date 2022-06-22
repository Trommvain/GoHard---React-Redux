// Types
import * as types from './types';

export const setFilms: types.BaseContact<types.Films> = (__, action) => {
    return action.payload;
};
