// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';

// Types
import { likes } from '../../pages/Lesson1and2';

// Styles
const LikesCounterStyle = styled.span`
    font-family: Helvetica;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);

    &::before {
    content: '♥';
    display: inline;
    font-size: 11px;
    opacity: 0.6;
    }
`;

let isLiked = false;

export const LikesCounter: FC<likes> = (props: likes) => {
    const [ value, setValue ] = useState(props.likes);

    const likeChanger = () => {
        if (!isLiked) {
            setValue(value + 1);
            isLiked = true;
        } else {
            setValue(value - 1);
            isLiked = false;
        }
    };

    return (
        <LikesCounterStyle onClick = { likeChanger }>
            { value }
        </LikesCounterStyle>
    );
};
