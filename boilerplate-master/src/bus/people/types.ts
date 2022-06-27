// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Man = {
    birth_year: string,
    created: string,
    edited: string,
    eye_color: string,
    films: Array<string>,
    gender: string,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    name: string,
    skin_color: string,
    species: Array<string>,
    starships: Array<string>,
    url: string,
    vehicles: Array<string>
}

export type ExtendedMan = {
    _id: string
} & Man

export type People = Array<ExtendedMan>

export type PeopleState = {
    people: People | null
    error: null | string
}

// Contracts
export type BaseContract<T = any> = CaseReducer<PeopleState, PayloadAction<T>>
