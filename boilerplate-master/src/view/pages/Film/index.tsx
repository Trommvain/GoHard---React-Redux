// Core
import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Tools
import { useSelector } from '../../../tools/hooks';

// Components
import { ErrorBoundary } from '../../components';

// Routes
import { LESSON71 } from '../../routes/book';

// Styles
import * as S from './styles';


const Film: FC = () => {
    const navigate = useNavigate();
    const id = Number(useParams().id);
    const film = useSelector((state) => state.films);

    return (
        <S.Container>
            <h1>Film Information:</h1>
            <p><i>Title: </i>{film?.results[ id - 1 ].title}</p>
            <p><i>Episode: </i>{film?.results[ id - 1 ].episode_id}</p>
            <p className = 'crawl'>Opening crawl: </p>
            <p>&quot;{film?.results[ id - 1 ].opening_crawl}&quot;</p>
            <p><i>Director: </i>{film?.results[ id - 1 ].director}</p>
            <p><i>Producer: </i>{film?.results[ id - 1 ].producer}</p>
            <p><i>Release date: </i>{film?.results[ id - 1 ].release_date}</p>
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
