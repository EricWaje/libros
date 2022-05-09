import { Book } from '../types';

interface FormState {
    inpValues: Book;
}

export const initialState = {
    title: '',
    description: '',
    img: '',
    id: Math.random(),
};

type Actions =
    | {
          type: 'GET_VALUES';
          payload: {
              inputName: string;
              inputValue: string;
          };
      }
    | {
          type: 'CLEAR';
      };

export const formReducer = (state: FormState['inpValues'], action: Actions) => {
    switch (action.type) {
        case 'GET_VALUES':
            const { inputName, inputValue } = action.payload;
            return {
                ...state,
                [inputName]: inputValue,
            };
        case 'CLEAR': {
            return {
                ...initialState,
            };
        }

        default:
            return initialState;
    }
};
