// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
import { DbType } from '../../../pages/Lesson3';

export const Item: FC<DbType> = (props: DbType) => {
    return (
        <S.Container>
            <>
                <span><b>Name:</b> { props.name }&nbsp;&nbsp;<b>|</b></span>
                <span><b>Username:</b> { props.username }&nbsp;&nbsp;<b>|</b></span>
                <span><b>Email:</b> { props.email }</span>
            </>
        </S.Container>
    );
};
