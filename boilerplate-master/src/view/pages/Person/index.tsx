// Core
import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Tools
import { useSelector } from '../../../tools/hooks';

// Components
import { ErrorBoundary } from '../../components';

// Routes
import { LESSON7 } from '../../routes/book';

// Styles
import * as S from './styles';


const Person: FC = () => {
    const navigate = useNavigate();
    const id = Number(useParams().id);
    const person = useSelector((state) => state.people);

    return (
        <S.Container>
            <h1>Personal Information:</h1>
            <p><i>Name: </i>{person?.results[ id - 1 ].name}</p>
            <p><i>Height: </i>{person?.results[ id - 1 ].height}</p>
            <p><i>Mass: </i>{person?.results[ id - 1 ].mass}</p>
            <p><i>Hair color: </i>{person?.results[ id - 1 ].hair_color}</p>
            <p><i>Skin color: </i>{person?.results[ id - 1 ].skin_color}</p>
            <p><i>Eye color: </i>{person?.results[ id - 1 ].eye_color}</p>
            <p><i>Birth year: </i>{person?.results[ id - 1 ].birth_year}</p>
            <p><i>Gender: </i>{person?.results[ id - 1 ].gender}</p>
            <button
                className = 'back-to-list'
                onClick = { () => navigate(LESSON7) }>Back to List
            </button>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Person />
    </ErrorBoundary>
);
