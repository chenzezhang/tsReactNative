import { createAction } from 'redux-actions';
import { Todo } from './actionType';

import {
  ADD_TODO,
} from './../types/index';

const addTodo = createAction<Todo, string>(
  ADD_TODO,
  (text: string) => ({ text, completed: false })
);

export { addTodo };