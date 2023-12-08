import { getTime, date } from './clock.js'
import { getUser } from './users.js'

const timer = setInterval(getTime, 1000)
import {
  ulContainerEl,
  selectUserEl,
  selectEditUserEl,
  formElementAdd,
  sectionTodoEl,
  sectionProgressEl,
  sectionDoneEl,
  btnDeleteAllDoneEl,
  formElementEdit,
} from './DOM.js';
