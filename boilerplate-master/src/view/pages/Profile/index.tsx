// Core
import React, { FC } from 'react';
import { useStudent } from '../../../bus/student';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
import { StudentState } from '../../../bus/student/types';

//Book
import { LESSON6 } from '../../routes/book';


const Profile: FC = () => {
    const studentProfile: StudentState = useStudent().student;
    const navigate = useNavigate();

    return (
        <S.Container>
            <div>
                <h1>Student Profile:</h1>
                <p><i>Name: </i>{studentProfile?.firstName}</p>
                <p><i>Surname: </i>{studentProfile?.surname}</p>
                <p><i>Age: </i>{studentProfile?.age}</p>
                <p><i>Email: </i>{studentProfile?.email}</p>
                <p><i>Sex: </i>{studentProfile?.sex}</p>
                <p><i>Speciality: </i>{studentProfile?.speciality}</p>
            </div>
            <button
                className = 'back-to-registration'
                onClick = { () => navigate(LESSON6) }>Back to Registration
            </button>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Profile />
    </ErrorBoundary>
);
