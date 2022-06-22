// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState: types.Student = {
    firstName:  '',
    surname:    '',
    age:        '',
    email:      '',
    sex:        'male',
    speciality: 'designer',
};

export const studentSlice = createSlice<types.StudentState, typeof reducers>({
    name: 'student',
    initialState,
    reducers,
});

export const sliceName = studentSlice.name;
export const studentActions = studentSlice.actions;
export default studentSlice.reducer;
