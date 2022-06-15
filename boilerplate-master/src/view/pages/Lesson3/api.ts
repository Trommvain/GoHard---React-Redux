const base = 'https://jsonplaceholder.typicode.com';
const root = 'users';

const uri = `${base}/${root}`;

export const api = {
    person: {
        fetch: async () => {
            // eslint-disable-next-line no-return-await
            return await fetch(`${uri}`);
        },
    },
};
