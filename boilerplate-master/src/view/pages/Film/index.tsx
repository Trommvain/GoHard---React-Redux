// Core
import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Bus
import { useFilms } from '../../../bus/films';

// Components
import { ErrorBoundary } from '../../components';

// Routes
import { LESSON71 } from '../../routes/book';

// Styles
import * as S from './styles';


const Film: FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const { films } = useFilms();

    const film = films?.find(({ _id }) => _id === id);

    if (!film) {
        return <div>Loading...</div>;
    }

    return (
        <S.Container>
            <h1>Film Information:</h1>
            <p><i>Title: </i>{film.title}</p>
            <p><i>Episode: </i>{film.episode_id}</p>
            <p className = 'crawl'>Opening crawl: </p>
            <p>&quot;{film.opening_crawl}&quot;</p>
            <p><i>Director: </i>{film.director}</p>
            <p><i>Producer: </i>{film.producer}</p>
            <p><i>Release date: </i>{film.release_date}</p>
            <button
                className = 'back-to-list'
                onClick = { () => navigate(LESSON71) }>Back to List
            </button>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Film />
    </ErrorBoundary>
);
