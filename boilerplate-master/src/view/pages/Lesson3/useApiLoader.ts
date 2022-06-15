// Core
import { useEffect, useState } from 'react';
import { api } from './api';

export const useApiLoader = () => {
    const [ db, setDb ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(true);
    const [ isServerError, setIsServerError ] = useState(false);
    const [ isClientError, setIsClietnError ] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await api.person.fetch();
            if (response.status >= 500 && response.status <= 526) {
                console.log(`Server error: ${response.status}`);
                setIsServerError(true);
            } else if (response.status >= 400 && response.status <= 499) {
                console.log(`Client error: ${response.status}`);
                setIsClietnError(true);
            } else {
                const data = await response.json();
                setDb(data);
                setIsServerError(false);
                setIsClietnError(false);
            }
            setIsFetching(false);
        })();
    }, []);

    return {
        db,
        isFetching,
        isServerError,
        isClientError,
    };
};
