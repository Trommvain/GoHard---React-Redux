// Core
import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 100%;
    background-image: url('data:image/jpeg;base64,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');
    background-repeat: no-repeat;
    background-size: cover;
    

    header {
        height: 150px;
        font-size: 48px;
        text-align: center;
        margin-top: 5rem;
    }

    footer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;

        button {
        display: block;
        width: 180px;
        height: 70px;
        font-size: 20px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;

            &:hover {
            background-color: black;
            color: whitesmoke;
            transition: 0.5s;
            }
        }
    }
`;
