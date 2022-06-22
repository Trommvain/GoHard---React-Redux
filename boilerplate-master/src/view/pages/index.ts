// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Lesson1and2 = lazy(() => import(/* webpackChunkName: "Lesson1and2" */ './Lesson1and2'));
export const Keyboard = lazy(() => import(/* webpackChunkName: "Keyboard" */ './Keyboard'));
export const Accordion = lazy(() => import(/* webpackChunkName: "Accordion" */ './Accordion'));
export const Lesson3 = lazy(() => import(/* webpackChunkName: "Lesson3" */ './Lesson3'));
export const Secret = lazy(() => import(/* webpackChunkName: "Secret" */ './Secret'));
export const Lesson5 = lazy(() => import(/* webpackChunkName: "Lesson5" */ './Lesson5'));
export const Lesson6 = lazy(() => import(/* webpackChunkName: "Lesson6" */ './Lesson6'));
export const Profile = lazy(() => import(/* webpackChunkName: "Profile" */ './Profile'));
export const Lesson7 = lazy(() => import(/* webpackChunkName: "Lesson7" */ './Lesson7'));
export const Person = lazy(() => import(/* webpackChunkName: "Person" */ './Person'));
export const Lesson71 = lazy(() => import(/* webpackChunkName: "Lesson71" */ './Lesson71'));
export const Film = lazy(() => import(/* webpackChunkName: "Film" */ './Film'));
