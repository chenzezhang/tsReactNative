import { handleActions, Action } from 'redux-actions';

import { Todo, IState } from './../actions/actionType';
import { ADD_TODO } from './../types/index';

const initialState: Todo = 
  {
    id: 1,
    text: 'user redux test',
    completed: '第一次'
  };

export default handleActions<IState, Todo>({
  
  [ADD_TODO]: (state: IState, action: Action<Todo>): IState => {
    if (action.payload) { 
      return {
        ...state,
        id: action.payload.id,
        text: action.payload.text,
        completed: action.payload.completed
      
      };
    } else {
      return state;
    }
  },
  
}, initialState);