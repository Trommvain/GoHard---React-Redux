// Core
import { v4 } from 'uuid';

// Types
import * as types from './types';

export const setFilms: types.BaseContract<Array<types.Film>> = (state, action) => {
    return {
        ...state,
        films: action.payload.map((film) => ({
            ...film,
            _id: v4(),
        })),
    };
};

export const handleFilmsError: types.BaseContract<string> = (state, action) => {
    return {
        ...state,
        error: action.payload,
    };
};
