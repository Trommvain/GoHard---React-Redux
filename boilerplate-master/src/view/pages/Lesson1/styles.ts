// Core
import styled from 'styled-components';

export const Container = styled.div`
    width: 200px;
    height: 200px;
    padding: 50px;
    background-color: wheat;
    text-align: center;

    p {
        font-size: 20px;
        font-weight: bold;
    }

    button {
        width: 150px;
        height: 60px;
        margin: 20px auto;
        font-size: 20px;
        border-radius: 5px;

        &:hover {
        background-color: black;
        color: whitesmoke;
        transition: 0.5s;
    }
    }
`;
