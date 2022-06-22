// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import * as Pages from '../pages';

// Tools
import * as book from './book';

export const Public: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Pages.Main /> }
                path = { book.ROOT }
            />
            <Route
                element = { <Pages.Keyboard /> }
                path = { book.KEYBOARD }
            />
            <Route
                element = { <Pages.Lesson1and2 /> }
                path = { book.LESSON1AND2 }
            />
            <Route
                element = { <Pages.Accordion /> }
                path = { book.ACCORDION }
            />
            <Route
                element = { <Pages.Lesson3 /> }
                path = { book.LESSON3 }
            />
            <Route
                element = { <Pages.Secret /> }
                path = { book.SECRET }
            />
            <Route
                element = { <Pages.Secret /> }
                path = { book.SECRET + '/:id' }
            />
            <Route
                element = { <Pages.Lesson5 /> }
                path = { book.LESSON5 }
            />
            <Route
                element = { <Pages.Lesson6 /> }
                path = { book.LESSON6 }
            />
            <Route
                element = { <Pages.Profile /> }
                path = { book.PROFILE }
            />
            <Route
                element = { <Pages.Lesson7 /> }
                path = { book.LESSON7 }
            />
            <Route
                element = { <Pages.Person /> }
                path = { book.LESSON7 + '/:id' }
            />
            <Route
                element = { <Pages.Lesson71 /> }
                path = { book.LESSON71 }
            />
            <Route
                element = { <Pages.Film /> }
                path = { book.LESSON71 + '/:id' }
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = { book.ROOT }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
