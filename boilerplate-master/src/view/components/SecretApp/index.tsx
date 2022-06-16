// Core
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//Styles
import * as S from './styles';

export const SecretApp: FC = () => {
    const value = useParams();

    return (
        <>
            <S.Container>
                <p>{`My Secret ID: ${ value.id ? value.id : '' }`}</p>
                <section>
                    <NavLink
                        className = { ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'  }
                        to = '/secret/123'>Set ID = 123
                    </NavLink>
                    <NavLink
                        className = { ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'  }
                        to = '/secret/456'>Set ID = 456
                    </NavLink>
                </section>
            </S.Container>
        </>
    );
};
