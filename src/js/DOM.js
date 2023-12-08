import Modal from 'bootstrap/js/dist/modal'

function $(selector) {
  return document.querySelector(selector)
}

function $$(selector) {
  return document.querySelectorAll(selector)
}
const sectionTodoEl = $('.todo');
const sectionProgressEl = $('.in-progress');
const sectionDoneEl = $('.done');
const timeEl = $('time');
const btnDeleteAllDoneEl = $('#btnDeleteAllCards');

export {
  timeEl,
  sectionTodoEl,
  sectionProgressEl,
  sectionDoneEl,
  btnDeleteAllDoneEl,
}
