// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State

export type Film = {
    title: string,
    episode_id: string,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string
}

export type ExtendedFilm = {
    _id: string
} & Film

export type Films = Array<ExtendedFilm>

export type FilmsState = {
    films: Films | null
    error: null | string
}

// Contracts
export type BaseContract<T = any> = CaseReducer<FilmsState, PayloadAction<T>>
