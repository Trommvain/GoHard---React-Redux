// Core
import React from 'react';

// Style
import * as S from './styles';

export const TaskDescription = () => {
    return (
        <S.Container>
            <h1 className = 'main-title'>Урок 1. Домашнее задание N1</h1>
            <p className = 'common-text'>В этом задании нужно создать несколько компонентов, используя знания полученные на уроке.</p>
            <p className = 'common-text'>&nbsp;</p>
            <h2 className = 'secondary-title'>Список компонентов</h2>
            <ul className = 'list'>
                <li className = 'list-item'>News</li>
                <li className = 'list-item'>Article</li>
            </ul>
            <span className = 'cursive-text'>Данные компоненты являются основными и должны находится в директории components.</span>
            <p className = 'common-text'>&nbsp;</p>
            <h2 className = 'secondary-title'>Список общих компонентов</h2>
            <ul className = 'list'>
                <li className = 'list-item'>Tags</li>
                <li className = 'list-item'>CommentsCounter</li>
                <li className = 'list-item'>LikesCounter</li>
            </ul>
            <span className = 'cursive-text'>Данные компоненты должны находится в директории elements.</span>
            <h1 className = 'main-title'>Урок 2. Домашнее задание N1</h1>
            <p className = 'common-text'>В этом задании нужно улучшить компоненты с предыдущего урока. Для этого нужно
                добавить к компоненту News параметр source в который нужно передавать данные для
                рендеринга. Данные находятся в файле source.json
            </p>
            <p className = 'common-text'>Для компонента Article нужно добавить следующие параметры:</p>
            <ul className = 'list'>
                <li className = 'list-item'>title</li>
                <li className = 'list-item'>description</li>
                <li className = 'list-item'>published</li>
                <li className = 'list-item'>likes</li>
                <li className = 'list-item'>comments</li>
                <li className = 'list-item'>image</li>
                <li className = 'list-item'>tags</li>
            </ul>
            <p className = 'common-text'>Для компонента Tag нужно добавить параметр source</p>
            <p className = 'common-text'>Для компонента CommentsCounter нужно добавить параметр counts</p>
            <p className = 'common-text'>Для компонента LikesCounter нужно добавить параметр counts</p>
            <h1 className = 'main-title'>Урок 2. Домашнее задание N2</h1>
            <p className = 'common-text'>В этом задании нужно улучшить компонент LikesCounter с предыдущего урока.</p>
            <p className = 'common-text'>Даный компонент имеет параметр counts, задача состоит в том чтобы добавить к этому
                компоненту возможность при клике на сердечко увеличивать количество лайков.
            </p>
            <p className = 'common-text'>&nbsp;</p>
            <h2 className = 'secondary-title'>Обратите внимание</h2>
            <ul className = 'list'>
                <li className = 'list-item'>Как вы уже знаете мутировать параметры в реакте нельзя, поэтому не забудьте
                    использовать состояние для решения этой задачи.
                </li>
                <li className = 'list-item'>Изначальное состояние для количества лайков необходимо получать из props</li>
                <li className = 'list-item'>Накручивать лайки нельзя, поэтому если вы кликните на сердечко повторно то
                    количество лайков уменьшится на 1
                </li>
            </ul>
        </S.Container>
    );
};
