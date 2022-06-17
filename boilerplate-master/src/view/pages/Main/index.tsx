// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

// Book
import { ACCORDION, KEYBOARD, LESSON1AND2, LESSON3, LESSON5, SECRET } from '../../routes/book';

const Main: FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <header>
                <p>WELCOME TO GORBONOS SERGEY TASKS!</p>
            </header>
            <footer>
                <button onClick = { () => navigate(KEYBOARD) }>Grid Keyboard</button>
                <button onClick = { () => navigate(LESSON1AND2) }>Lesson 1</button>
                <button onClick = { () => navigate(ACCORDION) }>Lesson 2</button>
                <button onClick = { () => navigate(LESSON3) }>Lesson 3</button>
                <button onClick = { () => navigate(SECRET) }>Lesson 4</button>
                <button onClick = { () => navigate(LESSON5) }>Lesson 5</button>
            </footer>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
