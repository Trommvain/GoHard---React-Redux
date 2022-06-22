// Types
import * as types from './types';

export const setPeople: types.BaseContact<types.People> = (__, action) => {
    return action.payload;
};
