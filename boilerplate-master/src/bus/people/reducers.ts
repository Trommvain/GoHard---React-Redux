// Core
import { v4 } from 'uuid';

// Types
import * as types from './types';

export const setPeople: types.BaseContract<Array<types.Man>> = (state, action) => {
    return {
        ...state,
        people: action.payload.map((man) => ({
            ...man,
            _id: v4(),
        })),
    };
};

export const handlePeopleError: types.BaseContract<string> = (state, action) => {
    return {
        ...state,
        error: action.payload,
    };
};
