import { handleActions, Action } from 'redux-actions';

import { Todo, IState } from './../actions/actionType';
import { ADD_TODO } from './../types/index';

const initialState: IState = [
  <Todo>{
    text: 'Use Redux with TypeScript',
    completed: false,
    id: 0
  }
];

export default handleActions<IState, Todo>({
  
  [ADD_TODO]: (state: IState, action: Action<Todo>): IState => {
    
    if (action.payload && action.payload.text) { 
      return [{
        id: action.payload.id,
        completed: action.payload.completed,
        text: action.payload.text
      },
        ...state
      ];

    } else {
      return state;
    }

  },
}, initialState);