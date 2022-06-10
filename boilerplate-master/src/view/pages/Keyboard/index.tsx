// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, KeyboardApp } from '../../components';

// Tools
import { ROOT } from '../../routes/book';

// Styles
import * as S from './styles';

const Keyboard: FC = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <KeyboardApp />
            <button onClick = { () => navigate(ROOT) }>Back to main</button>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Keyboard />
    </ErrorBoundary>
);
