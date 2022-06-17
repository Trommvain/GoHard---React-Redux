// Core
import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';

// Styles
import * as S from './styles';

//Types
import { FormValuesTypes } from '../../pages/Lesson5';

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Required')
        .matches(/^[A-zА-яЁё]+$/, 'Incorrect name'),
    surname: Yup.string()
        .required('Required')
        .matches(/^[A-zА-яЁё]+$/, 'Incorrect surname'),
    age: Yup.number()
        .min(6, 'Incorrect age')
        .max(60, 'Incorrect age'),
    email: Yup.string()
        .email('Invalid email adress')
        .required('Required'),
});

export const StudentRegistrationApp = () => {
    const initialValues: FormValuesTypes = {
        firstName:  '',
        surname:    '',
        age:        '',
        email:      '',
        sex:        'male',
        speciality: 'designer',
    };

    return (
        <S.Container>
            <Formik
                initialValues = { initialValues }
                validationSchema = { validationSchema }
                onSubmit = { (values) => {
                    values.age ? values.age = Number(values.age) : '';
                    console.log(values);
                } }>

                {({ errors, touched, handleSubmit }) => (
                    <form onSubmit = { handleSubmit }>
                        <fieldset>
                            <legend>Student Registration</legend>
                            {/*Name*/}
                            <section className = { errors.firstName && touched.firstName ? 'error' : '' }>
                                <label className = 'form-item'>Name</label>
                                <Field
                                    name = 'firstName'
                                    placeholder = 'Your name...'
                                    type = 'text'
                                />
                            </section>
                            {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
                            {/*Surname*/}
                            <section className = { errors.surname && touched.surname ? 'error' : '' }>
                                <label className = 'form-item'>Surname</label>
                                <Field
                                    name = 'surname'
                                    placeholder = 'Your surname...'
                                    type = 'text'
                                />
                            </section>
                            {errors.surname && touched.surname && <div>{errors.surname}</div>}
                            {/*Age*/}
                            <section className = { errors.age && touched.age ? 'error' : '' }>
                                <label className = 'form-item'>Age</label>
                                <Field
                                    name = 'age'
                                    placeholder = 'Your age...'
                                    type = 'text'
                                />
                            </section>
                            {errors.age && touched.age && <div>{errors.age}</div>}
                            {/*Email*/}
                            <section className = { errors.email && touched.email ? 'error' : '' }>
                                <label className = 'form-item'>Email </label>
                                <Field
                                    name = 'email'
                                    placeholder = 'Your email...'
                                    type = 'email'
                                />
                            </section>
                            {errors.email && touched.email && <div>{errors.email}</div>}
                            {/*Sex*/}
                            <label className = 'form-item'>Sex</label>
                            <label>
                                <Field
                                    checked = 'checked'
                                    id = 'male'
                                    name = 'sex'
                                    type = 'radio'
                                    value = 'male'
                                />
                                Male
                            </label>
                            <label>
                                <Field
                                    id = 'female'
                                    name = 'sex'
                                    type = 'radio'
                                    value = 'female'
                                />
                                Female
                            </label>
                            {/*Speciality*/}
                            <label className = 'form-item'>Speciality</label>
                            <Field
                                as = 'select'
                                name = 'speciality'>
                                <option value = 'designer'>designer</option>
                                <option value = 'developer'>developer</option>
                                <option value = 'writer'>writer</option>
                            </Field>

                            <button
                                className = 'submit-button'
                                type = 'submit'>Submit
                            </button>
                        </fieldset>
                    </form>
                )}
            </Formik>
        </S.Container>
    );
};
