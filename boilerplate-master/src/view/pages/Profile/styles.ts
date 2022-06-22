// Core
import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;

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
        text-align: end;
    }

    i {
        color: darkblue;
    }

    .back-to-registration {
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
