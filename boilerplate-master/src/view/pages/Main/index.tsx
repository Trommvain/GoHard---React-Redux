// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

// Book
import { KEYBOARD /*LESSON1*/ } from '../../routes/book';

const Main: FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <header>
                <p>WELCOME TO GORBONOS SERGEY TASKS!</p>
            </header>
            <footer>
                <button onClick = { () => navigate(KEYBOARD) }>Grid Keyboard</button>
                {/* <button onClick = { () => navigate(LESSON1) }>Lesson 1 Task 1 Lesson 2 Tasks 1, 2</button>
                <button>Lesson 2 Tasks 3, 4</button> */}
            </footer>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
