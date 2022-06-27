// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Types
import { tags } from '../../pages/Lesson1and2';

// Styles
const TagsStyle = styled.div`
    background-color: orange;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 6px 15px;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
`;

export const Tags: FC<tags> = (props: tags) => {
    return (
        <div className = 'tags'>
            <TagsStyle>
                { props.tags[ 0 ] }
            </TagsStyle>
            <TagsStyle>
                { props.tags[ 1 ] }
            </TagsStyle>
        </ div>
    );
};
