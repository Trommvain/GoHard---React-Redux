// Core
import React from 'react';
import styled from 'styled-components';

export const TaskDescriptionStyled = styled.div`
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

    pre {
        margin: 1rem 1rem;
    }
`;

export const TaskDescription = () => {
    return (
        <TaskDescriptionStyled>
            <h1 className = 'main-title'>Домашнее задание N3</h1>
            <p className = 'common-text'>В этом задании нужно создать компонент-акордеон.
                Даный компонент имеет параметр source в который он принимают массив с такой
                структурой:
            </p>
            <pre>
                &#91; <br/>
                &nbsp;&#123; <br/>
                &nbsp;&nbsp;question: 'What is your name?',<br/>
                &nbsp;&nbsp;answer: 'My name is Andrii'<br/>
                &nbsp;&#125;<br/>
                &#93;<br/>
            </pre>
            <p className = 'common-text'>Используя данные из этого параметра компонент строит список элементов.</p>
            <p className = 'common-text'>&nbsp;</p>
            <h2 className = 'secondary-title'>Обратите внимание</h2>
            <ul className = 'list'>
                <li className = 'list-item'>Каждый элемент списка имеет два состояние открыт или закрыт</li>
                <li className = 'list-item'>В списке может быть открыт только один элемент <i className = 'cursive-text'>(это условие ты изменил: теперь все можно открывать и закрывать).</i></li>
                <li className = 'list-item'>Внутри файла со стилями уже есть класс который делает элемент открытым, он
                    называется selected , поэтому осталось только с помощью реакта добавлять или
                    убирать этот класс для элемента с классом accordion-item .
                </li>
            </ul>
            <h1 className = 'main-title'>Домашнее задание N4</h1>
            <p className = 'common-text'>В этом задании нужно улучшить компонент-акордеон из предыдущего урока, для этого
                необходимо компоненту-акордеону добавить возможность иметь параметр title который
                будет отображатся как заголовок аккордеона.
                Если параметр title не передан необходимо отображать текст Accordion
            </p>
            <p className = 'common-text'>&nbsp;</p>
            <h2 className = 'secondary-title'>Обратите внимание</h2>
            <ul className = 'list'>
                <li className = 'list-item'>В этом задании необходимо обязательно использовать технологию Default Props</li>
            </ul>
        </TaskDescriptionStyled>
    );
};
