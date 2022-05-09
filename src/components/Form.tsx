import React, { useReducer } from 'react';
import { formReducer, initialState } from '../reducers/formReducer';
import { Book } from '../types';

interface FormProps {
    onNewBook: (newBook: Book) => void;
}

type Events = {
    handleChange: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
    handleSubmit: React.FormEvent<HTMLFormElement>;
};

export const Form = ({ onNewBook }: FormProps) => {
    const [inputValues, dispatch] = useReducer(formReducer, initialState);

    const handleSubmit = (e: Events['handleSubmit']) => {
        e.preventDefault();
        onNewBook(inputValues);
        dispatch({
            type: 'CLEAR',
        });
    };

    const handleChange = (e: Events['handleChange']) => {
        const { name, value } = e.target;
        dispatch({
            type: 'GET_VALUES',
            payload: {
                inputName: name,
                inputValue: value,
            },
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
