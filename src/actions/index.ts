import { createAction } from 'redux-actions';
import { Todo } from './actionType';

import {
  ADD_TODO,
} from './../types/index';

const addTodo = createAction<Todo, number, string, string>(
  ADD_TODO,
  (id:number, text: string, completed: string) => ({ id, text, completed })
);

export { addTodo };