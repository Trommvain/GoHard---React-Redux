// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';
import { peopleActions } from './slice';

//Types
import { Man } from './types';

export const usePeople = () => {
    const dispatch = useDispatch();
    const { error, people } = useSelector((state) => state.people);

    const fetchPeople = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/people', {
                method: 'GET',
            });

            if (response.status !== 200) {
                throw new Error(`Error occured: ${response.status}`);
            }

            const data: { results: Array<Man> } = await response.json();

            dispatch(peopleActions.setPeople(data.results));
        } catch (errors: string | any) {
            dispatch(peopleActions.handlePeopleError(errors.message));
        }
    };

    useEffect(() => {
        if (!people) {
            fetchPeople();
        }
    }, []);

    return {
        people,
        error,
    };
};
