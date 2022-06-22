// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Student = {
    firstName: string,
    surname: string,
    age: number | string,
    email: string,
    sex: string,
    speciality: string
}
export type StudentState = Student | null

// Contracts
export type BaseContact<T = any> = CaseReducer<StudentState, PayloadAction<T>>
