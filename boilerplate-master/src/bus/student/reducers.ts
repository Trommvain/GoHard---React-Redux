// Types
import * as types from './types';

export const setStudent: types.BaseContact<types.Student> = (__, action) => {
    return action.payload;
};
