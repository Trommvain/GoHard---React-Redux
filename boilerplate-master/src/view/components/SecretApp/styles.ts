import styled from 'styled-components';

export const Container = styled.div`
        display: flex;
        flex-direction: column;
        height: 200px;

        p {
                font-size: 32px;
                font-family: 'Courier New', Courier, monospace;
                font-weight: bold;
                margin: 40px 0;
                text-align: center;
        }

        section {
                display: inline-block;
                padding: 20px 0;
        }

        .nav-link {
                font-size: 18px;
                font-family: 'Courier New', Courier, monospace;
                color: black;
                margin: 20px 20px;
                padding: 10px 10px;
                border: 1px solid black;
                border-radius: 5px;
                text-decoration: none;
        }

        .active {
                color: white;
                background-color: darkblue;
        }
`;
