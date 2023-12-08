import Modal from 'bootstrap/js/dist/modal'

function $(selector) {
  return document.querySelector(selector)
}

function $$(selector) {
  return document.querySelectorAll(selector)
}
const sectionTodoEl = $('.todo')
const sectionProgressEl = $('.in-progress')
const sectionDoneEl = $('.done')
const timeEl = $('time')
const btnDeleteAllDoneEl = $('#btnDeleteAllCards')
const ulContainerEl = $$('ul')
const counterEl = $$('p')
const textareaDescriptionEl = $('textarea[name="description"]');
const selectUserEl = $('select[name="user"]');
const inputColorEl = $('input[name="bgColor"]');
const inputEditTitleEl = $('input[name="titleEdit"]');
const textareaEditDescriptionEl = $('textarea[name="descriptionEdit"]');
const selectEditUserEl = $('select[name="userEdit"]');
const inputEditColorEl = $('input[name="bgColorEdit"]');
const inputTitleEl = $('input[name="title"]')
const formElementAdd = $('#formAddCard')
const formElementEdit = $('#formEditCard')
const modalErrorEl = $('#ErrorModal')

const modalError = new Modal(modalErrorEl)

export {
  timeEl,
  sectionTodoEl,
  sectionProgressEl,
  sectionDoneEl,
  btnDeleteAllDoneEl,
  ulContainerEl,
  counterEl,
  inputTitleEl,
  modalError,
  formElementAdd,
  formElementEdit,
  textareaDescriptionEl,
  selectUserEl,
  inputColorEl,
  inputEditTitleEl,
  textareaEditDescriptionEl,
  selectEditUserEl,
  inputEditColorEl,
}
