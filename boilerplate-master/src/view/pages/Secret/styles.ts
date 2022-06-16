// Core
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
