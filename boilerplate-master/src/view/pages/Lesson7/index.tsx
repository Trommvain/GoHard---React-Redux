// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary, PeopleApp } from '../../components';

// Styles
import * as S from './styles';

//Book
import { ROOT } from '../../routes/book';
import { L7TaskDescription } from '../../elements';

const Lesson7: FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <S.Container>
                <PeopleApp/>
                <button onClick = { () => navigate(ROOT) }>Back to main</button>
            </S.Container>
            <L7TaskDescription/>
        </>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson7 />
    </ErrorBoundary>
);
