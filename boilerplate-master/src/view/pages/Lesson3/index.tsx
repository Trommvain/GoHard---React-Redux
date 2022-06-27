/* eslint-disable no-nested-ternary */
// Core
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';
import { Item } from '../../components';
import { L3TaskDescription } from '../../elements';

// Types
export type DbType = {
    name: string;
    username: string;
    email: string;
    children?: React.ReactNode[];
}

// Hooks
import { useApiLoader } from './useApiLoader';

// Tools
import { ROOT } from '../../routes/book';

// Styles
import * as S from './styles';

const Persons = () => {
    const navigate = useNavigate();

    const { db, isFetching, isServerError, isClientError } = useApiLoader();
    const items = db.map((item: DbType, index: number) => (
        <li key = { index }>
            <Item
                key = { index }
                { ...item }>
            </Item>
        </li>

    ));

    console.log(`isFetching: ${isFetching}`);
    console.log(`isServerError: ${isServerError}`);
    console.log(`isClientError: ${isClientError}`);

    return (
        <S.Container>
            <h1>Person's List:</h1>
            { isFetching
                ? <p>Loading data...</p>
                : isClientError
                    ? <p>Incorrect url request</p>
                    : isServerError
                        ? <p>Server does not response</p>
                        : <ol>{ items }</ol>
            }
            <button onClick = { () => navigate(ROOT) }>Back to main</button>
            <L3TaskDescription/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Persons/>
    </ErrorBoundary>
);
