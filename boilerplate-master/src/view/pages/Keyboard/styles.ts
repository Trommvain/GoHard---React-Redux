// Core
import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: wheat;
    display: flex;
    flex-direction: column;

    span {
    font-size: 28px;
    text-align: center;
    line-height: 46px;
    border: 3px solid black;
    border-radius: 6px;
    cursor: pointer;
    user-select: none;

        &:hover {
            background-color: lightgray;
            transition: 0.5s;
        }

        &:active {
            background-color: black;
        color: white;
        }
    }

    button {
        width: 150px;
        height: 60px;
        margin: 20px auto;
        font-size: 20px;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;

        &:hover {
        background-color: black;
        color: whitesmoke;
        transition: 0.5s;
        }
    }
`;
