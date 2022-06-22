// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';
import { filmsActions } from './slice';

//Types
import { Films } from './types';

export const useFilms = () => {
    const dispatch = useDispatch();
    const films = useSelector((state) => state.films);

    const fetchFilms = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/films', {
                method: 'GET',
            });

            if (response.status !== 200) {
                throw new Error('people fetch failed');
            }

            const data: Films = await response.json();

            dispatch(filmsActions.setFilms(data));
        } catch (error) { }  // eslint-disable-line no-empty
    };

    useEffect(() => {
        fetchFilms();
    }, []);

    return {
        films,
        setFilms: (films: Films) => dispatch(filmsActions.setFilms(films)),
    };
};
