// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Types
import { comments } from '../../pages/Lesson1and2';

// Styles
const CommentsCounterStyle = styled.span`
    font-family: Helvetica;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);

    &::before {
        content: '👋';
        display: inline;
        font-size: 11px;
        opacity: 0.6;
    }
`;

export const CommentsCounter: FC<comments> = (props: comments) => {
    return (
        <CommentsCounterStyle>
            { props.comments }
        </CommentsCounterStyle>
    );
};
