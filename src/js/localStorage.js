import { getCount } from './count.js'
let todos = getData()

// получение данных
function setData() {
  localStorage.setItem('todos', JSON.stringify(todos))
}
// сохранение данных
function getData() {
  const todos = localStorage.getItem('todos')
  return todos ? JSON.parse(todos) : []
}
if (localStorage.getItem('todos')) {
  getCount()
}

export { setData, todos }
