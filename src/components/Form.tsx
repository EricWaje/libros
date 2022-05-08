import React, { useState } from 'react';
import { Book } from '../types';

interface FormState {
    inputValues: Book;
}

interface FormProps {
    onNewBook: (newBook: Book) => void;
}

export const Form = ({ onNewBook }: FormProps) => {
    const [inputValues, setInputValues] = useState<FormState['inputValues']>({
        title: '',
        description: '',
        img: '',
        id: Math.random(),
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewBook(inputValues);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    value={inputValues.title}
                    type="text"
                    name="title"
                    placeholder="title"
                />
                <input
                    onChange={handleChange}
                    value={inputValues.img}
                    type="text"
                    name="img"
                    placeholder="img"
                />
                <textarea
                    onChange={handleChange}
                    value={inputValues.description}
                    name="description"
                    placeholder="description"
                />

                <button className="save">Save</button>
            </form>
        </div>
    );
};
