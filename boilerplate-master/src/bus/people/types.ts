// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type People = {
    count: number,
    next: string,
    previous: null,
    results: Array<PeopleTypes>
}

export type PeopleTypes = {
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

export type PeopleState = People | null

// Contracts
export type BaseContact<T = any> = CaseReducer<PeopleState, PayloadAction<T>>
