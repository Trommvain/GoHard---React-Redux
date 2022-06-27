// Core
import React from 'react';
import styled from 'styled-components';

export const L3TaskDescriptionStyled = styled.div`
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
        height: auto;
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

export const L3TaskDescription = () => {
    return (
        <L3TaskDescriptionStyled>
            <h1 className = 'main-title'>Домашнее задание N1</h1>
            <p className = 'common-text'>В этом задании нужно улучшить приложение созданное преподавателем на уроке. Для
                этого нужно добавить лоадер который будет отображаться во время загрузки пользователей из
                API.
            </p>
            <p className = 'common-text'> Лоадером будет фраза Загрузка данных.</p>
            <p className = 'common-text'>&nbsp;</p>
            <h2 className = 'secondary-title'>Обратите внимание</h2>
            <ul className = 'list'>
                <li className = 'list-item'>Лоадер должен отображатся только во время запроса</li>
                <li className = 'list-item'>Необходимо чтобы хук useApiLoader возвращал переменную isFetching со
                    значением true если идет загрузка и false если загрузка не идет
                </li>
                <li className = 'list-item'>Необходимо внутри компонента добавить логику отображения лоадера. Лоадер будет
                    ориентироватся на переменную isFetching которую возвращает хук useApiLoader
                </li>
            </ul>
            <h1 className = 'main-title'>Домашнее задание N2</h1>
            <p className = 'common-text'>В этом задании нужно улучшить приложение созданное преподавателем на уроке. Для
                этого нужно добавить обработку серверных ошибок.
                Для реализации этого задания необходимо чтобы хук useApiLoader возвращал булевую
                переменную isServerError . В том случае если isServerError возвращает false ошибки
                нет, а если true то это значит что сервер вернул ошибку.
                В компоненте News необходимо вывести на экране текст Сервер не отвечает.
            </p>
            <p className = 'common-text'>&nbsp;</p>
            <h2 className = 'secondary-title'>Обратите внимание</h2>
            <ul className = 'list'>
                <li className = 'list-item'>Рендерить список пользователей необходимо только в том случае если переменная
                    isServerError возвращает false
                </li>
            </ul>
            <h1 className = 'main-title'>Домашнее задание N3</h1>
            <p className = 'common-text'>В этом задании нужно улучшить приложение созданное преподавателем на уроке. Для
                этого нужно добавить обработку клиентских ошибок.
                Для реализации этого задания необходимо чтобы хук useApiLoader возвращал булевую
                переменную isClientError. В том случае если isClientError возвращает false ошибки
                нет, а если true то это значит что сервер вернул ошибку и причина этой ошибки в запросе
                клиента.
                В компоненте Persons необходимо вывести на экране текст Неправильный запрос.
            </p>
            <p className = 'common-text'>&nbsp;</p>
            <h2 className = 'secondary-title'>Обратите внимание</h2>
            <ul className = 'list'>
                <li className = 'list-item'>Рендерить список пользователей необходимо только в том случае если переменная
                    isClientError возвращает false
                </li>
            </ul>
        </L3TaskDescriptionStyled>
    );
};
