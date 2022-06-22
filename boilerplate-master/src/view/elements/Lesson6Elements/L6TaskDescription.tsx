// Core
import React from 'react';
import styled from 'styled-components';

export const L6TaskDescriptionStyled = styled.div`
    padding-left: 20px;

    .main-title {
        font-size: 22px;
        color: black;
        font-weight: bold;
        line-height: 2;
    }

    .secondary-title {
        font-size: 18px;
        color: black;
        font-weight: bold;
    }

    .common-text {
        font-size: 18px;
        color: gray;
        line-height: 1;
    }

    .list {
        margin-left: 20px;
        list-style-type: circle;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .list-item {
        font-size: 18px;
        color: gray;
        line-height: 1;
    }

    .cursive-text {
        font-size: 18px;
        color: gray;
        font-style: italic;
        line-height: 1;
    }
`;

export const L6TaskDescription = () => {
    return (
        <L6TaskDescriptionStyled>
            <h1 className = 'main-title'>Домашнее задание N1</h1>
            <p className = 'common-text'>В этом задании нужно сохранить данные с формы в store и показать их на странице Profile.</p>
        </L6TaskDescriptionStyled>
    );
};
