// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

// Bus
import { usePeople } from '../../../bus/people';

// Styles
import * as S from './styles';

export const PeopleApp = () => {
    const { people, error } = usePeople();

    if (!people && !error) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>{error}</div>;
    }

    return (
        <S.Container>
            <h1>People List:</h1>
            {
                people?.map((man) => (
                    <NavLink
                        className = 'link'
                        key = { man._id }
                        to = { `/people/${man._id}` }>
                        {man.name}
                    </NavLink>
                ))
            }
        </S.Container>
    );
};
