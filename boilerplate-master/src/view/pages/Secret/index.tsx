// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary, SecretApp } from '../../components';
import { L4TaskDescription } from '../../elements';

// Tools
import { ROOT } from '../../routes/book';

// Styles
import * as S from './styles';

const Secret: FC = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <SecretApp/>
            <button onClick = { () => navigate(ROOT) }>Back to main</button>
            <L4TaskDescription/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Secret/>
    </ErrorBoundary>
);
