// Core
import React from 'react';
import styled from 'styled-components';

export const L4TaskDescriptionStyled = styled.div`
    padding-left: 20px;

    .main-title {
        font-size: 22px;
        color: black;
        font-weight: bold;
        line-height: 2;
    }

    .secondary-title {
        font-size: 18px;
        color: black;
        font-weight: bold;
    }

    .common-text {
        font-size: 18px;
        color: gray;
        line-height: 1;
    }

    .list {
        margin-left: 20px;
        list-style-type: circle;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .list-item {
        font-size: 18px;
        color: gray;
        line-height: 1;
    }

    .cursive-text {
        font-size: 18px;
        color: gray;
        font-style: italic;
        line-height: 1;
    }
`;

export const L4TaskDescription = () => {
    return (
        <L4TaskDescriptionStyled>
            <h1 className = 'main-title'>Домашнее задание N1</h1>
            <p className = 'common-text'>В этом задании необходимо создать компонет Secret внутри директории components с
                содержимым &lt;p&gt;My Secret: &#91; value &#93;&lt;/p&gt;<br/>
                Поле value компонент должен получать из текущего роута как результат работы
                динамического поля.<br/>
                Затем необходимо создать компонент Secret внутри директории pages , данный
                компонент должен подключать<br/> и рендерить компонент Secret из директории
                components.
                После этого необходимо добавить в файл book.js<br/> поле secret которое будет отвечать за
                роут /secret/:value
                Затем необходимо в файле navigation/index.js добавить<br/> отображение компонента
                pages/secret для роута book.secret.
            </p>
            <p className = 'common-text'>&nbsp;</p>
            <h2 className = 'secondary-title'>Обратите внимание</h2>
            <ul className = 'list'>
                <li className = 'list-item'>Для чтения динамических параметров из текущего роута необходимо использовать
                    внутри компонента<br/> components/secret специальный хук useParams() из пакета
                    react-router-dom
                </li>
            </ul>
        </L4TaskDescriptionStyled>
    );
};
