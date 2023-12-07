import Modal from 'bootstrap/js/dist/modal'

function $(selector) {
  return document.querySelector(selector)
}

function $$(selector) {
  return document.querySelectorAll(selector)
}

const timeEl = $('time');

export {
  timeEl,
}
