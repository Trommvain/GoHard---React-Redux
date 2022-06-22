// Core
import React from 'react';
import { NavLink } from 'react-router-dom';
import { usePeople } from '../../../bus/people';

// Styles
import * as S from './styles';

export const PeopleApp = () => {
    const getPeople = usePeople().people;
    let peopleList = null;

    if (getPeople?.results) {
        peopleList = getPeople!.results.map((item, index) => (
            <NavLink
                className = 'link'
                key = { index }
                to = { `/people/${index + 1}` }>{ item.name }
            </NavLink>
        ));
    } else {
        peopleList = <span>Loading data...</span>;
    }

    return (
        <S.Container>
            <h1>People List:</h1>
            {peopleList}
        </S.Container>
    );
};
