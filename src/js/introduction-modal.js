(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-introduction-open]"),
    closeModalBtn: document.querySelector("[data-modal-introduction-close]"),
    modal: document.querySelector("[data-modal-introduction]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
