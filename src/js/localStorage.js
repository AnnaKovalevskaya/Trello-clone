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

export { setData, todos }
