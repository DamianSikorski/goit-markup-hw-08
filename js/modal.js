(() => {
  const refs = {
    openModalBtn: document.querySelector("[open-menu]"),
    closeModalBtn: document.querySelector("[close-menu]"),
    modal: document.querySelector("[menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
