import { handleActions, Action } from 'redux-actions';

import { Todo, IState } from './../actions/actionType';
import { ADD_TODO } from './../types/index';

const initialState: IState = 
  [<Todo>{}];

export default handleActions<IState, Todo>({
  
  [ADD_TODO]: (state: IState, action: Action<Todo>): IState => {
    console.log(action.payload,'~~~~~~~~~~~~~~~~~~~~')
    if (action.payload) { 
      console.log(action.payload,'+++++++++++++++++++++++')
      return [
        {id: action.payload.id,
        completed: action.payload.completed,
        text: action.payload.text
      }, ...state]
    } else {
      return state;
    }
  },
  
}, initialState);