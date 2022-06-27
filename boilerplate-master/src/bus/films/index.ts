// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';
import { filmsActions } from './slice';

//Types
import { Film } from './types';

export const useFilms = () => {
    const dispatch = useDispatch();
    const { error, films } = useSelector((state) => state.films);

    const fetchFilms = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/films', {
                method: 'GET',
            });

            if (response.status !== 200) {
                throw new Error(`Error occured: ${response.status}`);
            }

            const data: { results: Array<Film> } = await response.json();

            dispatch(filmsActions.setFilms(data.results));
        } catch (errors: string | any) {
            dispatch(filmsActions.handleFilmsError(errors.message));
        }
    };

    useEffect(() => {
        if (!films) {
            fetchFilms();
        }
    }, []);

    return {
        films,
        error,
    };
};
