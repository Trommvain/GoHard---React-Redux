// Core
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFilms } from '../../../bus/films';

// Styles
import * as S from './styles';

export const FilmsApp = () => {
    const getFilms = useFilms().films;
    let filmsList = null;

    if (getFilms?.results) {
        filmsList = getFilms!.results.map((item, index) => (
            <NavLink
                className = 'link'
                key = { index }
                to = { `/films/${index + 1}` }>{ item.title }
            </NavLink>
        ));
    } else {
        filmsList = <span>Loading data...</span>;
    }

    return (
        <S.Container>
            <h1>Films List:</h1>
            {filmsList}
        </S.Container>
    );
};
