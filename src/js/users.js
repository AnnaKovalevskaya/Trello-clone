async function getUser(select) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const user = await response.json()
  user.forEach((element) => {
    let optionAddEl = document.createElement('option')
    optionAddEl.value = element.name
    optionAddEl.innerHTML = element.name
    select.append(optionAddEl)
  });
}
export { getUser }
