// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Lesson1and2 = lazy(() => import(/* webpackChunkName: "Lesson1and2" */ './Lesson1and2'));
export const Keyboard = lazy(() => import(/* webpackChunkName: "Keyboard" */ './Keyboard'));
export const Accordion = lazy(() => import(/* webpackChunkName: "Accordion" */ './Accordion'));
