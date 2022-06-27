import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    font-family: Arial, Helvetica, sans-serif;

    h1 {
        font-size: 24px;
        font-weight: bold;
        text-decoration: underline;
        margin-bottom: 10px;
    }

    .link {
        width: fit-content;
        font-size: 18px;
        text-decoration: none;
        margin: 5px 0;
        color: black;
        cursor: pointer;

        &:hover {
            color: blue;
        }
    }
`;
