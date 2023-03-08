const buttonModal = document.querySelector('#headerButtonModal')
const headerModal = document.querySelector('#modalHeader')

console.log(buttonModal, headerModal)

headerModal.addEventListener('shown.bs.modal', () => {
  buttonModal.focus()
})
