// Core
import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Bus
import { usePeople } from '../../../bus/people';

// Components
import { ErrorBoundary } from '../../components';

// Routes
import { LESSON7 } from '../../routes/book';

// Styles
import * as S from './styles';

const Person: FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const { people } = usePeople();

    const man = people?.find(({ _id }) => _id === id);

    if (!man) {
        return <div>Loading...</div>;
    }

    return (
        <S.Container>
            <h1>Personal Information:</h1>
            <p><i>Name: </i>{man.name}</p>
            <p><i>Height: </i>{man.height}</p>
            <p><i>Mass: </i>{man.mass}</p>
            <p><i>Hair color: </i>{man.hair_color}</p>
            <p><i>Skin color: </i>{man.skin_color}</p>
            <p><i>Eye color: </i>{man.eye_color}</p>
            <p><i>Birth year: </i>{man.birth_year}</p>
            <p><i>Gender: </i>{man.gender}</p>
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
