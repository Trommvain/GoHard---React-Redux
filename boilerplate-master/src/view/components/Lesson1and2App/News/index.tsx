// Core
import React, { FC } from 'react';
import { Article } from '../Article';
import * as data from '../../../pages/Lesson1and2/source.json';

// Styles
import * as S from './styles';

// Types
import { source } from '../../../pages/Lesson1and2';

export const News: FC = () => {
    const source: source[] = Array.from(data);
    const articles = source.map((item: source, index: number) => (
        <Article
            key = { index }
            { ...item }>
        </Article>
    ));

    return (
        <S.Container>
            { articles }
        </S.Container>
    );
};
