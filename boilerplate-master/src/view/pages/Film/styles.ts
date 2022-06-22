// Core
import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px 20px;

    h1 {
        display: block;
        width: fit-content;
        font-size: 24px;
        font-weight: bold;
        text-decoration: underline;
        margin: 10px 0;
    }

    p {
        display: block;
        width: fit-content;
        font-size: 18px;
        margin: 10px 0;
    }

    i, .crawl {
        color: darkblue;
    }

    .back-to-list {
        width: 150px;
        height: 60px;
        margin: 30px 0;
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
