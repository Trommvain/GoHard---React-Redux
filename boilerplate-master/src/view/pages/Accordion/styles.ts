// Core
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Verdana;
    width: 800px;

    h1 {
        font-size: 24px;
        font-weight: bold;
        text-transform: capitalize;
        margin-bottom: 30px;
        margin-top: 20px;
        text-align: center;
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
