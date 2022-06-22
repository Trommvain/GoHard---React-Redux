// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Films = {
    count: number,
    next: null,
    previous: null,
    results: Array<FilmsTypes>
}

export type FilmsTypes = {
    title: string,
    episode_id: string,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string
}
export type FilmsState = Films | null

// Contracts
export type BaseContact<T = any> = CaseReducer<FilmsState, PayloadAction<T>>
