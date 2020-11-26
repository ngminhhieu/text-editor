import simpleRestProvider from 'ra-data-simple-rest';

export const dataProvider = simpleRestProvider('https://jsonplaceholder.typicode.com/');

export const  data = dataProvider.getOne('posts', { id: 1 })

export const getPost = () => {
    return (
        dataProvider.create('posts', { data: { title: "hello, world" } })
    );
};