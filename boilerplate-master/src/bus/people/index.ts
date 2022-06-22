// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';
import { peopleActions } from './slice';

//Types
import { People } from './types';

export const usePeople = () => {
    const dispatch = useDispatch();
    const people = useSelector((state) => state.people);

    const fetchPeople = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/people', {
                method: 'GET',
            });

            if (response.status !== 200) {
                throw new Error('people fetch failed');
            }

            const data: People = await response.json();

            dispatch(peopleActions.setPeople(data));
        } catch (error) { }  // eslint-disable-line no-empty
    };

    useEffect(() => {
        fetchPeople();
    }, []);

    return {
        people,
        setPeople: (people: People) => dispatch(peopleActions.setPeople(people)),
    };
};
