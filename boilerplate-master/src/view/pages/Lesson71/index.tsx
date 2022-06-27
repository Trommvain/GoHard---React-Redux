// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary, FilmsApp } from '../../components';

// Styles
import * as S from './styles';

//Book
import { ROOT } from '../../routes/book';
import { L71TaskDescription } from '../../elements';

const Lesson71: FC = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <FilmsApp/>
            <button onClick = { () => navigate(ROOT) }>Back to main</button>
            <L71TaskDescription/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson71 />
    </ErrorBoundary>
);
