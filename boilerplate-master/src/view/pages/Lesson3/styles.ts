// Core
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;

    ol {
        list-style: decimal;
        margin-left: 10px;
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
        text-decoration: underline;
    }

    p {
        display: block;
        height: 290px;
        font-size: 18px;
        margin-top: 10px;
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
