// Core
import React, { FC } from 'react';
import { CommentsCounter, LikesCounter, Tags } from '../../../elements';

// Styles
import * as S from './styles';

// Types
import { source } from '../../../pages/Lesson1and2';

export const Article: FC<source> = (props: source) => {
    return (
        <S.Container>
            <header>
                <div className = 'poster'>
                    <img
                        alt = ''
                        src = { props.image }
                    />
                </div>
                <Tags tags = { props.tags }></Tags>
            </header>
            <article>
                <h1>{ props.title }</h1>
                <p>{ props.description }</p>
            </article>
            <footer>
                <span>{ props.published
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('.') }
                </span>
                <div className = 'controls'>
                    <CommentsCounter comments = { props.comments }></CommentsCounter>
                    <LikesCounter likes = { props.likes }></LikesCounter>
                </div>
            </footer>
        </S.Container>
    );
};
