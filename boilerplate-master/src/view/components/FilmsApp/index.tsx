// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

// Bus
import { useFilms } from '../../../bus/films';

// Styles
import * as S from './styles';

export const FilmsApp = () => {
    const { films, error } = useFilms();

    if (!films && !error) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>{error}</div>;
    }

    return (
        <S.Container>
            <h1>Films List:</h1>
            {
                films?.map((film) => (
                    <NavLink
                        className = 'link'
                        key = { film._id }
                        to = { `/films/${film._id}` }>
                        {film.title}
                    </NavLink>
                ))
            }
        </S.Container>
    );
};
