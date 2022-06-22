// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';
import { StudentRegistrationApp } from '../../components/Lesson5App';

// Tools
import { ROOT } from '../../routes/book';

// Styles
import * as S from './styles';

const StudentRegistrationForm: FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <S.Container>
                <StudentRegistrationApp/>
                <button onClick = { () => navigate(ROOT) }>Back to main</button>
            </S.Container>
        </>
    );
};

export default () => (
    <ErrorBoundary>
        <StudentRegistrationForm/>
    </ErrorBoundary>
);
