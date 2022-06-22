import styled from 'styled-components';

export const Container = styled.div`
        display: flex;
        flex-direction: column;

        .form-item {
            display: block;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
            color: black;
            margin: 10px 0;
        }

        fieldset {
            border: 1px solid black;
            border-radius: 5px;
            padding: 10px 20px;
            margin: 20px 0;
        }

        legend {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 16px;
        }

        div {
            color: red;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 12px;
        }

        .error {
            border: 1px solid red;
            border-radius: 3px;
            margin: 5px 0;
            padding: 1px 1px;
        }

        .submit-button {
            display: block;
            width: 100px;
            height: 40px;
            font-size: 16px;
            font-weight: bold;
            color: black;
            border-radius: 4px;
            cursor: pointer;
            user-select: none;
            margin-top: 30px;

                &:hover {
                    color: black;
                    background-color: lightgreen;
                    transition: none;
                    transform: scale(1.1);
                }

                &:active {
                    background-color: darkgreen;
                }
        }

        .profile-button {
            display: block;
            width: 100px;
            height: 40px;
            line-height: 40px;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
            font-weight: bold;
            color: black;
            text-align: center;
            border: 2px solid black;
            border-radius: 4px;
            cursor: pointer;
            user-select: none;
            margin: 0 auto;
            text-decoration: none;

                &:hover {
                    color: black;
                    background-color: lightgreen;
                    transition: none;
                    transform: scale(1.1);
                }

                &:active {
                    background-color: darkgreen;
                }
        }

        .profile-disabled {
            display: none;
        }
`;
