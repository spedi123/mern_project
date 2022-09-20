import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const getAllMyBooks = async () => {
    const res = await http.get('/mybooks');
    return res.data;
};

export const getBookById = async (id) => {
    const res = await http.get(`/books/${id}`);
    return res.data;
};

export const createBook = async (data) => {
    const res = await http.post('/books/new', data);
    return res.data;
}

export const updateBookById = async (id, data) => {
    const res = await http.put(`/books/${id}/edit`, data);
    return res.data;
}

export const deleteBookById = async (id) => {
    const res = await http.delete(`/books/${id}/delete`);
    return res.data;
}