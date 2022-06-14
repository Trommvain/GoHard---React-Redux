// Core
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary, News, TaskDescription } from '../../components';

// Types
export type source = {
    title: string,
    description: string,
    published: string,
    likes: number,
    comments: number,
    image: string,
    tags: string[],
    children?: React.ReactNode,
}

export type tags = {
    tags: string[]
}

export type comments = {
    comments: number
}

export type likes = {
    likes: number
}

// Tools
import { ROOT } from '../../routes/book';

// Styles
import * as S from './styles';

const Lesson1and2 = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <News />
            <button onClick = { () => navigate(ROOT) }>Back to main</button>
            <TaskDescription />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson1and2 />
    </ErrorBoundary>
);
