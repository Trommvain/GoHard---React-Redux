// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';
import { StudentRegistrationApp } from '../../components/Lesson5App';
import { L5TaskDescription } from '../../elements';

// Types
export type FormValuesTypes = {
    firstName: string,
    surname: string,
    age: number | string,
    email: string,
    sex: string,
    speciality: string
}

export type ErrorsTypes = {
    firstName?: string,
    surname?: string,
    age?: number | string,
    email?: string,
    sex?: string,
    speciality?: string
}

// Tools
import { ROOT } from '../../routes/book';

// Styles
import * as S from './styles';

const StudentRegistration: FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <S.Container>
                <StudentRegistrationApp/>
                <button onClick = { () => navigate(ROOT) }>Back to main</button>
            </S.Container>
            <L5TaskDescription/>
        </>
    );
};

export default () => (
    <ErrorBoundary>
        <StudentRegistration/>
    </ErrorBoundary>
);
