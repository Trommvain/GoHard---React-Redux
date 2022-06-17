// Core
import React from 'react';
import styled from 'styled-components';

export const L5TaskDescriptionStyled = styled.div`
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

export const L5TaskDescription = () => {
    return (
        <L5TaskDescriptionStyled>
            <h1 className = 'main-title'>Домашнее задание N1</h1>
            <p className = 'common-text'>В этом задании нужно создать форму для регистрации студента.</p>
            <p className = 'common-text'>Используя библиотеку formik необходимо создать форму.</p>
            <p className = 'common-text'>&nbsp;</p>
            <h2 className = 'secondary-title'>Список полей</h2>
            <ul className = 'list'>
                <li className = 'list-item'>firstName</li>
                <li className = 'list-item'>surname</li>
                <li className = 'list-item'>age</li>
                <li className = 'list-item'>email</li>
                <li className = 'list-item'>sex</li>
                <li className = 'list-item'>speciality</li>
            </ul>
            <h2 className = 'secondary-title'>Обратите внимание</h2>
            <ul className = 'list'>
                <li className = 'list-item'>Валидацию для этого задания делать не нужно</li>
                <li className = 'list-item'>Поля firstName, surname по типу должны быть строкой</li>
                <li className = 'list-item'>Поле age по типу должно быть числом</li>
                <li className = 'list-item'>Поле email по типу должно быть email</li>
                <li className = 'list-item'>Поле sex должно быть набором из двух radibutton элементов: male или female</li>
                <li className = 'list-item'>Поле speciality должно быть dropdown списком элементов. Список вариантов:
                    designer, developer, writer
                </li>
                <li className = 'list-item'>Для всех полей нужно создать label элемент</li>
                <li className = 'list-item'>После отправки формы, нужно вывести в консоли объект с данными.</li>
            </ul>
            <h1 className = 'main-title'>Домашнее задание N2</h1>
            <p className = 'common-text'>В этом задании нужно улучшить форму для регистрации студента. Для этого нужно
                добавить валидацию.
            </p>
            <p className = 'common-text'>&nbsp;</p>
            <h2 className = 'secondary-title'>Правила для валидации</h2>
            <ul className = 'list'>
                <li className = 'list-item'>Все поля кроме age обязательные</li>
                <li className = 'list-item'>Все поля должны проверятся по типу и по содержимому</li>
                <li className = 'list-item'>Поле age должно быть больше 6 и меньше 60</li>
            </ul>
            <h2 className = 'secondary-title'>Обратите внимание</h2>
            <ul className = 'list'>
                <li className = 'list-item'>В этом задании нельзя использовать сторонние валидаторы. В том числе нельзя
                    использовать yup
                </li>
                <li className = 'list-item'>В случае ошибки нужно выводить крассную рамку вокрух инпута и label элементов, а
                    также текст ошибки.
                </li>
            </ul>
            <h1 className = 'main-title'>Домашнее задание N3</h1>
            <p className = 'common-text'>В этом задании нужно реализовать валидацию с помощью yup.</p>
            <p className = 'common-text'>Валидацию из предыдущего задания удалить.</p>
            <p className = 'cursive-text'>(код находится в текстовом файле noYupValidation.txt в папке с компонентом).</p>
            <p className = 'common-text'>&nbsp;</p>
        </L5TaskDescriptionStyled>
    );
};
