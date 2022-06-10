// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Types
import { RowTypes } from '../../components';

// Styles
const FirstTwoRowsContainer = styled.div`
    display: grid;
    grid: repeat(2, 50px) / repeat(10, 1fr);
    align-content: center;
`;

export const FirstTwoRows: FC<{firstTwoRows: RowTypes}> = ({ firstTwoRows }) => {
    const spans = firstTwoRows.map((item, index) => (
        <span key = { index }>{ item }</span>
    ));

    return (
        <FirstTwoRowsContainer>
            { spans }
        </FirstTwoRowsContainer>
    );
};
